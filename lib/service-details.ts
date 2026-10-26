/**
 * Detail-page content for every service, keyed by the slug used in lib/data.ts.
 * Add a new service by adding its slug here. If a slug is missing, the service page
 * falls back to the simple "What you get" layout using intro + includes from lib/data.ts.
 */

export type Offering = { tag: string; title: string; text: string; icon: string; points: string[] };
export type TechGroup = { t: string; items: string[] };
export type ServiceDetail = {
  overview: string[];                 // intro paragraphs
  highlight: string;                  // bold closing line under the intro
  approach: [string, string][];       // "Our approach" card: [big word, small label] x4
  approachNote: string;
  offeringsTitle: string;
  offeringsText: string;
  offerings: Offering[];              // zig-zag cards; icon names are mapped in the page
  delivery?: string[];                // falls back to defaultDelivery
  technologies?: TechGroup[];         // section is hidden when omitted
  benefits: string[];
  closing: { title: string; text: string };
};

const o = (tag: string, title: string, text: string, icon: string, points: string[]): Offering => ({ tag, title, text, icon, points });
const g = (t: string, items: string[]): TechGroup => ({ t, items });

export const defaultDelivery = [
  "Onsite Support",
  "Remote Support",
  "Hybrid Support Model",
  "SLA-Based Support",
  "Dedicated Support Team",
  "Project or Contract Engagement",
];

