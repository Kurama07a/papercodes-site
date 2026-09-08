---
name: PaperCodes
description: A high-variance editorial dossier that exposes the systems beneath business growth.
colors:
  paper: "#f4f1ea"
  paper-bright: "#faf8f3"
  ink: "#0b0b0b"
  engine: "#141414"
  signal: "#d52b2b"
  muted: "#5f5d58"
  rule: "#aaa69e"
  engine-rule: "#565656"
typography:
  hero-display:
    fontFamily: '"Instrument Serif", Georgia, serif'
    fontSize: "clamp(4.3rem, 6.8vw, 7.25rem)"
    fontWeight: 400
    lineHeight: 0.77
    letterSpacing: "-0.035em"
  route-display:
    fontFamily: '"Instrument Serif", Georgia, serif'
    fontSize: "clamp(4rem, 8vw, 8rem)"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "-0.035em"
  section-display:
    fontFamily: '"Instrument Serif", Georgia, serif'
    fontSize: "clamp(3.3rem, 5.8vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "-0.03em"
  feature-display:
    fontFamily: '"Instrument Serif", Georgia, serif'
    fontSize: "clamp(2.8rem, 4.4vw, 4.8rem)"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "-0.03em"
  index-title:
    fontFamily: '"Instrument Serif", Georgia, serif'
    fontSize: "clamp(1.55rem, 2.2vw, 2.4rem)"
    fontWeight: 400
    lineHeight: 0.95
  body:
    fontFamily: '"IBM Plex Mono", "Courier New", monospace'
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  body-small:
    fontFamily: '"IBM Plex Mono", "Courier New", monospace'
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: '"IBM Plex Mono", "Courier New", monospace'
    fontSize: "0.68rem"
    fontWeight: 500
    letterSpacing: "0.045em"
  micro:
    fontFamily: '"IBM Plex Mono", "Courier New", monospace'
    fontSize: "0.62rem"
    fontWeight: 400
  tool-name:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(0.78rem, 1.15vw, 1.1rem)"
    fontWeight: 700
rounded:
  none: "0px"
spacing:
  page-gutter: "clamp(1rem, 2.2vw, 2rem)"
  header-height: "4.5rem"
  content-max: "104rem"
  engine-grid: "3rem"
components:
  project-link-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-bright}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
  project-link-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
  project-link-light:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
  navigation-label:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  tool-logo:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.tool-name}"
    rounded: "{rounded.none}"
  workflow-stage:
    backgroundColor: "{colors.engine}"
    textColor: "{colors.paper-bright}"
    rounded: "{rounded.none}"
    padding: "clamp(0.7rem, 1vw, 1rem)"
  pipeline-step:
    backgroundColor: "{colors.engine}"
    textColor: "{colors.paper-bright}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.8rem 0"
  architecture-layer:
    backgroundColor: "{colors.engine}"
    textColor: "{colors.paper-bright}"
    rounded: "{rounded.none}"
    padding: "0.75rem"
  capability-row:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.2rem 0"
  project-log:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.35rem"
  split-demo:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
---

# Design System: PaperCodes

## Overview

**Creative North Star: "The Torn Systems Dossier"**

PaperCodes is an editorial-industrial agency world for growth-stage operators: a warm paper dossier collides with a precise dark operating engine. It is raw, confident, technical, and human. Monumental serif propositions create urgency; compact monospaced language exposes the inputs, handoffs, decisions, and outcomes behind them.

The shipped Stage 2 homepage follows a high-variance, medium-density 9/3/5 direction with restrained static motion. Its visual rhythm moves between full-height splits, 4/3/5 dossier fields, 12-column technical spreads, indexes, evidence plates, triptychs, and a dark closing field. Rotation, overlap, tonal paper layers, grid lines, and red signals create tension without animated spectacle.

Stage 2 is a complete static narrative: hero and tool band; chaos-to-system transformation; four-layer architecture; capabilities index; clearly illustrative concept evidence; surface-versus-engine demonstration; ethos triptych; process loop; and closing project invitation. Stage 3 layers motion over that narrative without changing it; see **Motion** below. The interactive drag reveal for the experience-versus-engine demonstration remains deferred.

**Key Characteristics:**

