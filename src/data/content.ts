export const site = {
  name: "Vijay Modi",
  role: "Forward Deployed AI Engineer",
  tagline: "I build production AI systems you can hire — not demos.",
  email: "vijaymodi2002@gmail.com",
  phone: "+91 9033701984",
  whatsapp: "919033701984",
  github: "https://github.com/VijayM0di",
  location: "Ahmedabad, India · Remote worldwide",
  education: "B.Tech CSE, Nirma University (2020–2024)",
};

export const services = [
  {
    title: "AI Command Centers",
    blurb:
      "Dashboard + workbench + AI policies. FastAPI, Next.js, Postgres, Docker. Human-in-the-loop ops for real business processes.",
  },
  {
    title: "Document AI / AP & Vendor Flows",
    blurb:
      "Invoice–PO–GRN matching, vendor onboarding (PAN/GST/Udyam), SAP-linked portals, exception queues, audit-ready exports.",
  },
  {
    title: "RAG, Agents & Voice",
    blurb:
      "Domain RAG, LangGraph/CrewAI agents, low-latency voice (Dialora-class), GenBI chat-to-SQL — grounded in your data.",
  },
  {
    title: "Computer Vision at the Edge",
    blurb:
      "YOLO + tracking for safety/ops. FPS optimization, live alerts, industrial deployment experience.",
  },
];

export type Project = {
  id: string;
  name: string;
  domain: string;
  problem: string;
  architecture: string;
  result: string;
  tags: string[];
  featured?: boolean;
};

