PROJECT: PAPERCODES
TYPE: High-end digital systems agency website
GOAL: Build a production-quality, responsive, highly art-directed agency website that feels editorial, technical, tactile, experimental, and engineered.

This is NOT a generic SaaS website.

Do not introduce:
- generic blue/purple gradients
- glassmorphism
- excessive rounded cards
- floating 3D blobs
- generic AI robot imagery
- glowing cyberpunk effects
- random neon
- startup-template sections
- unnecessary pill-shaped UI everywhere
- stock illustrations
- generic “AI-powered solutions” language

The website should feel like an independent design studio, engineering lab, editorial publication, technical manual, and physical collage have been fused into one coherent visual system.

==================================================
1. BRAND
==================================================

NAME:
PaperCodes

CORE IDEA:
PaperCodes turns messy business processes into working software.

The agency works across:

1. EXPERIENCE
- websites
- landing pages
- web applications
- portals
- brand-led interfaces

2. DATA
- CRM architecture
- lead/customer systems
- normalized business data
- customer lifecycle infrastructure
- dashboards
- databases

3. AUTOMATION
- n8n
- Make
- APIs
- webhooks
- integrations
- workflow orchestration
- internal operations

4. INTELLIGENCE
- AI agents
- lead scoring
- decision systems
- intelligent routing
- model-powered workflows
- custom tools

PaperCodes should never feel like an “n8n agency.”

The brand is broader:
it designs and engineers the digital systems behind growing businesses.

The company may eventually build its own software products, so the identity needs to work equally well for:
- an agency
- a technology consultancy
- a product studio
- a software company

==================================================
2. ETHOS
==================================================

The conceptual inspiration is reinvention, hybridity, controlled disruption, experimentation, collision of disciplines, and refusal to repeat the same solution forever.

The brand should communicate:

- fuse disciplines
- challenge defaults
- experiment
- adapt
- reinvent
- build differently
- stay curious
- evolve continuously

Every project does not need to look identical.

The brand should instead have a recognizable philosophy underneath changing visual forms.

Core thought:

SAME SPIRIT.
DIFFERENT FORM.

Do not directly reference, imitate, reproduce, or visually copy Linkin Park:
- no logos
- no album artwork
- no band photography
- no lyrics
- no exact typography from their artwork
- no recognizable LP iconography

The emotional DNA can be:
hybrid,
raw,
precise,
restless,
industrial,
human,
technical,
experimental.

But the final identity must be distinctly PaperCodes.

==================================================
3. PRIMARY POSITIONING
==================================================

Main positioning:

PAPERCODES
Digital systems for businesses that refuse to stay the same.

Primary proposition:

DESIGN WHAT THEY SEE.
AUTOMATE WHAT THEY DON'T.

Supporting idea:

Behind every customer experience is a system.

Supporting copy:

Websites.
Workflows.
Agents.
Customer systems.
Custom tools.

Connected infrastructure for businesses that have outgrown manual work.

Alternative positioning line:

We turn disconnected tools into one intelligent system.

Core statement:

PaperCodes turns messy processes into working software.

==================================================
4. VISUAL PHILOSOPHY
==================================================

The core visual metaphor is:

SURFACE VS ENGINE.

The “surface” represents:
- experience
- design
- customer interaction
- typography
- brand
- clarity

The “engine” represents:
- data
- automation
- workflows
- systems
- intelligence
- orchestration

The website should frequently show beautiful, clean editorial surfaces being torn, peeled, cut, shifted, or revealed to expose structured technical systems underneath.

Paper should not be decorative.

Whenever paper tears, folds, peels, breaks, or reveals something, it should communicate:

“there is machinery underneath the experience.”

==================================================
5. VISUAL SYSTEM
==================================================

COLOR SYSTEM:

Background / paper:
#F4F1EA or similarly warm off-white

Primary black:
#0B0B0B

Secondary black:
#151515

Signal red:
approximately #D52B2B

Muted gray:
#767676

Light rule:
#C7C3BB

Do not introduce many additional colors.