- Warm uncoated paper, bright paper, graphite layers, ink black, and a single signal red.
- Monumental editorial serif paired with dense, inspectable technical mono.
- High composition variance held together by repeated 12-column alignment and one-pixel rules.
- Static dossier tension from rotation, overlap, grids, offset notes, and alternating light/dark fields.
- Mechanical motion that reveals the composition into place and then rests.
- Square geometry, compact data labels, typed illustrative evidence, and direct operational language.
- Responsive reflow that preserves narrative order instead of shrinking desktop compositions.

## Colors

The system uses one chromatic accent and an intentionally expanded neutral ladder. The close neutral values are functional: they separate paper layers, keep technical hierarchy legible inside the engine, and prevent a long monochrome page from flattening into one undifferentiated surface.

### Primary

- **Signal Red:** Marks automation language, stage and row indices, system states, concept badges, connectors, selection, focus, and decisive editorial emphasis. Its scarcity gives it authority.

### Neutral

- **Warm Paper:** Default page canvas and the principal customer-facing surface.
- **Bright Paper:** Raised paper insert, footer field, light-on-dark text, and light closing action.
- **Ink Black:** Primary text, high-emphasis borders, actions, and the mobile navigation field.
- **Engine Charcoal:** Workflow, pipeline, architecture, demo, ethos, evidence-plate, and closing surfaces.
- **Muted Graphite:** Secondary paper-side copy, labels, and explanatory text.
- **Paper Rule:** Shared one-pixel dividers that connect the page into one dossier.
- **Engine Rule:** One-pixel structure within near-black system panels.

The shipped compositions also use tonal neutral steps directly where a global primitive would be too coarse: graphite field and paper scraps for the chaos panel; dark charcoal body copy on paper; pale gray headings, muted gray lists, dim connector marks, and deep dividers inside engine panels. These close values are intentional optical hierarchy, not accidental palette drift. New work should first reuse an existing neutral role before adding another step.

### Named Rules

**The Signal Means System Rule.** Use signal red for automation, state, focus, evidence status, or a decisive proposition—not as general decoration.

**The Tonal Neutral Rule.** Neighboring grays may separate paper layers or engine hierarchy, but they must stay within the warm-paper or neutral-engine families and perform a distinct legibility job.

**The Two-Surface Rule.** Customer-facing experience lives on paper; operational mechanics live in the near-black engine. Preserve this contrast whenever both appear together.

## Typography

**Display Font:** Instrument Serif (with Georgia fallback)  
**Body and Label Font:** IBM Plex Mono (with Courier New fallback)  
**Tool-Name Font:** ui-sans-serif, system-ui, sans-serif

**Character:** Instrument Serif makes the agency expressive and human; IBM Plex Mono makes its systems inspectable. The neutral system sans is a narrow exception for tool logos, allowing familiar integration names and their Simple Icons to read as a clean compatibility roster.

### Hierarchy

- **Hero Display** (regular, `clamp(4.3rem, 6.8vw, 7.25rem)`, 0.77 line height): The two-part homepage proposition, with explicit line breaks and the automation half in signal red.
- **Route Display** (regular, `clamp(4rem, 8vw, 8rem)`, 0.84 line height): Secondary route-shell titles.
- **Section Display** (regular, `clamp(3.3rem, 5.8vw, 6rem)`, 0.84 line height): Architecture, capabilities, experience-engine, and process headings.
- **Feature Display** (regular, `clamp(2.8rem, 4.4vw, 4.8rem)`, 0.84 line height): Evidence introductions and similarly weighted editorial features.
- **Oversized Editorial Variant** (regular, up to 7.8rem, 0.76–0.84 line height): Ethos and closing statements that need a singular silhouette.
- **Editorial Notes** (regular italic, approximately 1.45–3.6rem): Rotated annotations and paper notes in the dossier field.
- **Index and Process Titles** (regular, approximately 1.55–3rem, 0.9–0.95 line height): Capability names, process steps, evidence plates, and supporting editorial titles.
- **Body** (regular, 0.7–0.875rem, 1.5–1.75 line height): Explanatory copy, kept deliberately compact and usually constrained to 42–58 characters.
- **Label** (regular or medium, 0.64–0.75rem, usually uppercase): Navigation, actions, stage names, data rows, metadata, and system outcomes.
- **Micro** (regular, 0.56–0.62rem): Status, disclaimers, indices, footer copy, and fine technical annotation.
- **Tool Name** (bold, fluid 0.78–1.1rem): Integration names only, paired with an actual Simple Icon where the library supplies one.