/** Portfolio from New folder summaries — stubs/theme-only repos excluded from featured grid */
export const projects: Project[] = [
  {
    id: "ap-cc",
    name: "AP Command Center",
    domain: "Accounts Payable · Supervity",
    problem: "Manual AP slow and error-prone across invoice / PO / GRN matching.",
    architecture: "FastAPI + Next.js; Gemini IDP; 2/3-way match; RBAC, SLAs, copilot, Docker.",
    result: "Full AP command center — extract, match, exceptions workbench, dashboards, CSV/XLSX export.",
    tags: ["Document AI", "FastAPI", "Next.js", "Gemini"],
    featured: true,
  },
  {
    id: "vikrix-api",
    name: "Vikrix External API",
    domain: "Vendor Portal Backend · SAP",
    problem: "Vendors need invoices/SAP/OTP/chat without internal AP CC access.",
    architecture: "FastAPI; Gemini PDF extract; SAP PO/GRN/vendor; MS Graph OTP; vendor chat/AI.",
    result: "Secure external API — extract, classify, SAP sync, auth, AI assistance.",
    tags: ["SAP", "FastAPI", "OTP", "Gemini"],
    featured: true,
  },
  {
    id: "vikrix-ui",
    name: "Vikrix for Vendors",
    domain: "Vendor Portal UI",
    problem: "Onboarded vendors need self-serve invoice / GRN / status UX.",
    architecture: "Next.js 16 + React 19; login, dashboard, invoices, GRN select; Docker.",
    result: "Vendor-facing invoice lifecycle UI paired with Vikrix External API.",
    tags: ["Next.js", "UX", "Docker"],
    featured: true,
  },
  {
    id: "vendor-onboarding",
    name: "Vendor Onboarding",
    domain: "Adani / Vikrix · Document AI",
    problem: "New vendors without SAP code need guided registration + review.",
    architecture: "Next.js + FastAPI onboarding-api; Gemini extract; MinIO; OTP; admin approve.",
    result: "Phase-1 E2E onboarding (PAN/GST/Udyam) ready for UAT and SAP handoff.",
    tags: ["Onboarding", "Gemini", "MinIO"],
    featured: true,
  },
  {
    id: "recon",
    name: "Business Reconciliation",
    domain: "Adani / Penna · SAP Finance",
    problem: "Finance must reconcile Adani invoices, GRNs, Penna invoices by hand.",
    architecture: "CC stack + sap-upload/data/reconciliation; multi-path join; discrepancy flags.",
    result: "Automated reconcile + operator workbench (reconciled / discrepancy / phase2).",
    tags: ["SAP", "Finance", "Keycloak"],
    featured: true,
  },
  {
    id: "cc-platform",
    name: "CC + AutoPilot Templates",
    domain: "AI Platform Scaffold",
    problem: "New AI Command Center use-cases need a reusable production base.",
    architecture: "FastAPI + Next.js + Postgres + Keycloak/AUTH_BYPASS; Gemini policies/insights/manager.",
    result: "Dockerized scaffolds that cut spin-up time for client and hackathon forks.",
    tags: ["Platform", "Docker", "RBAC"],
    featured: true,
  },
  {
    id: "ai-sante",
    name: "AI Sante",
    domain: "Healthcare · Quantum Bot",
    problem: "Healthcare ops needed automation with voice and conversational sales.",
    architecture: "React + Node + Django; LangGraph sales bot; Azure; voice nav.",
    result: "~70% less targeted manual workload; ~30% efficiency lift for staff flows.",
    tags: ["Healthcare", "LangGraph", "Azure"],
    featured: true,
  },
  {
    id: "cctv",
    name: "CCTV AI Safety Suite",
    domain: "Industrial CV · Quantum Bot",
    problem: "Live sites needed faster, more accurate safety monitoring.",
    architecture: "YOLO + Deep SORT; Cython/GPU path; accident/vehicle/people/PPE modules.",
    result: "~5→25 FPS; ~40% faster incident response; ~35% monitoring accuracy lift.",
    tags: ["CV", "YOLO", "Edge"],
    featured: true,
  },
  {
    id: "golbot",
    name: "Golbot",
    domain: "Pharma Forecasting",
    problem: "Pharma teams needed better sales/demand forecasts with less manual work.",
    architecture: "XGBoost / LightGBM / TabPFN / ARIMA; feature pipelines; reporting.",
    result: "~20% forecast accuracy lift; ~60% less manual analysis time.",
    tags: ["Forecasting", "ML"],
  },
  {
    id: "qbbot",
    name: "Qbbot GenBI + Agent Suite",
    domain: "Conversational BI / Agents",
    problem: "Teams needed chat-to-SQL, charts, and reusable agent tools.",
    architecture: "Multi-LLM GenBI + RAG; CrewAI/Autogen/LangGraph tools; web UIs.",
    result: "~60% less manual BI work; ~50% faster custom chatbot integration.",
    tags: ["GenBI", "RAG", "Agents"],
  },
  {
    id: "dialora",
    name: "Dialora Voice Agents",
    domain: "Codiste · Voice AI",
    problem: "Voice agents needed low-latency RAG and reliable tool calls.",
    architecture: "Qdrant RAG on Hetzner (~0.3–0.6s); n8n orchestration; function calling.",
    result: "24/7 voice automation path aimed at less lead leakage.",
    tags: ["Voice", "RAG", "n8n"],
  },
  {
    id: "medical-rag",
    name: "Medical RAG API",
    domain: "Healthcare Q&A",
    problem: "Generic embeddings fail on clinical PDFs.",
    architecture: "FastAPI; MedEmbed; cross-encoder rerank; BioMistral via HF; FAISS/Chroma.",
    result: "Domain-grounded /ask API with citations; Dockerized.",
    tags: ["RAG", "HuggingFace", "FastAPI"],
  },
  {
    id: "solulab",
    name: "AI Safety Models POC",
    domain: "Conversational Safety · Solulab",
    problem: "Chat platforms need abuse, escalation, crisis, and age filters.",
    architecture: "Flask; BERT abuse; hybrid escalation; crisis + age content filters.",
    result: "End-to-end safety POC with web UI and deploy docs.",
    tags: ["Safety", "BERT", "Flask"],
  },
  {
    id: "langgraph-demo",
    name: "LangGraph Supervisor Games",
    domain: "Multi-agent demo",
    problem: "Need clear supervisor pattern for multi-agent routing.",
    architecture: "LangGraph + Gemini; number/word agents; checkpointed state.",
    result: "Interactive multi-agent orchestration demo.",
    tags: ["LangGraph", "Agents"],
  },
];

export const journey = [
  {
    when: "2025 – Present",
    where: "Supervity / DigitaMizers",
    what: "Forward Deployed AI — AP CC, Vikrix, onboarding, SAP reconciliation, CC platforms.",
  },
  {
    when: "Feb 2026 – Present",
    where: "Drytis",
    what: "Contract AI delivery — pair sessions, client unblocks, production features.",
  },
  {
    when: "Nov 2025 – Jan 2026",
    where: "Codiste · Dialora",
    what: "Voice agent platform — low-latency RAG, n8n tool orchestration.",
  },
  {
    when: "Jun 2024 – Oct 2025",
    where: "Quantum Bot",
    what: "Healthcare, CCTV safety, Golbot forecasting, GenBI, agent suites — live systems.",
  },
  {
    when: "2023 – 2024",
    where: "ISRO · Tata · Govt internships",
    what: "Research tooling, analytics, vehicle detection studies.",
  },
];

export const proofs = [
  { label: "Manual workload cut", value: "~70%", note: "AI Sante healthcare flows" },
  { label: "CV throughput", value: "5→25 FPS", note: "CCTV suite Cython/GPU" },
  { label: "Forecast accuracy", value: "+~20%", note: "Golbot pharma models" },
  { label: "Voice RAG latency", value: "0.3–0.6s", note: "Dialora / Qdrant" },
];
