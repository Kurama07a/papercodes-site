export type ProjectLog = {
  id: string;
  slug: string;
  title: string;
  status: "LIVE" | "SHIPPED";
  category: string;
  experience: string;
  engine: string;
  problem: string;
  summary: string;
  outcome: string;
  evidence: string;
  externalUrl: string;
  image: string;
};

export const projectLogs: ProjectLog[] = [
  {
    id: "WRK_001",
    slug: "ctrlp-printing-network",
    title: "CtrlP campus printing network",
    status: "SHIPPED",
    category: "Distributed platform + operations",
    experience: "Student ordering, payment, and shop operations",
    engine: "Web app → Node.js APIs → Redis/WebSockets → Electron shop client → printer",
    problem: "Campus printing meant queues, manual file handling, repeated preference checks, and no reliable path from payment to a nearby printer.",
    summary: "Paid print jobs route from student upload to nearby shop software and the physical printer.",
    outcome: "A low-infrastructure network that normalizes uploads, discovers nearby shops, routes paid jobs in real time, and starts printing through shop-side software. The project reports reducing a 15–30 minute flow to roughly 3–5 minutes.",
    evidence: "Built core backend and realtime job-processing systems, connected the customer ordering flow, implemented shop onboarding and payment operations, and developed shop-side software that coordinated queues, printer state, and job status.",
    externalUrl: "https://zerofrictionprinting-btcky4c.gamma.site/",
    image: "/images/work-ctrlp.png",
  },
  {
    id: "WRK_002",
    slug: "jobhunt-india",
    title: "JobHunt India",
    status: "LIVE",
    category: "Data ingestion + automation + web",
    experience: "Searchable feed for early-career software roles in India",
    engine: "Public ATS boards → n8n orchestration → FastAPI classification → PostgreSQL → web feed",
    problem: "Entry-level roles are scattered across company boards and buried among senior openings, forcing candidates to search the same sources repeatedly.",
    summary: "A live India-first job feed that ingests, classifies, updates, and filters roles from public ATS boards.",
    outcome: "A live feed that gathers roles directly from company career pages, classifies India and experience relevance, manages job lifecycle safely, and provides fast filters for location, freshness, skills, source, and seniority.",
    evidence: "Live public product with FastAPI/PostgreSQL ingestion, deterministic classification, bounded concurrency, lifecycle-safe updates, n8n orchestration, automated tests, Docker deployment, CI/CD, and operational documentation.",
    externalUrl: "https://jobhunt.prakhar.wtf",
    image: "/images/work-jobhunt.png",
  },
];