export const serviceDetails: Record<string, ServiceDetail> = {
  /* 1 ─────────────────────────────────────────────── */
  "software-integration-services": {
    overview: [
      "Disconnected systems slow teams down. Our software integration services connect your applications, databases and platforms so data flows smoothly and routine work runs on its own.",
      "From custom software to SaaS, ERP, CRM and business intelligence, we guide you through planning, design, implementation and ongoing support, with solutions tailored to your business requirements.",
    ],
    highlight: "Connect your systems once, and let your teams focus on the work that matters.",
    approach: [["Connected", "Systems and data"], ["Custom", "Built for your needs"], ["Scalable", "Grows with you"], ["Supported", "Before and after launch"]],
    approachNote: "End-to-end integration covering planning, design, implementation and support, delivered with testing and quality assurance.",
    offeringsTitle: "Our Software Integration Services",
    offeringsText: "From custom builds to integrated platforms, everything needed to make your software work as one.",
    offerings: [
      o("Custom", "Custom Software Development", "Tailored software designed around your requirements to improve efficiency and productivity.", "code",
        ["Requirement analysis and solution design", "Web-based business applications", "Workflow and process automation", "Dashboards and reporting", "User training and handover", "Enhancements and version updates"]),
      o("Integration", "Application Integration", "Seamless integration of disparate systems and applications, ensuring data consistency and workflow automation.", "plug",
        ["API and web-service integration", "Database and platform integration", "Third-party and legacy system connectors", "Data migration and synchronization", "Real-time data exchange", "Error handling and monitoring"]),
      o("Platforms", "SaaS, ERP and CRM", "Cloud-based and enterprise platforms that streamline processes and improve customer relationships.", "cloud",
        ["SaaS adoption and configuration", "ERP implementation support", "CRM setup and customization", "Role-based access and security", "Integration with your existing tools", "Ongoing platform support"]),
      o("Insights", "Business Intelligence and Analytics", "Tools for analyzing and visualizing data so you can act on insights and make informed decisions.", "activity",
        ["Data consolidation from multiple sources", "Interactive dashboards", "Operational and management reports", "Real-time insights for decisions", "KPI tracking", "Data quality checks"]),
      o("Quality", "Software Testing and QA", "Rigorous testing to ensure the reliability, security and performance of your applications.", "file-check",
        ["Functional and regression testing", "Integration and compatibility testing", "Performance and load checks", "Security-focused review", "Bug tracking and resolution", "Release sign-off and documentation"]),
      o("Support", "Maintenance and Support", "Ongoing maintenance to keep your software systems running smoothly, with timely updates and enhancements.", "headphones",
        ["Prompt issue resolution", "Preventive maintenance", "Timely updates and patches", "Performance monitoring", "Enhancement requests", "Documentation and knowledge transfer"]),
    ],
    technologies: [
      g("Integration", ["REST and SOAP APIs", "Webhooks and message queues", "ETL and data pipelines"]),
      g("Platforms", ["ERP and CRM systems", "SaaS applications", "Custom web applications"]),
      g("Data", ["SQL and NoSQL databases", "Reporting and BI tools", "Data warehouses"]),
    ],
    benefits: [
      "Fewer manual steps and less duplicate data entry", "Consistent, accurate data across systems", "Faster, better-informed decisions",
      "Solutions that scale as you grow", "Lower long-term maintenance effort", "Dedicated support after go-live",
    ],
    closing: { title: "Connect Your Systems—We’ll Handle the Integration", text: "Tell us which systems need to work together and we will design an integration that fits your business and budget." },
  },

  /* 2 ─────────────────────────────────────────────── */
  "web-app-development": {
    overview: [
      "Your website and applications are often the first impression customers have of your business. We design, build and support websites, web portals and mobile apps that are fast, secure and easy to grow.",
      "From first idea to launch and beyond, our team works closely with you to deliver digital products that match your requirements and make life easier for customers and staff.",
    ],
    highlight: "Build it once, build it right, and keep improving it.",
    approach: [["Responsive", "On every device"], ["Secure", "Built with care"], ["Scalable", "Ready to grow"], ["Supported", "Maintained after launch"]],
    approachNote: "Design, development, testing, deployment and support from one team.",
    offeringsTitle: "Our Web and App Development Services",
    offeringsText: "Websites, portals and apps built around your business and your users.",
    offerings: [
      o("Websites", "Business Websites", "Professional, mobile-friendly websites that present your business clearly and generate enquiries.", "globe",
        ["Company and service websites", "Responsive design for all screen sizes", "Contact and enquiry forms", "Search-friendly page structure", "Fast loading and secure hosting setup", "Content updates and support"]),
      o("Web apps", "Web Portals and Applications", "Custom web applications and portals for customers, partners and internal teams.", "monitor",
        ["Customer and vendor portals", "Admin dashboards and reports", "Booking, inventory and order systems", "Role-based access and login", "Integration with existing systems", "Scalable architecture"]),
      o("Mobile", "Mobile Apps", "Android and iOS apps that put your services in your customers’ hands.", "smartphone",
        ["Android and iOS app development", "Cross-platform options", "Push notifications", "Backend and API development", "App store publishing support", "Updates and maintenance"]),
      o("Design", "UI/UX Design", "Clean, intuitive interfaces designed around how your users actually work.", "layers",
        ["User flows and wireframes", "Visual design aligned to your brand", "Interactive prototypes", "Accessibility considerations", "Usability review", "Design handover to development"]),
      o("Quality", "Testing and Quality Assurance", "Careful testing so your product works properly before and after launch.", "file-check",
        ["Functional testing", "Cross-browser and device checks", "Performance testing", "Security checks", "Bug tracking", "Release checklist"]),
      o("Support", "Hosting and Support", "Reliable deployment and ongoing technical support after go-live.", "headphones",
        ["Deployment and hosting setup", "Domain and email configuration", "Backups and monitoring", "Bug fixes and updates", "Performance improvements", "Ongoing technical support"]),
    ],
    technologies: [
      g("Front end", ["React and Next.js", "Responsive HTML, CSS and JavaScript", "Progressive web apps"]),
      g("Back end", ["Node.js and API development", "SQL and NoSQL databases", "Authentication and access control"]),
      g("Mobile and delivery", ["Android and iOS apps", "Cloud hosting and deployment", "Version control and CI/CD"]),
    ],
    benefits: [
      "A professional online presence", "A better experience for customers and staff", "Fast, reliable performance",
      "Easier updates and content management", "Room to add features as you grow", "One team for build and support",
    ],
    closing: { title: "Have an Idea? Let’s Build It", text: "Share your requirements and we will recommend the right website, portal or app for your business." },
  },

  /* 3 ─────────────────────────────────────────────── */
  "cloud-integration-management": {
    overview: [
      "Most businesses run a mix of on-premise systems and cloud services. Our cloud integration and management service brings them together so applications, data and users work smoothly across environments.",
      "We connect your cloud platforms with your existing infrastructure, then monitor, secure and optimize them day to day, so you get the flexibility of the cloud without the management burden.",
    ],
    highlight: "One connected environment, managed by people who know it.",
    approach: [["Hybrid", "Cloud and on-premise"], ["Monitored", "Proactive management"], ["Protected", "Backup and recovery"], ["Optimized", "Resources and costs"]],
    approachNote: "Seamless cloud integration with proactive monitoring, disaster recovery and dedicated expert support.",
    offeringsTitle: "Our Cloud Integration and Management Services",
    offeringsText: "Everything needed to connect, run and protect a hybrid environment.",
    offerings: [
      o("Integration", "Hybrid Cloud Integration", "Seamless integration of cloud services into your data centre, enabling hybrid deployments and better resource allocation.", "cloud",
        ["Cloud and on-premise connectivity", "Hybrid cloud design and deployment", "Identity and access integration", "Application and data placement planning", "Integration with existing infrastructure", "Testing and validation"]),
      o("Network", "Cloud Networking", "Integration of cloud services into your network for efficient access to cloud resources and applications.", "network",
        ["Secure site-to-cloud links", "VPN and private connectivity", "Traffic and bandwidth planning", "Segmentation and access rules", "Performance tuning", "Network monitoring"]),
      o("Operations", "Monitoring and Management", "Proactive monitoring and management that keeps cloud workloads healthy and available.", "activity",
        ["Performance and uptime monitoring", "Alerts and incident response", "Patching and updates", "Capacity and usage reviews", "Cost monitoring and optimization", "Regular health reports"]),
      o("Resilience", "Disaster Recovery and Continuity", "Planning and implementation that minimize downtime and keep your business running if something goes wrong.", "hard-drive",
        ["Backup design and scheduling", "Recovery point and time planning", "Replication to a secondary site or cloud", "Failover and failback testing", "Documented recovery procedures", "Periodic recovery drills"]),
    ],
    technologies: [
      g("Environments", ["Public cloud platforms", "Private and hybrid cloud", "On-premise data centres"]),
      g("Connectivity", ["Site-to-cloud VPN", "Private links and routing", "Firewalls and access controls"]),
      g("Operations", ["Monitoring and alerting", "Backup and replication", "Cost and usage reporting"]),
    ],
    benefits: [
      "Flexibility to use the right environment for each workload", "Reduced downtime and faster recovery", "Better visibility into performance and cost",
      "Optimized use of cloud resources", "Less day-to-day management effort", "Expert help when you need it",
    ],
    closing: { title: "Bring Your Cloud and Infrastructure Together", text: "Talk to us about connecting and managing your hybrid environment with confidence." },
  },

  /* 4 ─────────────────────────────────────────────── */
  "cloud-solutions": {
    overview: [
      "Moving to the cloud should not disrupt your business. We help you assess what to move, plan the migration and carry it out with minimal downtime and full data integrity.",
      "Whether you are moving a few applications or an entire data centre, we guide you at the right pace and support you after go-live.",
    ],
    highlight: "Move with a plan, not a leap of faith.",
    approach: [["Assessed", "Readiness and fit"], ["Planned", "Minimal disruption"], ["Secure", "Data integrity first"], ["Supported", "After migration"]],
    approachNote: "From readiness assessment to post-migration support, with data integrity and security at every step.",
    offeringsTitle: "Our Cloud Services and Migration",
    offeringsText: "A clear path from assessment to a stable, optimized cloud environment.",
    offerings: [
      o("Assess", "Cloud Readiness Assessment", "A clear picture of your applications, data and infrastructure before anything is moved.", "file-check",
        ["Application and workload inventory", "Dependency mapping", "Cloud suitability and risk review", "Cost and benefit estimate", "Migration approach and priorities", "Roadmap and timeline"]),
      o("Migrate", "Data and Application Migration", "Seamless migration of data and applications to new environments with minimal disruption.", "refresh",
        ["Lift-and-shift and re-platforming", "Server and database migration", "File and email data migration", "Pilot migrations and testing", "Cut-over planning and rollback", "Validation after migration"]),
      o("Data centre", "Data Centre Migration", "Relocate or consolidate your data centre while protecting data integrity and security throughout.", "server",
        ["Migration planning and scheduling", "Physical and virtual server moves", "Network and storage re-design", "Backup before and after cut-over", "Minimal-downtime cut-over", "Decommissioning of old equipment"]),
      o("SaaS", "Cloud-Based Solutions", "Cloud software that reduces infrastructure cost and complexity while improving accessibility.", "cloud",
        ["SaaS evaluation and selection", "Setup and configuration", "User onboarding and training", "Data import from existing systems", "Security and access settings", "Ongoing administration"]),
      o("Security", "Security in the Cloud", "Appropriate controls that protect migrated data and workloads.", "lock",
        ["Access and identity controls", "Encryption of data", "Backup and recovery setup", "Network security rules", "Activity monitoring", "Security review after go-live"]),
      o("Support", "Optimization and Support", "Keep your new environment fast, stable and cost-efficient after the move.", "activity",
        ["Performance tuning", "Cost and resource optimization", "Monitoring and alerts", "Issue resolution", "Regular reviews", "Change and capacity planning"]),
    ],
    technologies: [
      g("Migration", ["Server and VM migration", "Database migration", "File and email migration"]),
      g("Cloud models", ["Public cloud", "Private cloud", "Hybrid cloud"]),
      g("Protection", ["Backup and recovery", "Encryption and access control", "Monitoring and alerts"]),
    ],
    benefits: [
      "Minimal downtime during the move", "Lower infrastructure and maintenance costs", "Better accessibility for your teams",
      "Data protected throughout the migration", "Room to scale as your needs change", "One partner from assessment to support",
    ],
    closing: { title: "Ready to Move to the Cloud?", text: "Start with a readiness assessment and a clear migration plan from our team." },
  },

  /* 5 ─────────────────────────────────────────────── */
  "infrastructure-management-services": {
    overview: [
      "Your business depends on IT that is available when people need it. Our infrastructure management service looks after servers, storage, networks and end-user devices so your systems stay reliable, secure and efficient.",
      "We cover every aspect of your environment, from data centre design to day-to-day monitoring, with proactive maintenance that reduces disruption and helps you plan ahead.",
    ],
    highlight: "Stable infrastructure, so your team can focus on the business.",
    approach: [["Proactive", "Monitoring and care"], ["Reliable", "Availability first"], ["Scalable", "Built to grow"], ["SLA", "Predictable support"]],
    approachNote: "Servers, storage, networks and devices managed under clear service levels.",
    offeringsTitle: "Our Infrastructure Management Services",
    offeringsText: "End-to-end care for the systems your business runs on.",
    offerings: [
      o("Servers", "Server Management", "Reliable servers for data processing, storage and application hosting.", "server",
        ["Server installation and configuration", "Operating system updates and patching", "Performance and capacity monitoring", "Backup and restore", "Hardware health checks", "Troubleshooting and repair"]),
      o("Storage", "Storage and Backup", "Secure, scalable storage that keeps growing data accessible and compliant.", "hard-drive",
        ["Storage design and setup", "NAS and SAN support", "Backup scheduling", "Data retention policies", "Capacity planning", "Restore testing"]),
      o("Data centre", "Data Centre Solutions", "Design, construction and management of data centre environments built for reliability and efficiency.", "boxes",
        ["Data centre design and layout", "Racks and structured cabling", "Power and cooling solutions", "Physical security and access control", "Monitoring and management", "Migration and expansion"]),
      o("Network", "Network Infrastructure", "A dependable network backbone connecting your people, devices and applications.", "network",
        ["LAN and WAN support", "Switching and routing", "Wireless coverage", "Firewall and VPN", "Network monitoring", "Upgrades and expansion"]),
      o("Devices", "End-User Computing", "Laptops, desktops, all-in-one systems, printers and peripherals kept running smoothly.", "monitor",
        ["Device setup and rollout", "Operating system and software updates", "Peripherals and printer support", "Software licence management", "Help desk support", "Asset records and tracking"]),
      o("Operations", "Monitoring and SLA Management", "Proactive monitoring with performance and uptime measured against agreed service levels.", "activity",
        ["Health and performance monitoring", "Alerting and escalation", "Incident and problem management", "Preventive maintenance", "Service level reporting", "Regular review meetings"]),
    ],
    technologies: [
      g("Compute and storage", ["Physical and virtual servers", "NAS and SAN storage", "Backup systems"]),
      g("Network", ["Switches and routers", "Firewalls and VPN", "Wireless access points"]),
      g("Data centre", ["Racks and structured cabling", "UPS and power systems", "Cooling and environment monitoring"]),
      g("End-user", ["Desktops and laptops", "Printers and peripherals", "Software licensing"]),
    ],
    benefits: [
      "Fewer outages and faster recovery", "Predictable IT costs", "Better performance across systems",
      "A standardized, well-documented environment", "Easier planning for growth", "Less pressure on your internal team",
    ],
    closing: { title: "Keep Your Infrastructure Running Smoothly", text: "Tell us about your environment and we will propose a management plan that fits." },
  },

  /* 6 ─────────────────────────────────────────────── */
  "server-desktop-virtualization": {
    overview: [
      "Many servers and desktops sit mostly idle while still costing money to power, cool and maintain. Virtualization lets you run more with less hardware, with better flexibility and control.",
      "We design, implement and support virtual server and desktop environments that maximize resource utilization, reduce your hardware footprint and make it easier to scale.",
    ],
    highlight: "Do more with the hardware you already have.",
    approach: [["Efficient", "Resource utilization"], ["Flexible", "Scale up or down"], ["Resilient", "Backup and failover"], ["Managed", "Monitored and supported"]],
    approachNote: "Virtualization that reduces hardware footprint and enhances scalability and agility.",
    offeringsTitle: "Our Virtualization Services",
    offeringsText: "Virtual servers and desktops that cut cost and simplify management.",
    offerings: [
      o("Servers", "Server Virtualization", "Consolidate physical servers into virtual machines to cut cost and simplify management.", "server",
        ["Assessment and consolidation planning", "Hypervisor installation and setup", "Physical-to-virtual migration", "Resource allocation and tuning", "Snapshots and cloning", "Capacity monitoring"]),
      o("Desktops", "Desktop Virtualization (VDI)", "Give users secure access to their desktops and applications from anywhere.", "monitor",
        ["Virtual desktop design and deployment", "Centralized desktop management", "Secure remote access", "Profile and application management", "Fast provisioning of new users", "Performance monitoring"]),
      o("Protection", "Virtual Backup and Recovery", "Protect virtual workloads with backup, replication and tested recovery.", "hard-drive",
        ["Virtual machine backup", "Replication to a secondary site", "Recovery planning and testing", "Retention policies", "Quick VM restore", "Reporting and alerts"]),
      o("Support", "Optimization and Support", "Keep your virtual environment fast, stable and right-sized over time.", "activity",
        ["Performance tuning", "Patching and upgrades", "Resource right-sizing", "Health monitoring", "Issue resolution", "Regular review reports"]),
    ],
    technologies: [
      g("Virtualization", ["Server hypervisors", "Virtual desktop infrastructure", "Application virtualization"]),
      g("Infrastructure", ["Shared storage", "Virtual networking", "Clustering and high availability"]),
      g("Protection", ["VM backup", "Replication", "Disaster recovery planning"]),
    ],
    benefits: [
      "Lower hardware, power and cooling costs", "Faster deployment of new servers and desktops", "Better use of existing resources",
      "Simpler management and backup", "Improved business continuity", "Easy to scale as needs change",
    ],
    closing: { title: "Get More From Your Hardware", text: "Let’s review your servers and desktops and show how virtualization can help." },
  },

  /* 7 ─────────────────────────────────────────────── */
  "network-design-implementation": {
    overview: [
      "A fast, secure network is the backbone of every modern business. We plan, install and support networks that fit how your business actually works, from a single office to multiple branches.",
      "Our team handles the full journey: architecture and design, deployment, security, monitoring and future expansion, so your people and devices stay connected.",
    ],
    highlight: "A network designed around your business, not the other way round.",
    approach: [["Designed", "For your business"], ["Secure", "Firewalls and encryption"], ["Monitored", "Proactive management"], ["Scalable", "Ready for expansion"]],
    approachNote: "Tailored network architecture, deployment and support that optimize efficiency and scalability.",
    offeringsTitle: "Our Network Services",
    offeringsText: "From first design to ongoing management, everything your network needs.",
    offerings: [
      o("Design", "Network Design and Implementation", "Tailored architecture planning and deployment to meet your specific business needs.", "network",
        ["Requirement and site survey", "LAN and WAN design", "Structured cabling and rollout", "Switch and router configuration", "Testing and documentation", "Upgrades and expansion planning"]),
      o("Security", "Network Security", "Robust measures that safeguard against cyber threats and data breaches.", "shield",
        ["Firewalls and perimeter protection", "Encryption", "Intrusion detection systems", "Access control and segmentation", "Security policy configuration", "Regular security reviews"]),
      o("Wireless", "Wireless Networking", "Scalable, reliable wireless solutions for seamless connectivity across all devices.", "wifi",
        ["Wireless site survey", "Access point planning and installation", "Guest and staff networks", "Coverage and capacity tuning", "Secure authentication", "Ongoing monitoring"]),
      o("Operations", "Network Monitoring and Management", "Proactive monitoring of network performance and health for optimal uptime.", "activity",
        ["Performance and availability monitoring", "Alerts and fault detection", "Prompt troubleshooting", "Configuration backup", "Firmware and patch updates", "Regular health reports"]),
      o("Connectivity", "VPN and Cloud Networking", "Secure remote access and efficient connections to cloud resources.", "cloud",
        ["Remote-access VPN", "Site-to-site VPN", "Cloud connectivity", "Traffic prioritization", "Data privacy and confidentiality", "Access policies"]),
      o("Communications", "VoIP and Unified Communications", "Voice, video and data communications integrated on a single platform.", "headphones",
        ["VoIP phone systems", "Video conferencing", "Unified messaging", "Call routing and queues", "Integration with business tools", "Reduced communication costs"]),
    ],
    technologies: [
      g("Wired", ["Switches and routers", "Structured cabling", "LAN and WAN links"]),
      g("Wireless", ["Enterprise access points", "Controllers and management", "Guest access"]),
      g("Security", ["Firewalls and UTM", "VPN gateways", "Intrusion detection"]),
      g("Communications", ["VoIP systems", "Video conferencing", "Unified communications"]),
    ],
    benefits: [
      "Reliable connectivity for every user and device", "Stronger protection against cyber threats", "Better performance for business applications",
      "A network that scales with your growth", "Lower communication costs with VoIP", "Faster fault resolution through monitoring",
    ],
    closing: { title: "Build a Network You Can Rely On", text: "Talk to us about designing, upgrading or expanding your network." },
  },

  /* 8 ─────────────────────────────────────────────── */
  "security-solutions": {
    overview: [
      "Cyber threats and data breaches can disrupt operations and damage trust. Our security management services protect your network, data centre, devices and documents with layered, practical controls.",
      "We build the right security posture around the way your business works, from firewalls and encryption to access control and secure printing.",
    ],
    highlight: "Security that protects without getting in the way.",
    approach: [["Layered", "Defense in depth"], ["Encrypted", "Data protection"], ["Controlled", "Access and identity"], ["Monitored", "Threat detection"]],
    approachNote: "Security measures spanning network, data centre, endpoints and print environments.",
    offeringsTitle: "Our Security Management Services",
    offeringsText: "Protection for every layer of your IT environment.",
    offerings: [
      o("Network", "Network and Perimeter Security", "Firewalls, intrusion detection and secure access keep threats out of your network.", "shield",
        ["Firewall deployment and rules", "Intrusion detection systems", "VPN-based secure remote access", "Network segmentation", "Wireless security", "Regular configuration reviews"]),
      o("Data", "Data and Encryption", "Protect sensitive information at rest and in transit.", "lock",
        ["Data encryption", "Backup protection", "Data access policies", "Secure file sharing", "Data loss prevention practices", "Retention and disposal guidance"]),
      o("Data centre", "Data Centre Security", "Physical and logical controls that safeguard your data centre against unauthorized access.", "server",
        ["Physical access control", "Surveillance and monitoring", "Logical access management", "Intrusion detection", "Environmental monitoring", "Audit trails and logs"]),
      o("Endpoints", "Endpoint and Device Security", "Protect laptops, desktops and mobile devices wherever they are used.", "monitor",
        ["Antivirus and anti-malware", "Patch and update management", "Device hardening", "Access and password policies", "Remote lock and wipe options", "Software licence compliance"]),
      o("Print", "Secure Printing", "Safeguard sensitive documents from unauthorized access and data breaches.", "printer",
        ["User authentication at printers", "Secure release of print jobs", "Print activity tracking", "Access policies by user or group", "Protection of stored print data", "Security review of the print fleet"]),
      o("Operations", "Security Monitoring and Review", "Ongoing visibility and review so weaknesses are found and fixed early.", "activity",
        ["Log and alert review", "Vulnerability checks", "Security health reports", "Incident response support", "Policy and procedure review", "Staff awareness guidance"]),
    ],
    technologies: [
      g("Network", ["Firewalls and UTM", "Intrusion detection", "VPN gateways"]),
      g("Data", ["Encryption", "Backup protection", "Access controls"]),
      g("Endpoints", ["Antivirus and anti-malware", "Patch management", "Device policies"]),
    ],
    benefits: [
      "Lower risk of data breaches and downtime", "Protection for sensitive documents and data", "Clear control over who can access what",
      "Greater confidence for customers and partners", "Security aligned to your business needs", "Practical guidance from experienced engineers",
    ],
    closing: { title: "Strengthen Your Security Today", text: "Speak with our team about protecting your network, data and documents." },
  },

  /* 9 ─────────────────────────────────────────────── */
  "amc-services": {
    overview: [
      "Unexpected equipment failures cost time and money. An annual maintenance contract gives you predictable costs and a dependable team to keep your computing infrastructure in good shape throughout the year.",
      "Our AMCs cover laptops, desktops, servers, networks, storage, printers and peripherals, combining proactive maintenance, timely repairs and expert support.",
    ],
    highlight: "Plan your IT maintenance once and stay covered all year.",
    approach: [["Proactive", "Preventive maintenance"], ["Timely", "Repairs and response"], ["Predictable", "Annual cost"], ["Expert", "Technical support"]],
    approachNote: "Comprehensive AMCs ensuring the smooth operation of your computing devices throughout the year.",
    offeringsTitle: "What Our AMC Covers",
    offeringsText: "One contract for the equipment your teams use every day.",
    offerings: [
      o("End user", "Laptops and Desktops", "Portable and desktop systems kept dependable for everyday work.", "monitor",
        ["Preventive maintenance visits", "Hardware diagnostics and repair", "Operating system and software support", "Performance clean-ups", "Component replacement", "Issue tracking and reports"]),
      o("Data", "Servers and Storage", "Reliable servers and secure, scalable storage that critical operations depend on.", "server",
        ["Health checks and monitoring", "Firmware and patch updates", "Hardware fault repair", "Backup verification", "Capacity reviews", "Priority response"]),
      o("Connectivity", "Networks and All-in-One Systems", "Network equipment and integrated all-in-one systems supported under one contract.", "network",
        ["Switch, router and Wi-Fi support", "Cabling checks", "Configuration backup", "Fault diagnosis and repair", "All-in-one PC maintenance", "Upgrade guidance"]),
      o("Output", "Printers and Peripherals", "Printers, monitors, keyboards and mice supported to keep users productive.", "printer",
        ["Printer servicing and cleaning", "Fault repair and part replacement", "Consumables guidance", "Monitor and peripheral replacement", "Driver and software support", "Usage and issue reports"]),
      o("Compliance", "Software Licences", "Legally procured licences managed so you stay compliant and protected from infringement risk.", "file-check",
        ["Licence inventory and tracking", "Renewal reminders", "Compliance review", "Installation and activation support", "Version and upgrade guidance", "Records for audits"]),
      o("Service", "Service Management", "Clear logging, escalation and reporting for every service request.", "headphones",
        ["Call logging and ticketing", "Defined response expectations", "Escalation path", "Scheduled engineer visits", "Asset records", "Periodic service reports"]),
    ],
    technologies: [
      g("Covered equipment", ["Laptops and desktops", "Servers and storage", "Network devices"]),
      g("Also covered", ["Printers and peripherals", "All-in-one systems", "Software licences"]),
    ],
    benefits: [
      "Predictable annual maintenance cost", "Less downtime for users", "Faster repairs and support",
      "Longer life for your equipment", "A single point of contact", "Better records of your IT assets",
    ],
    closing: { title: "Keep Your Equipment Covered", text: "Share your equipment list and we will propose an AMC that fits." },
  },

  /* 10 ────────────────────────────────────────────── */
  "managed-print-services": {
    overview: [
      "Printing is often an overlooked source of cost, downtime and security risk. Our managed print services give you a reliable, efficient and secure printing environment under one service.",
      "We provide proactive maintenance to minimize downtime, cost optimization to reduce printing expenses and waste, and security measures that protect sensitive documents, with an expert team to tailor the service to your needs.",
    ],
    highlight: "Choose reliability, security and efficiency for every page.",
    approach: [["Proactive", "Maintenance"], ["Lower cost", "Less waste"], ["Secure", "Documents protected"], ["Expert", "Support team"]],
    approachNote: "Proactive maintenance, cost optimization, enhanced security and expert support in one managed service.",
    offeringsTitle: "Our Managed Print Services",
    offeringsText: "A complete, managed approach to your printing infrastructure.",
    offerings: [
      o("Uptime", "Proactive Maintenance", "Continuous monitoring and maintenance of printers to minimize disruptions and downtime.", "wrench",
        ["Printer health monitoring", "Preventive servicing", "Fast fault resolution", "Spare parts availability", "Firmware and driver updates", "Service reports"]),
      o("Savings", "Cost Optimization", "Reduced printing expenses and efficient resource allocation that deliver savings over time.", "activity",
        ["Print usage analysis", "Right-sizing the printer fleet", "Consumables management", "Cost tracking and reports", "Waste and over-printing reduction", "Policy recommendations"]),
      o("Security", "Enhanced Security", "Robust security protocols that protect sensitive documents from unauthorized access and data breaches.", "lock",
        ["User authentication", "Secure print release", "Access controls", "Protection of stored data", "Activity tracking", "Security review"]),
      o("Tailored", "Customized Solutions", "Our team works closely with you to tailor the service to your unique business requirements.", "settings",
        ["Needs and environment assessment", "Fleet design and placement", "Departmental policies", "Flexible service plans", "Integration with your network", "Regular optimization reviews"]),
      o("Sustainability", "Eco-Friendly Practices", "Print optimization and waste reduction that help you minimize your environmental footprint.", "globe",
        ["Duplex and mono defaults", "Reduced paper and toner waste", "Print-on-demand habits", "Responsible consumable disposal", "Usage reporting", "Sustainability targets"]),
      o("Support", "Expert Support", "A dedicated team ready to help with any printing issue or query, promptly and reliably.", "headphones",
        ["Help desk for print issues", "Onsite visits when needed", "Escalation handling", "Driver and setup assistance", "User guidance", "Regular check-ins"]),
    ],
    technologies: [
      g("Devices", ["Printers and copiers", "Multifunction devices", "Scanners"]),
      g("Management", ["Usage monitoring", "Consumables tracking", "Remote diagnostics"]),
      g("Security", ["User authentication", "Secure print release", "Access policies"]),
    ],
    benefits: [
      "Fewer printing interruptions", "Lower printing and consumable costs", "Sensitive documents better protected",
      "A smaller environmental footprint", "One partner for your whole print fleet", "Clear reporting on usage and cost",
    ],
    closing: { title: "Streamline Your Printing", text: "Tell us about your print environment and we will show where you can save." },
  },

  /* 11 ────────────────────────────────────────────── */
  "field-services": {
    overview: [
      "When equipment fails or a new rollout is due, you need trained engineers at your site, quickly. Our onsite field services handle installation, break-fix and maintenance for your IT assets so your teams keep working.",
      "We support desktops, laptops, printers, servers and networks, with clear service records for every visit.",
    ],
    highlight: "Skilled engineers at your site, when you need them.",
    approach: [["Onsite", "Trained engineers"], ["Timely", "Repairs and visits"], ["Preventive", "Scheduled maintenance"], ["Documented", "Service reports"]],
    approachNote: "Installation, break-fix and preventive maintenance delivered by trained engineers at your location.",
    offeringsTitle: "Our Onsite Field Services",
    offeringsText: "Hands-on support for your devices, printers and network equipment.",
    offerings: [
      o("Deploy", "Installation and Rollouts", "New devices and systems installed, configured and ready for use.", "package",
        ["Site survey and planning", "Device unboxing and imaging", "Installation and configuration", "Network and printer setup", "User handover", "Rollout status reports"]),
      o("Repair", "Break-Fix Support", "Timely onsite diagnosis and repair when hardware or connectivity issues stop work.", "wrench",
        ["Fault diagnosis", "Hardware repair and replacement", "Software and OS recovery", "Network and cable faults", "Escalation to specialists", "Closure confirmation"]),
      o("Care", "Preventive Maintenance", "Scheduled visits that catch problems before they cause downtime.", "activity",
        ["Health checks on devices", "Cleaning and inspection", "Updates and patching", "Printer and peripheral servicing", "Network equipment checks", "Visit reports"]),
      o("Visibility", "Service Reporting", "Clear records of every visit and request so you always know what was done.", "file-check",
        ["Call logging and tracking", "Visit and closure reports", "Asset records", "Recurring issue analysis", "Service level reports", "Periodic reviews"]),
    ],
    technologies: [
      g("Devices supported", ["Desktops and laptops", "Printers and peripherals", "Servers and storage"]),
      g("Infrastructure", ["Switches, routers and Wi-Fi", "Structured cabling", "UPS and power equipment"]),
    ],
    benefits: [
      "Faster resolution of hardware and site issues", "Less downtime for your teams", "Consistent, well-documented service",
      "Support for a mix of devices and vendors", "Fewer surprises through preventive care", "One accountable service partner",
    ],
    closing: { title: "Need an Engineer at Your Site?", text: "Tell us your locations and equipment and we will plan the right onsite support." },
  },

  /* 12 ────────────────────────────────────────────── */
  "warranty-logistics-management": {
    overview: [
      "Warranty claims, spare parts and returns can quickly become a tangle of emails and follow-ups. Our warranty and logistics management service puts them into one organized process with clear tracking.",
      "We manage the chain from claim registration to spare delivery and replacement, supporting laptops, desktops and printers so downtime stays short.",
    ],
    highlight: "One process from claim to replacement.",
    approach: [["Organized", "One clear process"], ["Tracked", "Every claim and part"], ["Prompt", "Spare delivery"], ["Reported", "Turnaround visibility"]],
    approachNote: "Claims, spares and returns managed end to end with tracking at every step.",
    offeringsTitle: "Our Warranty and Logistics Services",
    offeringsText: "From the first claim to the final replacement, all in one place.",
    offerings: [
      o("Claims", "Warranty Claim Management", "Register, track and close warranty claims without the back-and-forth.", "file-check",
        ["Claim registration", "Warranty status checks", "Coordination with manufacturers", "Status updates", "Claim closure", "Warranty records"]),
      o("Spares", "Spare Parts Management", "The right parts stored and delivered where they are needed.", "boxes",
        ["Spare parts storage", "Stock tracking", "Dispatch and delivery", "Part compatibility checks", "Faulty part collection", "Inventory reports"]),
      o("Returns", "Returns, Repair and Replacement", "Faulty items collected, repaired or replaced with minimal disruption.", "truck",
        ["Pick-up and drop", "Repair coordination", "Replacement handling", "Packaging and transit care", "Return tracking", "Closure confirmation"]),
      o("Reports", "Turnaround and SLA Reporting", "Clear reporting on how quickly claims and parts are handled.", "activity",
        ["Turnaround time tracking", "Service-level reports", "Open and closed claims", "Recurring fault analysis", "Spare consumption trends", "Periodic reviews"]),
    ],
    benefits: [
      "Shorter downtime when equipment fails", "One clear point of contact", "Less administrative effort for your team",
      "Transparent tracking of every claim", "Better use of your warranty entitlements", "Reliable records for audits and planning",
    ],
    closing: { title: "Simplify Warranty and Spares", text: "Talk to us about managing claims, spares and returns in one place." },
  },
};
