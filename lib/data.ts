export const brand = {
  name: "SYSLINK",
  tagline: "Plan, migrate, implement, manage and scale your IT infrastructure with one trusted partner.",
  address: "889/9, Nanda Nagar, Indore(M.P) — 452011",
  phones: ["+91 9893114656", "+91 9669696711"],
  email: "syslinkglobal@gmail.com",
};

export type Service = { slug: string; title: string; text: string; img: string; icon: string; intro: string; includes: string[] };

export const services: Service[] = [
  { slug: "cloud-solutions", title: "Cloud Services", icon: "cloud", img: "service-cloud",
    text: "Discover and unlock value across every part of your business with a seamless, secure cloud environment.",
    intro: "Wherever you are on your cloud journey, we help you scale at the right pace: assess, migrate, optimize and govern.",
    includes: ["Cloud readiness assessment", "Migration and deployment", "Cost and performance optimization", "Managed cloud operations"] },
  { slug: "professional-services", title: "Professional Services", icon: "users", img: "service-professional",
    text: "Outsource short and medium-term project-based IT talent. We recruit, train and retain, so you can focus on your business.",
    intro: "Resource optimization and augmentation, from a single specialist to a full SLA-based delivery team.",
    includes: ["Resource augmentation", "SLA-based team provisioning", "Short and medium-term projects", "Technical training and certification"] },
  { slug: "infrastructure-management-services", title: "Infrastructure Management Services", icon: "server", img: "service-infrastructure",
    text: "Step up your competitive advantage and keep IT infrastructure available to users at all times.",
    intro: "Standardize, stabilize, optimize and future-proof everything from end-user devices to complex networks.",
    includes: ["Smart data centres", "Networking and edge computing", "Boardroom solutions", "Monitoring, patching and capacity planning"] },
  { slug: "security-solutions", title: "Security Services", icon: "shield", img: "service-security",
    text: "Make your business more resilient and compliant against cyber threats with industry-relevant threat intelligence.",
    intro: "The right security posture from individual devices to data centers, backed by 24x7 security operations.",
    includes: ["Network and perimeter security", "Cloud and application security", "Data, mobile and endpoint security", "Security operations and compliance"] },
  { slug: "field-services", title: "Field Services", icon: "wrench", img: "service-field",
    text: "Installation, break-fix and maintenance support for your IT assets by trained engineers, even in remote locations.",
    intro: "Warranty and post-warranty services, parts logistics and field-engineer monitoring across the country.",
    includes: ["Installation and rollouts", "Break-fix and AMC support", "Parts logistics and repair center", "Engineer tracking and SLA reporting"] },
  { slug: "intelligent-automation", title: "Intelligent Automation", icon: "bot", img: "service-automation",
    text: "Use a service management platform enhanced with machine learning and AI to improve operational efficiency.",
    intro: "Automate repetitive service work and give users faster, more consistent outcomes.",
    includes: ["Service desk and ticket automation", "RPA and workflow design", "NLP-powered request handling", "Operations analytics"] },
];

export const slides = [
  { img: "hero-1", a: "We’re all about Excellence", b: "in IT Infrastructure Management", c: "Creating value in every customer experience, every day." },
  { img: "hero-2", a: "We’re energized by our", b: "25 years of expertise in IT solutions", c: "Supporting critical business applications as your trusted partner." },
  { img: "hero-3", a: "We’re proud of our extensive", b: "Service footprint", c: "Present countrywide, even in remote locations, when you need us." },
  { img: "hero-4", a: "We’re passionate about our", b: "robust service delivery model", c: "Onsite, remote and hybrid — always customer-centric." },
  { img: "hero-5", a: "We’re excited about our", b: "Service management", c: "Enabled by technology and expertise to power your business." },
];

export const values = [
  { icon: "compass", a: "360-degree", b: "value", t: "Durable, stable IT infrastructure. We coordinate multiple partners to get optimum value from cloud, hardware and software." },
  { icon: "clipboard", a: "Consulting", b: "services", t: "A detailed audit and gap analysis, then a roadmap of architecture, investments, timelines and an execution plan." },
  { icon: "swap", a: "Migration & Deployment", b: "of IT infrastructure", t: "Retire, Refresh, Replace and Retain assets to move from old to new at minimal cost and disruption." },
  { icon: "activity", a: "Management", b: "of IT infrastructure", t: "Lean quality of service with a security focus: continuous monitoring and optimization from core to perimeter." },
  { icon: "bot", a: "Intelligent", b: "Automation", t: "AI, ML, NLP and RPA for greater service efficiency and a superior customer experience." },
  { icon: "users", a: "4000+", b: "field force", t: "Experts in 1,500+ locations, so your capital and people stay focused on productivity." },
];

export const scale = [
  { t: "Cloud", d: "Think beyond your horizon. Scale at an optimal rate wherever you are on your cloud journey." },
  { t: "Security", d: "From individual devices to data centers, get the right security posture across your ecosystem." },
  { t: "Infrastructure", d: "Standardize, stabilize, optimize and future-proof everything from devices to networks." },
  { t: "Professional Services", d: "From plain resource outsourcing to SLA-based provisioning, with flexible capacity." },
  { t: "Field Services", d: "Warranty and post-warranty support, installation, parts logistics and engineer monitoring." },
];

export const model = [
  { icon: "handshake", t: "Right Sourcing and Agile Delivery" },
  { icon: "globe", t: "On-Premise, Remote or Hybrid Service Delivery" },
  { icon: "leaf", t: "Lean Operations Philosophy" },
  { icon: "gauge", t: "QoS (Quality of Service) Benchmarks" },
  { icon: "headset", t: "CRM Support" },
  { icon: "chart", t: "Operation Analytics" },
];

export const footprint = {
  numbers: [
    { v: 100, s: "+", l: "Branches" }, { v: 1500, s: "+", l: "Service Locations" }, { v: 100, s: "+", l: "Parts Centers" },
    { v: 3, s: "", l: "Warehouses" }, { v: 3500, s: "+", l: "Engineers" },
  ],
  management: ["Network Operations Center", "Contact Center", "Service Desk", "App Development", "Technical Repair Center", "Labs"],
  governance: ["Project Management Office", "Talent Management Group", "Talent Acquisition Center", "Quality", "Center of Excellence", "Academy"],
};

export const stats = [
  { v: 1500, s: "+", l: "locations of operation" }, { v: 100000, s: "", l: "automated actions per month" },
  { v: 96000, s: "", l: "security endpoints migrated" }, { v: 1000000, s: "", l: "service requests per year" }, { v: 1000, s: "", l: "break-fixes per month" },
];

export const leaders = [
  { name: "Aarav Mehta", role: "Chief Executive Officer", img: "leader-1", bio: "Leads strategy and sustained growth. Replace this with a real biography." },
  { name: "Neha Kulkarni", role: "Chief Operating Officer", img: "leader-2", bio: "Runs delivery across branches and service centers. Replace with real copy." },
  { name: "Rohan Deshmukh", role: "VP, Strategic Interventions", img: "leader-3", bio: "Drives transformation through process, automation and analytics. Replace with real copy." },
  { name: "Isha Verma", role: "Head, Culture & Communication", img: "leader-4", bio: "Builds the team culture and external voice. Replace with real copy." },
  { name: "Vikram Joshi", role: "CFO & Head, HR Operations", img: "leader-5", bio: "Looks after finance and people operations. Replace with real copy." },
];

export const partners = ["LENOVO", "IBM", "ACER", "TCS", "KYNDRYL", "SAMSUNG", "DXC", "HUGHES", "DELL", "HP", "PANTUM", "MSI"];
