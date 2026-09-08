export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectLog = {
  id: string;
  slug: string;
  title: string;
  status: "CONCEPT";
  category: string;
  experience: string;
  engine: string;
  metrics: ProjectMetric[];
  imagePrompt: string;
  isIllustrative: true;
};

export const projectLogs: ProjectLog[] = [
  {
    id: "EXP_001",
    slug: "ecommerce-conversion-engine",
    title: "E-commerce conversion engine",
    status: "CONCEPT",
    category: "Experience + automation",
    experience: "Shopify storefront redesign",
    engine: "Shopify to enrichment to CRM to email",
    metrics: [
      { value: "+43%", label: "Conversion" },
      { value: "-62%", label: "Manual work" },
    ],
    imagePrompt: "project-ecommerce",
    isIllustrative: true,
  },
  {
    id: "EXP_002",
    slug: "b2b-lead-routing",
    title: "B2B lead routing system",
    status: "CONCEPT",
    category: "Data + automation",
    experience: "High-intent lead capture",
    engine: "Webflow to Make to Slack",
    metrics: [
      { value: "2.4x", label: "Faster response" },
      { value: "91%", label: "Routed accurately" },
    ],
    imagePrompt: "projectb2b",
    isIllustrative: true,
  },
  {
    id: "EXP_003",
    slug: "agency-operations-os",
    title: "Agency operations OS",
    status: "CONCEPT",
    category: "Software + intelligence",
    experience: "One operations interface",
    engine: "Custom app to n8n to OpenAI",
    metrics: [
      { value: "-71%", label: "Onboarding time" },
      { value: "+3.2x", label: "Team capacity" },
    ],
    imagePrompt: "project-operations",
    isIllustrative: true,
  },
];