The expanded ramp is intentional. This is an editorial composition, so display sizes respond to each section's silhouette and column span rather than collapsing into one universal headline size. The family, weight, tight leading, negative tracking, and role division provide consistency across the larger set of optical sizes.

### Named Rules

**The Two-Voice Rule.** Serif makes the promise; mono explains, routes, measures, and verifies the system.

**The Optical Ramp Rule.** Preserve the expanded composition-led display ramp. Reuse the nearest established role and adjust only when a section's silhouette or grid span requires it.

**The Tight Display Rule.** Large serif headlines use compressed leading and modest negative tracking; do not normalize them into conventional marketing typography.

## Layout

Every major surface is centered and capped at 104rem with a fluid page gutter. A 12-column desktop grid is the alignment backbone, but individual sections deliberately vary their internal composition. The result is a medium-density narrative with high visual variance rather than a repeated landing-page template.

The sticky 4.5rem header uses a three-part grid: wordmark left, navigation centered, project action right. The hero fills at least the remaining viewport height and starts as a five-column paper proposition beside a seven-column engine; below 72rem it balances to six and six. The tool band adds a flexible logo roster plus a fixed 12rem outcome note.

The shipped homepage sequence uses these spatial signatures:

- **Chaos to System:** A 4/3/5 split—layered gray dossier field, uppercase transformation statement, dark seven-step pipeline.
- **Architecture:** A 12-column spread with a five-column editorial introduction, a five-column stack offset to column seven, and a narrow right-side taxonomy.
- **Capabilities:** Four-column heading beside an eight-column five-row index.
- **Evidence:** 2.5/9.5 split with a compact editorial rail and three equal project logs.
- **Experience / Engine:** Equal paper and dark halves inside one ruled frame.
- **Ethos:** 3.2/4.8/4 triptych of dark, paper, and dark fields.
- **Process:** Three-column heading beside a four-step loop spanning the remaining nine columns.
- **Closing:** Full dark 12-column field with status left, large proposition centered, and light action at the lower right.

At 56rem and below, desktop navigation becomes a full-viewport dark menu and all major Stage 2 grids reflow to one column. Evidence logs stack; experience precedes engine; ethos panels become a vertical triptych; capability rows simplify; the process becomes two columns. At 35rem and below, workflows and process loops become single-column, tool logos become two columns, architecture layer metadata wraps beneath its title, and the closing display scale tightens. The header drops to 4rem and the footer hides its center loop before it becomes cramped.

**The Variance-on-a-Rail Rule.** Section compositions may change radically, but their outer width, gutters, shared rules, and reading order must stay aligned.

**The Spread-to-Sequence Rule.** Preserve desktop juxtaposition, then turn it into a direct semantic sequence on small screens; never squeeze a wide dossier into a miniature version of itself.

## Elevation & Depth

The system uses no box shadows. Depth is structural and tonal: overlapping rotated paper fields, close neutral layers, one-pixel borders, hard light/dark transitions, and faint 3rem technical grids. The chaos field's offsets and notes imply a dossier without claiming the generated collage or torn-paper assets that remain deferred.

Motion is deliberately restrained. The page is static at rest and the Stage 3 motion layer preserves that: reveals play once, the engine's execution signal returns to an idle state between runs, and no composition depends on animation to be readable. See **Motion**.

### Named Rules

**The Flat-but-Layered Rule.** Build depth with overlap, tone, and ruled boundaries—not shadows, blur, glass, or floating cards.

**The Static Dossier Rule.** Rotation and offset carry the physical energy. Motion reveals a composition into place and then stops; it never becomes the composition.

## Motion

Stage 3 adds motion to the Stage 2 composition. It is implemented with Framer Motion (the `motion` package) for element and state animation, and with CSS for anything living in a pseudo-element. Motion is presentation only: the page is complete, legible, and navigable with every animation removed.