Visual rule:

WHITE = SURFACE
BLACK = ENGINE
RED = ACTION

Red should represent:
- active state
- execution
- routing
- intervention
- selected state
- connection
- emphasis
- hand-drawn annotation

Avoid making red decorative everywhere.

==================================================
6. TYPOGRAPHY
==================================================

Use two conceptual type families.

A. EDITORIAL SERIF

Use for:
- hero statements
- major section titles
- philosophical statements
- emotional copy

Desired character:
- editorial
- elegant
- high contrast
- contemporary
- slightly dramatic
- premium

Examples of acceptable font direction:
- Instrument Serif
- Cormorant Garamond
- DM Serif Display
- Libre Caslon Display
- another high-quality open-source editorial serif

Prefer Instrument Serif if appropriate.

B. MONOSPACE / TECHNICAL TYPE

Use for:
- navigation
- metadata
- workflow labels
- system diagrams
- project IDs
- timestamps
- section labels
- technical captions
- code fragments

Examples:
- IBM Plex Mono
- Geist Mono
- JetBrains Mono
- Space Mono

Do not use monospace for every paragraph.

The contrast between serif and mono is essential.

==================================================
7. GRID AND COMPOSITION
==================================================

The site should feel deliberately composed.

Use:
- strong grid
- thin rules
- technical alignment
- asymmetrical compositions
- oversized typography
- editorial white space
- precise gutters
- collage elements that deliberately break the grid

Desktop layout:
12-column conceptual grid.

Maximum content width:
roughly 1500px to 1680px depending on viewport.

Do not constrain the site to a generic 1200px SaaS container.

Allow some sections to span nearly the full viewport.

Use large typography responsively using clamp().

==================================================
8. TECHNOLOGY
==================================================

Build with:

- Next.js current stable version
- App Router
- TypeScript
- semantic HTML
- CSS Modules and CSS custom properties OR carefully structured Tailwind if necessary
- GSAP + ScrollTrigger for deliberate motion
- SVG for system/workflow diagrams
- next/image for raster imagery

Prefer custom CSS over importing a component library.

Do NOT use:
- Material UI
- Bootstrap
- generic component kits
- shadcn-style visual defaults unless stripped completely

The website must feel custom.

Optional:
Lenis for smooth scrolling only if it does not hurt accessibility or performance.

==================================================
9. SITE STRUCTURE
==================================================

Create:

/
Home

/work
Project logs / evidence

/work/[slug]
Individual project case study

/services
Capabilities

/approach
How PaperCodes thinks and builds

/about
Company / philosophy

/start-project
Project intake form

Also create:
- reusable navigation
- footer
- case study components
- workflow visualization components
- responsive mobile navigation

==================================================
10. HOMEPAGE
==================================================

Build the homepage with the following narrative.

--------------------------------------------------
SECTION 01 — HERO
--------------------------------------------------

Desktop:
roughly 90–100vh minimum.

Header:

left:
PAPERCODES

tiny supporting line:
SYSTEMS FOR WHAT'S NEXT.

navigation:
WORK
SERVICES
APPROACH
ABOUT

CTA:
START A PROJECT →

Hero left:

Large serif headline:

Design
what they
see.

Then red serif:

Automate
what they
don't.

Supporting copy:

Websites. Workflows. Agents.
Customer systems. Connected infrastructure.

For businesses that refuse to stay the same.

CTA:
START A PROJECT →

Secondary CTA:
WATCH OUR APPROACH

Hero right:
a large torn-paper reveal.

The paper surface should visually rip open and reveal a dark system grid underneath.

Inside the black system area:
an animated workflow.

Example:

INPUT
Form
Message
Call
API
Manual Task

→

ENRICH
Clean
Validate
Contextualize

→

AUTOMATE
Route
Trigger
Update
Notify

→

INTELLIGENCE
Score
Assign
Respond
Learn

Workflow lines should animate very subtly.

Nodes activate using signal red.

Include technical annotation:

// BEHIND EVERY EXPERIENCE
// IS A SYSTEM

