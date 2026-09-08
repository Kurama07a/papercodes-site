# Generated image assets

## `paper-texture.webp`

- Mode: OpenAI built-in image generation
- Purpose: seamless page surface
- Prompt: Square seamless neutral off-white archival editorial paper near `#eeede9`, with fine fibers, faint creases, lightly distressed photocopy grain, and tiny graphite flecks. Flat scan with no text, objects, borders, or vignette.

## `chaos-collage.webp`

- Mode: OpenAI built-in image editing
- Source: user-supplied operational desk collage
- Purpose: chaos-to-system section
- Prompt: Preserve the 4:3 top-down desk composition while making it feel like documentary evidence of an overwhelmed office. Deepen black density, contrast, overlap, shadows, and scanner grain. Obscure specific company names, emails, dates, money, and personal information into generic unreadable marks. Retain at most two or three short handwritten fragments and restrained signal-red pen marks. No logos, brands, cute scrapbook styling, or watermark.

## `hero-tear-alpha.png`

- Mode: OpenAI built-in image editing, followed by local alpha extraction
- Source: user-supplied transparent torn-paper sheet
- Purpose: foreground paper layer over the live hero workflow
- Prompt: Preserve the paper color, fibers, curled edges, and torn silhouette. Reframe the intact paper across the left side with a spacious opening across the center-right. No text, photography, red, diagrams, UI, or black fill in the opening. The generated preview checkerboard was converted into a real alpha channel locally.

## `ethos-collage.webp`

- Mode: OpenAI built-in image editing
- Source: user-supplied anonymous architectural photograph
- Purpose: ethos triptych background
- Prompt: Preserve the anonymous figure, back-facing pose, concrete structure, wet reflection, stairs, skyline, monochrome realism, and documentary mood. Reframe as a wide panorama with dark architecture left, quiet pale space through the center, and the figure with construction forms toward the right. No text, logos, paper edges, or added color.

## `torn-divider.png`

- Source: derived locally from `hero-tear-alpha.png`
- Mode: lossless crop preserving RGBA transparency
- Purpose: reuse the same physical torn-paper edge at the chaos-to-system junction so the photographic collage does not terminate on a clean digital crop

## `hero-tear-sealed.png`

- Source: derived locally from `hero-tear-alpha.png` and `paper-texture.webp`
- Mode: connected-edge alpha repair preserving the enclosed torn opening
- Purpose: make the paper continue to every outer edge while allowing the engine to appear only through the internal tear

## `type-distress-mask.png`

- Mode: OpenAI built-in image generation, followed by local grayscale-to-alpha conversion
- Purpose: reusable opacity mask for controlled letterpress wear on monumental serif headlines
- Prompt: A seamless monochrome typography mask with an overwhelmingly white field, sparse paper-fiber voids, dry-ink flecks, photocopy erosion, and slightly stronger wear in the lower third; no letters, text, objects, borders, or watermark.
