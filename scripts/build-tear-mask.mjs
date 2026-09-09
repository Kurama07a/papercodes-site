// Cuts a mask out of the tear overlay's own alpha channel: opaque where the art
// has a hole punched through it, transparent everywhere else. The evidence
// section paints its black plate through this mask, so the ink stops exactly at
// the torn edge instead of at a hand-tuned rectangle.
//
//   node scripts/build-tear-mask.mjs
//
// Also prints the largest rectangle that fits inside the opening — that is where
// the heading sits (`.evidence-section__tear-ink h2` in sections-reconciled.css).
import sharp from "sharp";

const SRC = "public/images/proof-tear-overlay-v2.png";
const OUT = "public/images/proof-tear-hole-v2.png";
const CUTOFF = 128;
// Grow the hole a few pixels so the plate tucks under the torn edge; the paper
// renders above it, so the overlap hides rather than leaving a light seam.
const GROW = 3;

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;
const alpha = new Uint8Array(W * H);
for (let i = 0, p = 0; p < W * H; p++, i += C) alpha[p] = data[i + 3];

// Anything transparent that the border can reach is background, not a hole.
const background = new Uint8Array(W * H);
const queue = [];
const seed = (x, y) => {
  const p = y * W + x;
  if (!background[p] && alpha[p] < CUTOFF) { background[p] = 1; queue.push(p); }
};
for (let x = 0; x < W; x++) { seed(x, 0); seed(x, H - 1); }
for (let y = 0; y < H; y++) { seed(0, y); seed(W - 1, y); }
while (queue.length) {
  const p = queue.pop(), x = p % W, y = (p / W) | 0;
  if (x > 0) seed(x - 1, y);
  if (x < W - 1) seed(x + 1, y);
  if (y > 0) seed(x, y - 1);
  if (y < H - 1) seed(x, y + 1);
}

let hole = new Uint8Array(W * H);
for (let p = 0; p < W * H; p++) if (alpha[p] < CUTOFF && !background[p]) hole[p] = 255;

const dilate = (src) => {
  const pass = new Uint8Array(W * H), out = new Uint8Array(W * H);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    let v = 0;
    for (let d = -GROW; d <= GROW; d++) {
      const xx = x + d;
      if (xx >= 0 && xx < W && src[y * W + xx]) { v = 255; break; }
    }
    pass[y * W + x] = v;
  }
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    let v = 0;
    for (let d = -GROW; d <= GROW; d++) {
      const yy = y + d;
      if (yy >= 0 && yy < H && pass[yy * W + x]) { v = 255; break; }
    }
    out[y * W + x] = v;
  }
  return out;
};
hole = dilate(hole);

const rgba = Buffer.alloc(W * H * 4);
for (let p = 0; p < W * H; p++) {
  rgba[p * 4] = 255; rgba[p * 4 + 1] = 255; rgba[p * 4 + 2] = 255; rgba[p * 4 + 3] = hole[p];
}
await sharp(rgba, { raw: { width: W, height: H, channels: 4 } })
  .blur(0.8)
  .png({ compressionLevel: 9 })
  .toFile(OUT);

// Largest inscribed rectangle, by the usual histogram sweep.
const heights = new Int32Array(W);
let best = { area: 0 };
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) heights[x] = hole[y * W + x] ? heights[x] + 1 : 0;
  const stack = [];
  for (let x = 0; x <= W; x++) {
    const h = x === W ? 0 : heights[x];
    let start = x;
    while (stack.length && stack[stack.length - 1].h >= h) {
      const bar = stack.pop();
      const area = bar.h * (x - bar.x);
      if (area > best.area) best = { area, x0: bar.x, x1: x - 1, y0: y - bar.h + 1, y1: y };
      start = bar.x;
    }
    stack.push({ x: start, h });
  }
}

const pct = (n) => n.toFixed(2) + "%";
console.log(`wrote ${OUT} (${W}x${H})`);
console.log("heading inset:", [
  pct((100 * best.y0) / H), pct((100 * (W - best.x1)) / W),
  pct((100 * (H - best.y1)) / H), pct((100 * best.x0) / W),
].join(" "));