Include:

LESS MANUAL WORK.
MORE MEANINGFUL WORK.

Torn area must feel tactile, irregular, layered and physical.

Do not create the tear purely as a smooth CSS blob.

Use generated transparent PNG torn-paper assets as masks/overlays.

Hero should feel striking immediately.

--------------------------------------------------
SECTION 02 — TRUST / TOOL ECOSYSTEM
--------------------------------------------------

Minimal horizontal band.

Label:

BUILT ACROSS THE TOOLS YOUR BUSINESS ALREADY USES.

Show names/icons carefully:
n8n
Make
OpenAI
Supabase
Vercel
Stripe
Notion

Do not imply formal partnerships.

Use language such as:

BUILT WITH / CONNECTED TO

not:

TRUSTED PARTNERS

unless accurate.

Small side note:

TOOLS ARE MEANS.
OUTCOMES ARE THE POINT.

--------------------------------------------------
SECTION 03 — CHAOS → SYSTEM
--------------------------------------------------

Headline:

Chaos lives everywhere.

or:

CHAOS IN.
CONTROL OUT.

Left side:
physical collage of:
- paper forms
- spreadsheets
- CRM records
- Slack messages
- lead notes
- email threads
- sticky notes
- intake forms

Handwritten notes:

IT DOESN'T HAVE TO BE THIS WAY.

and:

CHAOS LIVES EVERYWHERE.

Center copy:

WE TURN
DISCONNECTED
TOOLS INTO A
SINGLE,
INTELLIGENT
SYSTEM.

Right:
black structural pipeline interface.

Pipeline:

INTAKE
↓
NORMALIZE
↓
VALIDATE
↓
ENRICH
↓
DECIDE
↓
AUTOMATE
↓
DELIVER

Use animated red indicator moving through the system when section enters viewport.

Supporting line:

Same people.
Less friction.
A more capable business.

--------------------------------------------------
SECTION 04 — FOUR-LAYER ARCHITECTURE
--------------------------------------------------

Section label:

THE PAPERCODES STACK

Headline:

Beneath every experience
is engineered intent.

Create an interactive four-layer exploded architecture diagram.

Layers:

01 EXPERIENCE
Websites / Interfaces / Portals

02 DATA
CRM / Entities / Relationships / Context

03 AUTOMATION
Workflows / Integrations / Logic

04 INTELLIGENCE
Agents / Models / Decisions

Desktop behavior:
Layers appear as exploded isometric/3D-like SVG/CSS planes.

Hover/clicking a layer:
- highlights it in red
- dims others slightly
- updates explanatory copy
- subtly shifts its position

Do NOT require WebGL.

Use HTML/CSS/SVG.

Mobile:
convert to stacked accordion cards.

Supporting thought:

FOUR LAYERS.
ONE SYSTEM.

--------------------------------------------------
SECTION 05 — CAPABILITIES
--------------------------------------------------

Avoid generic “services cards.”

Use an editorial table / indexed list.

01
EXPERIENCE DESIGN

Websites
Landing pages
Product interfaces
Portals
Conversion systems

02
CUSTOMER SYSTEMS

CRM architecture
Lead management
Lifecycle design
Customer data
Dashboards

03
AUTOMATION

n8n
Make
APIs
Webhooks
Orchestration
Operations

04
INTELLIGENCE

Agents
Lead scoring
AI workflows
Knowledge systems
Decision engines

05
CUSTOM SOFTWARE

Internal tools
Client portals
Operations software
Product development

On hover:
display small contextual diagrams or examples.

--------------------------------------------------
SECTION 06 — WORK / EVIDENCE
--------------------------------------------------

Never call this section “Portfolio.”

Section intro:

NOT CASE STUDIES.
EVIDENCE.

Supporting copy:

Real problems.
Real systems.
Real results.

Each project should be styled like an experiment or execution log.

Example cards:

EXP_001
E-COMMERCE CONVERSION ENGINE
STATUS: LIVE

EXPERIENCE
Shopify storefront redesign