**Character:** precise, mechanical, slightly raw. Curves decelerate hard and stop — no springs, no overshoot, no bounce. Tokens live in `components/motion/motion-tokens.ts`.

### Vocabulary

- **Press:** a `clip-path` sweep from top to bottom, no fade. Type meeting paper. Used for the hero proposition, section headlines, and route titles.
- **Mark:** a fast left-to-right `clip-path` wipe, like a marker stroke. Used for annotations, notes, labels, and index rows.
- **Plate:** a `clip-path` wipe from the leading edge, for dark engine panels.
- **Rise:** a short opacity-and-offset move, held in reserve for untransformed body copy.
- **Rule:** a one-pixel line drawing from its leading edge.

`press`, `mark`, and `plate` animate `clip-path` alone, because most annotations and collage scraps carry a static CSS `transform: rotate(...)` that a transform-based reveal would silently drop. For the same reason scroll drift is applied through the separate `translate` property, which composes with `transform` rather than replacing it.

### Behaviors

- **Hero:** the proposition is stamped on line by line, then the description, actions, and margin note follow. The collage plane settles, the schematic rules draw themselves, and scroll drift moves the collage layers 4–12px.
- **Engine execution signal:** the four workflow stages activate in order. The active stage takes a red border and its nodes tick red in sequence; the connector leaving a completed stage fills with red. The signal rests, then repeats. It stops entirely off screen.
- **Dossier field:** the note is marked, the fragments are filed one at a time, then the reply lands on top.
- **Architecture stack:** layers are laid down in sequence; the open layer carries the signal, and the native `<details>` panel is height-animated where the browser supports it.
- **Evidence logs:** logs are dealt out in order; a log's concept flow lights up on inspection. That is colour only — every step reads without hovering.

### Named Rules

**The Meaningful Motion Rule.** Motion must communicate reveal, execution, routing, transformation, hierarchy, or system state. A generic fade-up is not a reason.

**The Rest Rule.** Every sequence ends. Reveals play once, and the only repeating motion is the engine's execution signal and the closing status caret — both of which report live system state.

**The Removable Motion Rule.** No content, control, or meaning may depend on animation. Reduced-motion preference cancels every reveal and loop from first paint, and the page renders complete without JavaScript.

## Shapes

PaperCodes uses square corners throughout. Buttons, system stages, capability rows, evidence logs, demo panels, process cells, and section boundaries are rectangular and joined by one-pixel rules. Small geometric marks—the play triangle, arrows, plus signs, process chevrons, and system-status dot—carry direction or state.

Static rotations are reserved for the chaos field's annotations and layered scraps. Technical surfaces use a faint square grid; the hero engine adds a red corner bracket. These recurring marks create the torn-dossier attitude with CSS geometry while actual irregular paper edges and photographic collage remain deferred.

**The Hard-Edge Rule.** Default to zero-radius geometry. A rounded control is a semantic exception that must earn its form, not a general softening device.

## Components

### Header & Navigation

- **Structure:** Sticky paper masthead with a one-pixel lower rule, constrained to the shared 104rem width.
- **Wordmark:** Uppercase tracked serif name over a very small mono strapline.
- **Desktop Navigation:** Centered uppercase mono links with a directional one-pixel underline on hover.
- **Mobile Navigation:** Compact Menu summary opening a full-viewport ink panel; links switch to large sentence-case display type.
- **Focus:** Global two-pixel signal-red outline with a four-pixel offset.

### Project Links & Text Arrows

- **Shape:** Sharp rectangle with a one-pixel border and minimum 2.8rem touch height.
- **Solid / Outline:** Ink fill and paper text invert to an open paper treatment; the outlined masthead action performs the opposite inversion.
- **Light:** Bright-paper action on the dark closing field, inverting to transparent with a bright border.
- **Text:** Compact uppercase mono with an arrow or triangular cue; active state presses down by one pixel.

### Hero Workflow

- **Structure:** Four numbered stages—Input, Enrich, Automate, Intelligence—connected left to right inside a gridded engine.
- **Stage:** Square dark cell, engine-gray outline, ruled heading, red index, and pale mono task list.
- **Responsive Behavior:** Four columns become two at 56rem and one at 35rem. Connectors disappear wherever a reading row breaks.

