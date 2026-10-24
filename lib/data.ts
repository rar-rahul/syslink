export const brand = {
  name: "SYSLINK",
  tagline: "Plan, migrate, implement, manage and scale your IT infrastructure with one trusted partner.",
  address: "Nanda Nagar, Indore(M.P) — 452011",
  phones: ["+91 6262045111", "+91 6262042444"],
  email: ["support@syslinkglobal.com", "info@syslinkglobal.com"],
  supportEmail:"support@syslinkglobal.com",
  salesNumber:"+91 6262037222",
  whatsappNumber:"+91 9893114556",

};

export type Service = { slug: string; title: string; text: string; img: string; icon: string; intro: string; includes: string[] };

export const services: Service[] = [
  { slug: "software-integration-services", title: "Software Integration and Services", icon: "plug", img: "service-software-integration",
    text: "Custom software, SaaS and application integration that connect disparate systems for smooth data flow and workflow automation.",
    intro: "From initial planning and design to implementation and ongoing support, we guide you through every step of the integration journey.",
    includes: [
      "Custom software development tailored to your requirements",
      "Application, database and platform integration",
      "SaaS, ERP, CRM and business intelligence solutions",
      "Real-time data exchange and streamlined workflows",
      "Software testing and quality assurance",
      "Ongoing maintenance, support and timely updates",
    ] },
  { slug: "web-app-development", title: "Web & App Development", icon: "code", img: "service-web-app",
    text: "Custom websites, web portals and mobile apps built to meet your specific requirements and scale with your business.",
    intro: "We design, build and support digital products that improve efficiency and productivity for your customers and teams.",
    includes: [
      "Business websites and web portals",
      "Custom web applications",
      "Android and iOS mobile apps",
      "Cloud-based (SaaS) application development",
      "Testing and quality assurance",
      "Maintenance and ongoing support",
    ] },
  { slug: "cloud-integration-management", title: "Cloud Integration and Management", icon: "cloud-cog", img: "service-cloud-management",
    text: "Seamless integration of cloud services into your existing environment, with proactive day-to-day management.",
    intro: "We enable hybrid cloud deployments and keep your cloud resources optimized, monitored and secure.",
    includes: [
      "Hybrid cloud integration with existing infrastructure",
      "Cloud networking for efficient access to cloud resources",
      "Optimized resource allocation",
      "Proactive monitoring and management",
      "Disaster recovery and business continuity",
      "Dedicated support from our expert team",
    ] },
  { slug: "cloud-solutions", title: "Cloud Services and Migration", icon: "cloud", img: "service-cloud",
    text: "Move your data and applications to the cloud with minimal disruption and full data integrity.",
    intro: "Wherever you are on your cloud journey, we help you assess, migrate and scale at the right pace.",
    includes: [
      "Cloud readiness assessment and planning",
      "Seamless migration of data and applications",
      "Data integrity and security throughout the process",
      "Cloud-based software solutions that reduce infrastructure costs",
      "Performance and cost optimization",
      "Post-migration support",
    ] },
  { slug: "infrastructure-management-services", title: "IT Infrastructure and Management", icon: "server", img: "service-infrastructure",
    text: "Reliable, scalable and efficient IT infrastructure, from end-user devices to the data centre.",
    intro: "Our comprehensive services cover every aspect of your infrastructure, so your systems stay available when your business needs them.",
    includes: [
      "Servers for data processing, storage and application hosting",
      "Secure and scalable data storage",
      "Data centre design and construction",
      "Power and cooling solutions",
      "Proactive monitoring with SLA compliance",
      "Software licence management",
    ] },
  { slug: "server-desktop-virtualization", title: "Server & Desktop Virtualization", icon: "layers", img: "service-virtualization",
    text: "Maximize resource utilization and reduce your hardware footprint with virtualization technologies.",
    intro: "We implement virtual environments that improve scalability and agility while lowering hardware costs.",
    includes: [
      "Server virtualization and consolidation",
      "Desktop virtualization (VDI)",
      "Maximum resource utilization",
      "Reduced hardware footprint and costs",
      "Greater scalability and agility",
      "Monitoring and ongoing support",
    ] },
  { slug: "network-design-implementation", title: "Network Design and Implementation", icon: "network", img: "service-network",
    text: "Tailored network architecture planning and deployment that optimizes efficiency and scalability.",
    intro: "From design to expansion, we build reliable networks that keep communication and data flowing across your organization.",
    includes: [
      "Network design and implementation",
      "Network security: firewalls, encryption and intrusion detection",
      "Wireless networking for seamless connectivity",
      "Network monitoring and management",
      "Cloud networking",
      "VPNs for secure remote access",
      "VoIP and unified communications",
      "Network upgrades and expansion",
    ] },
  { slug: "security-solutions", title: "Security Management Services", icon: "shield", img: "service-security",
    text: "Safeguard your network, data centre and documents against unauthorized access, cyber threats and data breaches.",
    intro: "Robust security measures from individual devices to the data centre, built around the way your business works.",
    includes: [
      "Firewalls and network perimeter protection",
      "Encryption and data protection",
      "Intrusion detection systems",
      "Data centre physical security and access controls",
      "VPN-based secure remote access",
      "Secure printing and document protection",
    ] },
  { slug: "amc-services", title: "AMC Services", icon: "file-check", img: "service-amc",
    text: "Reliable annual maintenance contracts that keep your computing infrastructure running smoothly throughout the year.",
    intro: "With proactive maintenance, timely repairs and expert support, we deliver optimal performance, reliability and peace of mind.",
    includes: [
      "Laptops and desktops",
      "Servers and storage",
      "Networks and all-in-one systems",
      "Printers and peripherals (monitors, keyboards, mice)",
      "Software licence compliance",
      "Proactive maintenance and timely repairs",
    ] },
  { slug: "managed-print-services", title: "Managed Print Services", icon: "printer", img: "service-print",
    text: "Unlock efficiency and security with managed printing that cuts costs, waste and downtime.",
    intro: "Choose reliability, security and efficiency, where proactive maintenance, cost optimization and expert support streamline your printing infrastructure.",
    includes: [
      "Proactive maintenance and monitoring to minimize downtime",
      "Cost optimization that reduces printing expenses and waste",
      "Enhanced security for sensitive documents",
      "Customized solutions for your business needs",
      "Eco-friendly print optimization and waste reduction",
      "Expert support for any printing issue or query",
    ] },
  { slug: "field-services", title: "Onsite Field Services", icon: "wrench", img: "service-field",
    text: "Installation, break-fix and maintenance support for your IT assets by trained engineers at your site.",
    intro: "Timely onsite support that keeps your computing devices, printers and networks running without disruption.",
    includes: [
      "Installation and rollouts",
      "Break-fix and timely onsite repairs",
      "Preventive maintenance visits",
      "Support for desktops, laptops, printers, servers and networks",
      "Service reports and issue tracking",
    ] },
  { slug: "warranty-logistics-management", title: "Warranty & Logistics Management Services", icon: "truck", img: "service-logistics",
    text: "Handle warranty claims, spare parts and returns through one organized process, so downtime stays short.",
    intro: "We manage the chain from claim registration to spare delivery and replacement, with clear tracking at every step.",
    includes: [
      "Warranty claim registration and tracking",
      "Spare parts storage and delivery",
      "Return, repair and replacement handling",
      "Support for laptops, desktops and printers",
      "Turnaround and service-level reporting",
    ] },
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
  { name: "Prashant Rao", role: "Director", img: "leader-1", bio: "Leads strategy and sustained growth. Replace this with a real biography." },
  { name: "Vinod Yadav", role: "Director", img: "leader-2", bio: "Runs delivery across branches and service centers. Replace with real copy." },
];

export const partners = ["LENOVO", "IBM", "ACER", "TCS", "KYNDRYL", "SAMSUNG", "DXC", "HUGHES", "DELL", "HP", "PANTUM", "MSI"];