ENGINE
Shopify → webhook → enrichment → CRM → email

RESULT
+43% conversion
-62% manual work

EXP_002
B2B LEAD ROUTING SYSTEM

RESULT
2.4x faster response
91% accurately routed

EXP_003
CLIENT ONBOARDING OS

RESULT
-71% onboarding time
3.2x team capacity

Numbers are placeholder/demo content.
Clearly store them as editable content, not hard-coded claims of actual client results.

Cards should combine:
- project screenshot
- mini workflow diagram
- metric
- project status
- system metadata

Hover interaction:
technical information appears/reconfigures.

CTA:

VIEW ALL LOGS →

--------------------------------------------------
SECTION 07 — EXPERIENCE VS ENGINE
--------------------------------------------------

Create a signature interactive section.

Headline:

WHAT THEY SEE.
WHAT MAKES IT WORK.

Show a polished website/interface.

Allow the visitor to drag a horizontal or vertical reveal handle.

Surface side:
beautiful interface.

Engine side:
workflow/data/automation diagram.

Example:

FORM SUBMITTED
→ VALIDATE
→ ENRICH
→ SCORE
→ ROUTE
→ CRM
→ AGENT
→ FOLLOW-UP

Label each side:

THE EXPERIENCE

THE ENGINE

This interaction is strategically important.

Implement accessibly.

On mobile:
use tap toggle rather than difficult drag interaction.

--------------------------------------------------
SECTION 08 — ETHOS
--------------------------------------------------

Large editorial composition.

Headline:

Built to evolve.

Supporting copy:

We don't believe in one-size-fits-all systems.

Every business is different.
So is every build.

We question defaults,
adapt quickly,
combine disciplines,
and keep rebuilding what can be better.

Today, a website.
Tomorrow, an agent.
Next, something that doesn't have a category yet.

We keep building.

Visual treatment:
editorial white center panel bordered by raw monochrome photography/collage.

Handwritten annotation:

SAME SPIRIT.
DIFFERENT FORM.

Side list:

CHALLENGE
REINVENT
FUSE
ITERATE
STAY CURIOUS
KEEP GOING

Do not make this section corporate.

--------------------------------------------------
SECTION 09 — PROCESS
--------------------------------------------------

Headline:

HOW WE BUILD.

Four stages:

01 OBSERVE
Understand the actual system before touching the tools.

02 DESIGN
Define experience, data and desired behavior.

03 ENGINEER
Build, connect and automate the system.

04 EVOLVE
Measure, refine and keep improving.

Visualize as a system loop, not four generic cards.

OBSERVE
→ DESIGN
→ ENGINEER
→ EVOLVE
↺

--------------------------------------------------
SECTION 10 — CTA
--------------------------------------------------

Large closing statement:

YOUR TEAM SHOULD NOT
BE DOING THE WORK
OF A SCRIPT.

Secondary:

LET'S BUILD THE MACHINE.

CTA:

INITIALIZE PROJECT →

Include subtle animated system status text:

SYSTEM READY
WAITING FOR INPUT_

--------------------------------------------------
SECTION 11 — FOOTER
--------------------------------------------------

PAPERCODES

DESIGN / AUTOMATE / BUILD / REPEAT

Links:
WORK
SERVICES
APPROACH
ABOUT
START PROJECT

Small statement:

SYSTEMS FOR WHAT'S NEXT.

==================================================
11. NAVIGATION
==================================================

Header should feel like an editorial masthead / technical control bar.

Desktop:
logo left
links right
thin bottom rule

Sticky on scroll.

When the user enters dark sections:
either invert intelligently or use controlled background.

Do not create a giant blurred navbar.

Mobile:
minimal menu button.

Menu should feel intentional:
full-screen editorial panel,
not generic dropdown.

==================================================
12. MOTION
==================================================

Motion philosophy:

Motion must communicate:
- reveal
- execution
- routing
- transformation
- hierarchy
- system state

Avoid motion merely because it looks cool.

Desired interactions:

1.
Torn-paper hero reveals engine progressively.