### Tool Band

- **Structure:** Ruled paper strip with a mono introduction, centered system-sans names, and a compact outcomes note.
- **Marks:** Use the shipped Simple Icons for Stripe, Notion, Make, n8n, Supabase, and Vercel. OpenAI intentionally remains a text-only fallback until an icon is mapped.
- **Responsive Behavior:** Seven columns become four and then two; the outcome note moves below the roster.

### Chaos-to-System Dossier

- **Field:** Layered graphite rectangles, rotated serif annotation, ruled fragment list, and offset bright-paper note create a static dossier composition.
- **Statement:** Uppercase mono transformation statement with signal-red conclusion.
- **Pipeline:** Seven bordered operational rows in a dark gridded panel, ending in a plain system outcome.

### Architecture Stack & Capability Index

- **Architecture:** Four dark bordered layers with red numbers, uppercase names, compact handoff detail, and a red plus mark.
- **Capabilities:** Five bright-paper rows pairing red indices, serif titles, and muted mono service lists.
- **Behavior:** These are structured indexes, not generic cards; their shared rules and numbered rhythm are essential.

### Illustrative Project Logs

- **Structure:** Three ruled records with experiment ID, CONCEPT badge, uppercase title, engine description, dark experience plate, paired metrics, and an explicit illustrative disclaimer.
- **Data:** Content comes from typed project records. Status remains CONCEPT and metrics remain illustrative until verified client evidence exists.
- **Responsive Behavior:** Three equal columns stack into independent full-width logs below 56rem.

### Experience / Engine Demonstration

- **Surface:** Bright-paper inquiry state with a serif prompt, quiet explanation, and bordered submitted status.
- **Engine:** Dark gridded sequence of seven operational steps with red indices and a red ready state.
- **Rule:** Always show the customer action beside or immediately before the machinery it triggers.

### Ethos, Process & Closing

- **Ethos:** Dark/paper/dark triptych balancing a rotated human note, large serif belief statement, and future-facing conclusion.
- **Process:** Four ruled Observe / Design / Engineer / Evolve cells with red indices and directional chevrons, ending in a return cue.
- **Closing:** Full dark gridded field with small red readiness status, oversized serif challenge, compact mono invitation, and light project action.

### Route Shell & Footer

- **Route Shell:** Reusable full-height 12-column introduction retained for Work, Services, Approach, About, Start Project, and project detail routes.
- **Footer:** Bright-paper band balancing serif mark, tiny mono operating loop, and legal copy; the loop hides on small screens.

## Do's and Don'ts

### Do:

- **Do** preserve the high-variance 9/3/5 dossier rhythm while aligning every section to the shared width, gutters, rules, and semantic reading order.
- **Do** use the expanded serif ramp as an intentional optical system for different column spans and headline silhouettes.
- **Do** use tonal neutrals to separate paper layers and engine hierarchy, giving every added shade a specific legibility role.
- **Do** keep signal red sparse and meaningful: automation, state, focus, evidence status, connector, or decisive proposition.
- **Do** use actual Simple Icons where shipped and a clean text fallback where no icon is mapped.
- **Do** keep project evidence typed, explicitly illustrative, and visibly labeled CONCEPT until verified data replaces it.
- **Do** preserve visible keyboard focus, semantic order, and the reduced-motion override in every extension.

### Don't:

- **Don't** normalize the page into repeating equal cards, one headline size, or one flat gray; the controlled variance is the identity.
- **Don't** soften the system with rounded containers, diffuse shadows, glossy gradients, or generic SaaS styling.
- **Don't** turn signal red into a broad decorative wash or introduce a competing accent family.
- **Don't** substitute a logo font, emoji, or improvised glyph where a shipped Simple Icon exists.
- **Don't** present illustrative concept metrics as verified client results.
- **Don't** describe generated photography, photographic collage, irregular raster tears, or torn-paper assets as shipped in Stage 2.
- **Don't** add motion that merely decorates. Every animation must show reveal, execution, routing, transformation, or system state.
- **Don't** describe animated tears or the experience-versus-engine drag reveal as implemented; those remain deferred.
