export type Capability = {
  index: string;
  title: string;
  items: string[];
};

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Experience design",
    items: ["Websites", "Landing pages", "Product interfaces", "Portals", "Conversion systems"],
  },
  {
    index: "02",
    title: "Customer systems",
    items: ["CRM architecture", "Lead management", "Lifecycle design", "Customer data", "Dashboards"],
  },
  {
    index: "03",
    title: "Automation",
    items: ["n8n", "Make", "APIs", "Webhooks", "Orchestration", "Operations"],
  },
  {
    index: "04",
    title: "Intelligence",
    items: ["Agents", "Lead scoring", "AI workflows", "Knowledge systems", "Decision engines"],
  },
  {
    index: "05",
    title: "Custom software",
    items: ["Internal tools", "Client portals", "Operations software", "Product development"],
  },
];