2.
Workflow nodes animate sequentially.

3.
Red status pulse travels through connectors.

4.
Architecture layers separate gently while scrolling.

5.
Case study diagrams animate on hover.

6.
Experience/engine section has interactive reveal.

7.
Handwritten annotations enter as if quickly marked.

8.
Rules/gridlines subtly draw into place.

9.
Some images shift 4–12px with restrained parallax.

10.
CTA status cursor blinks.

Animations should feel:
precise,
mechanical,
slightly raw.

Not:
bouncy,
cute,
overly smooth,
gaming-like.

Use GSAP ScrollTrigger sparingly.

Respect:

prefers-reduced-motion.

==================================================
13. TORN PAPER SYSTEM
==================================================

Create a reusable TornReveal component.

Requirements:
- generated transparent torn paper PNG/SVG mask
- accepts light surface content
- accepts dark underlying content
- supports configurable tear direction
- optional scroll reveal
- optional hover displacement
- responsive

Variations:
- horizontal tear
- vertical tear
- corner peel
- diagonal rip
- irregular hole

Do not use the exact same tear asset repeatedly.

Create at least 4 variants.

==================================================
14. HAND-DRAWN ANNOTATION SYSTEM
==================================================

Create reusable SVG/CSS annotation components:

- underline
- circle
- arrow
- cross
- scribble
- strike-through
- corner mark

Use signal red.

They should look analog and imperfect.

Do not use them everywhere.

==================================================
15. WORKFLOW DIAGRAM COMPONENT
==================================================

Build custom reusable workflow diagram components.

Need:

WorkflowNode
WorkflowConnector
WorkflowStage
WorkflowStatus
ExecutionPulse

Visual language:
black rectangular technical panels
1px gray/white borders
red active states
small mono labels
square-ish corners

Avoid rounded SaaS cards.

Nodes must support:
idle
active
success
error

Animate sequence programmatically.

==================================================
16. PROJECT LOG SYSTEM
==================================================

Create project data as structured objects.

Example schema:

{
 id: "EXP_001",
 slug: "...",
 title: "...",
 category: "...",
 status: "LIVE",
 challenge: "...",
 outcome: "...",
 metrics: [],
 experience: [],
 engine: [],
 stack: [],
 images: []
}

Do not bury content in component markup.

Make future CMS migration easy.

==================================================
17. START PROJECT PAGE
==================================================

Build a serious project intake flow.

Fields:

Name
Email
Company
Website

What are you trying to improve?

Choose relevant areas:

Website / Experience
CRM / Leads
Automation
AI Agents
Internal Tools
Custom Software
Not sure yet

What currently feels broken?

What tools are already involved?

Approximate project scope/budget range.

Preferred timeline.

Additional context.

CTA:

INITIALIZE PROJECT

After submission:
show technical confirmation:

INPUT RECEIVED
PROJECT SIGNAL CREATED
WE'LL RESPOND SHORTLY.

Form should have:
- client-side validation
- accessible errors
- honeypot field
- placeholder API endpoint architecture
- no fake backend

==================================================
18. RESPONSIVENESS
==================================================

Desktop should feel expansive and editorial.

Tablet:
preserve strong layout.

Mobile:
do not merely shrink desktop.

Recompose sections.

Requirements:

Hero:
stack headline before torn-engine panel.

Architecture:
accordion or simplified stacked layers.

Case studies:
single column horizontal-swipe optional.

Experience/engine:
toggle instead of drag if needed.

Typography:
responsive using clamp().

Torn-paper assets:
must not obscure important copy.

Ensure no horizontal overflow.

==================================================
19. ACCESSIBILITY
==================================================

Required:

- semantic sections
- appropriate headings
- keyboard navigation
- visible focus state
- accessible forms
- sufficient contrast
- meaningful image alt text
- decorative textures have empty alt
- reduced motion support
- reveal interactions operable without mouse
- no content dependent solely on animation

==================================================
20. PERFORMANCE
==================================================

Target:
Lighthouse performance 90+ where reasonable.

Use:
- next/image
- AVIF/WebP where appropriate
- lazy loading below fold
- optimized SVG
- limited JS
- dynamic import heavy animation modules if useful
- no huge autoplay videos
- preloaded hero-critical asset only

Generated torn paper assets should be optimized.

==================================================
21. SEO
==================================================

Homepage title:

PaperCodes — Digital Systems, Automation & Intelligent Software

Description:

PaperCodes designs websites, customer systems, automations, AI agents and custom software for businesses that have outgrown manual work.

Add:
OpenGraph metadata
Twitter/social card metadata
favicon
structured semantic page titles

==================================================
22. CONTENT VOICE
==================================================

Voice:

precise
short
confident
technical
creative
slightly rebellious
not arrogant
not corporate
not AI-hype-heavy

Good examples:

CHAOS IN.
CONTROL OUT.

BEHIND EVERY EXPERIENCE
IS A SYSTEM.

NOT CASE STUDIES.
EVIDENCE.

TOOLS ARE MEANS.
OUTCOMES ARE THE POINT.

DESIGN WHAT THEY SEE.
AUTOMATE WHAT THEY DON'T.

SAME SPIRIT.
DIFFERENT FORM.

BUILT TO EVOLVE.

Avoid:

“Unlock your business potential.”

“Empowering businesses through innovative AI solutions.”

“We leverage cutting-edge technologies.”

“Transform your digital journey.”

“Revolutionize your workflow.”

==================================================
23. MICROCOPY
==================================================

Use small technical labels throughout:

SYSTEM ONLINE

INPUT RECEIVED

PROCESSING

STATUS: LIVE

ENGINE READY

EXECUTION COMPLETE

0 ERRORS

WAITING FOR INPUT_

STRUCTURAL GRID v1.0

WORKFLOW ACTIVE

EXPERIMENT LOG

RUNNING

ITERATING

ARCHIVED

Use sparingly.

==================================================
24. IMAGE TREATMENT
==================================================

Photography should be:
- monochrome
- documentary
- architectural
- tactile
- grainy
- high contrast

Avoid:
- corporate office stock
- smiling teams
- laptop-at-cafe stock imagery
- generic futuristic AI visuals

Some imagery may be screenprinted, photocopied or distressed.

Use generated image assets supplied separately.

==================================================
25. FILE STRUCTURE
==================================================

Keep architecture clean.

Suggested:

app/
  page.tsx
  work/
  services/
  approach/
  about/
  start-project/

components/
  layout/
  hero/
  torn-reveal/
  workflow/
  architecture/
  project-log/
  annotations/
  ui/

data/
  projects.ts
  services.ts

styles/
  globals.css
  tokens.css

public/
  assets/
    paper/
    collage/
    photography/
    textures/
    projects/

==================================================
26. DEVELOPMENT PROCESS
==================================================

Do not attempt everything in one uncontrolled pass.

Implement in phases.

PHASE 1
Foundation:
- routes
- design tokens
- typography
- global grid
- header/footer

PHASE 2
Static homepage:
Build every section accurately with no fancy animation.

PHASE 3
Assets:
Integrate supplied imagery and paper assets.

PHASE 4
System graphics:
Build workflow diagrams and architecture components.

PHASE 5
Motion:
Add GSAP/interaction progressively.

PHASE 6
Responsive:
Completely refine tablet/mobile.

PHASE 7
Accessibility/performance.

PHASE 8
Final visual QA.

At the end of every phase:
run the project,
inspect for errors,
fix TypeScript/lint errors,
verify responsive behavior.

==================================================
27. QUALITY BAR
==================================================

The finished site should feel like a custom Awwwards-caliber digital studio website, but usability should remain excellent.

Prioritize:
art direction
clarity
composition
typography
interaction
performance

over:
feature count
effects
UI libraries

Every section should have a reason to exist.

If something feels generic:
remove it or redesign it.

If a component looks like it could have come from a SaaS template:
redesign it.

The website should be unmistakably PaperCodes.