import heroVilla from "@/assets/hero-villa.jpg";
import blueprintImg from "@/assets/process-blueprint.jpg";
import steelImg from "@/assets/process-steel.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceArchitecture from "@/assets/service-architecture.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceConsultancy from "@/assets/service-consultancy.jpg";
import projectSkylineVilla from "@/assets/project-skyline-villa.jpg";
import projectHorizonTower from "@/assets/project-horizon-tower.jpg";
import projectCourtyard from "@/assets/project-courtyard.jpg";
import projectAzureWorkspace from "@/assets/project-azure-workspace.jpg";
import projectUrbanNest from "@/assets/project-urban-nest.jpg";
import projectGreenPavilion from "@/assets/project-green-pavilion.jpg";

export const IMAGES = {
  heroVilla,
  blueprintImg,
  steelImg,
  serviceInterior,
  serviceArchitecture,
  serviceConstruction,
  serviceConsultancy,
};

export const CONTACT = {
  phone: "+91 89717 26387",
  phoneRaw: "918971726387",
  email: "reddyanish181@gmail.com",
  address:
    "21, Ganesh Nagar Rd, Trimurti Nagar, Ibrahimpur, Vijayapura, Karnataka 586109",
  whatsappBase: "https://wa.me/918971726387",
};

export const buildWhatsAppUrl = (message: string) =>
  `${CONTACT.whatsappBase}?text=${encodeURIComponent(message)}`;

export type Service = {
  slug: "architecture" | "interior" | "construction" | "consultancy";
  title: string;
  tagline: string;
  description: string;
  image: string;
  subServices: { title: string; blurb: string }[];
  benefits: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "architecture",
    title: "Architecture",
    tagline: "Form informed by site, climate, and craft.",
    description:
      "From residences to civic blocks, we design buildings that hold light beautifully, breathe with their landscape, and age into their surroundings.",
    image: serviceArchitecture,
    subServices: [
      { title: "Residential Design", blurb: "Homes calibrated to the way you actually live — quiet corners, wide thresholds, honest materials." },
      { title: "Commercial Design", blurb: "Workspaces, showrooms, and mixed-use blocks that pull people in and stay generous to their neighbours." },
      { title: "Landscape Planning", blurb: "Courtyards, terraces and outdoor rooms that make buildings feel bigger than they are." },
      { title: "Urban Planning", blurb: "Masterplans that treat streets, water, and shade as first-class citizens of the design." },
    ],
    benefits: [
      "Site-first, climate-responsive design",
      "3D walkthroughs before we lay a brick",
      "Sanction-ready drawings & liaison",
      "Material palettes that age with dignity",
    ],
    process: [
      { title: "Brief & Site Read", text: "We walk the site, talk to the people who will use it, and map the constraints." },
      { title: "Concept & Massing", text: "Sketches, options and models to test light, flow and volume." },
      { title: "Design Development", text: "Detailed plans, sections and material studies with your feedback baked in." },
      { title: "Documentation", text: "Working drawings, statutory submissions and specifications ready for construction." },
    ],
    faqs: [
      { q: "Do you work on small residential plots?", a: "Yes — we take on plots from 1,200 sq.ft. upwards. Tight sites often produce our sharpest work." },
      { q: "How long does a typical villa design take?", a: "Design and documentation runs about 12–18 weeks depending on scale and approvals." },
      { q: "Can you match a specific reference style?", a: "We use references as a starting point, then reshape them for your site and budget." },
    ],
  },
  {
    slug: "interior",
    title: "Interior",
    tagline: "Rooms tuned for how you actually live.",
    description:
      "Interiors are where architecture meets everyday life. We design each room in warm, tactile, hard-wearing materials that reward daily use.",
    image: serviceInterior,
    subServices: [
      { title: "Residential Interiors", blurb: "Living rooms, kitchens, bedrooms — designed as one continuous experience." },
      { title: "Office Interiors", blurb: "Workspaces that support focus, collaboration and long hours in equal measure." },
      { title: "Retail Interiors", blurb: "Stores that stage your product without stealing the show." },
      { title: "Hospitality Interiors", blurb: "Restaurants, boutique stays and lounges built around a strong sense of place." },
    ],
    benefits: [
      "Custom joinery and lighting design",
      "Material sampling in your actual light",
      "Vendor management, end-to-end",
      "Move-in ready with styling",
    ],
    process: [
      { title: "Story & Mood", text: "We build a story for each room and translate it into a moodboard." },
      { title: "Space Planning", text: "Furniture layouts, sightlines, and circulation studied at 1:20." },
      { title: "Materials & Lighting", text: "Physical samples, mockups, and lighting scenes for every space." },
      { title: "Execution & Styling", text: "Site supervision, snagging and final styling on move-in day." },
    ],
    faqs: [
      { q: "Do you do interiors only?", a: "Yes — many clients bring us in for interiors alone on existing homes and offices." },
      { q: "How involved will I be?", a: "Weekly reviews, sample sign-offs, and a shared board so nothing gets built you haven't seen." },
      { q: "Do you handle procurement?", a: "We can — from bespoke furniture to fittings, we manage suppliers and installation." },
    ],
  },
  {
    slug: "construction",
    title: "Construction",
    tagline: "Built the way it was drawn.",
    description:
      "Our construction arm exists so the design intent survives the site. In-house teams, transparent costing, and a single point of accountability.",
    image: serviceConstruction,
    subServices: [
      { title: "Turnkey Projects", blurb: "One team, one contract, keys handed over." },
      { title: "Civil Construction", blurb: "Structure, envelope and services executed to detail." },
      { title: "Renovation", blurb: "Careful, structural retrofits for older homes and commercial spaces." },
      { title: "Project Management", blurb: "We manage your appointed contractors on your behalf, at a fixed fee." },
    ],
    benefits: [
      "Fixed-price contracts on request",
      "Weekly progress and cost reports",
      "In-house QA/QC at every milestone",
      "Defect liability period included",
    ],
    process: [
      { title: "BOQ & Estimation", text: "Line-item costs against the tender drawings, transparent from day one." },
      { title: "Mobilisation", text: "Site setup, safety plan and material yard commissioning." },
      { title: "Execution", text: "Weekly cycles, photo reports, and inspection by our project engineers." },
      { title: "Handover", text: "Snagging, testing, commissioning and documentation." },
    ],
    faqs: [
      { q: "Do you work on projects designed by others?", a: "Yes — we take on GC work for outside architects with a shared quality bar." },
      { q: "Do you provide warranties?", a: "Structural warranty of 10 years, standard defects liability of 12 months." },
      { q: "How is safety managed?", a: "Dedicated site safety officer, weekly toolbox talks, and PPE compliance audits." },
    ],
  },
  {
    slug: "consultancy",
    title: "Consultancy",
    tagline: "A senior mind on your side, at every stage.",
    description:
      "For clients who already have a team, we plug in as your independent eye — on cost, quality, structure and schedule.",
    image: serviceConsultancy,
    subServices: [
      { title: "Planning", blurb: "Feasibility, zoning, and pre-design strategy for developers and end-users." },
      { title: "Estimation", blurb: "Independent BOQ review, benchmarking, and value engineering." },
      { title: "Site Supervision", blurb: "Third-party inspection and reporting at every stage." },
      { title: "Structural Consultation", blurb: "RCC, steel and composite design reviews by senior engineers." },
    ],
    benefits: [
      "Independent of your contractor",
      "Fixed-fee engagements",
      "Weekly written reports",
      "Escalations handled at director level",
    ],
    process: [
      { title: "Discovery", text: "We meet stakeholders and understand the current state of the project." },
      { title: "Diagnostic", text: "We audit drawings, costs and schedule and share a written diagnostic." },
      { title: "Recommendation", text: "A prioritised action plan with owners and timelines." },
      { title: "Ongoing Advisory", text: "Weekly or monthly reviews for the duration of the project." },
    ],
    faqs: [
      { q: "Do you consult on residential projects too?", a: "Yes — we run consulting engagements from single villas to master-planned communities." },
      { q: "Can you help resolve disputes?", a: "We provide independent technical opinions and act as neutral technical advisors." },
      { q: "Are your engineers licensed?", a: "All our senior engineers are chartered and hold state licences to sign off drawings." },
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  tag: string;
  year: string;
  location: string;
  image: string;
  overview: string;
  services: string[];
  highlights: { label: string; value: string }[];
  gallery: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "skyline-villa",
    name: "Skyline Villa",
    tag: "Private Residence",
    year: "2024",
    location: "Coorg, Karnataka",
    image: projectSkylineVilla,
    overview:
      "A hillside residence set into the ridge above a valley in Coorg. The plan slides along the contour so that every room opens to the horizon, while a cantilevered pool deck frames the sunset.",
    services: ["Architecture", "Interior", "Landscape"],
    highlights: [
      { label: "Built-up", value: "6,400 sq.ft" },
      { label: "Duration", value: "22 months" },
      { label: "Materials", value: "Board-marked concrete, teak, glass" },
      { label: "Status", value: "Completed 2024" },
    ],
    gallery: [projectSkylineVilla, projectCourtyard, projectGreenPavilion, projectHorizonTower],
  },
  {
    slug: "horizon-tower",
    name: "Horizon Tower",
    tag: "Residential High-Rise",
    year: "2023",
    location: "Bengaluru, Karnataka",
    image: projectHorizonTower,
    overview:
      "A 32-storey residential tower shaped as a soft curve to catch southern light and cross-ventilate every apartment. A shared sky-garden at the 18th floor gives the building its social heart.",
    services: ["Architecture", "Construction", "Consultancy"],
    highlights: [
      { label: "Height", value: "128 m" },
      { label: "Apartments", value: "184 units" },
      { label: "Duration", value: "48 months" },
      { label: "Status", value: "Completed 2023" },
    ],
    gallery: [projectHorizonTower, projectAzureWorkspace, projectSkylineVilla, projectCourtyard],
  },
  {
    slug: "the-courtyard-residence",
    name: "The Courtyard Residence",
    tag: "Private Residence",
    year: "2022",
    location: "Vijayapura, Karnataka",
    image: projectCourtyard,
    overview:
      "A modern reinterpretation of the traditional wada. Every room in the house looks onto a central courtyard planted with native trees, filtering harsh western light into something soft.",
    services: ["Architecture", "Interior", "Landscape"],
    highlights: [
      { label: "Built-up", value: "4,200 sq.ft" },
      { label: "Duration", value: "16 months" },
      { label: "Materials", value: "Kota stone, lime plaster, teak" },
      { label: "Status", value: "Completed 2022" },
    ],
    gallery: [projectCourtyard, projectGreenPavilion, projectSkylineVilla, projectUrbanNest],
  },
  {
    slug: "azure-workspace",
    name: "Azure Workspace",
    tag: "Commercial Interior",
    year: "2024",
    location: "Hyderabad, Telangana",
    image: projectAzureWorkspace,
    overview:
      "A 40,000 sq.ft office fit-out for a fintech client. Deep blues, natural oak and modular workstations that support both focus rooms and open collaboration zones.",
    services: ["Interior", "Consultancy"],
    highlights: [
      { label: "Area", value: "40,000 sq.ft" },
      { label: "Duration", value: "5 months" },
      { label: "Seats", value: "420" },
      { label: "Status", value: "Completed 2024" },
    ],
    gallery: [projectAzureWorkspace, projectHorizonTower, projectCourtyard, projectSkylineVilla],
  },
  {
    slug: "urban-nest",
    name: "Urban Nest",
    tag: "Compact Home",
    year: "2023",
    location: "Bengaluru, Karnataka",
    image: projectUrbanNest,
    overview:
      "A four-storey narrow-plot residence in the heart of the city. A double-height living room and a rear light well pull daylight down into every level.",
    services: ["Architecture", "Construction"],
    highlights: [
      { label: "Plot", value: "1,650 sq.ft" },
      { label: "Built-up", value: "3,200 sq.ft" },
      { label: "Duration", value: "14 months" },
      { label: "Status", value: "Completed 2023" },
    ],
    gallery: [projectUrbanNest, projectCourtyard, projectAzureWorkspace, projectGreenPavilion],
  },
  {
    slug: "green-pavilion",
    name: "Green Pavilion",
    tag: "Cultural Pavilion",
    year: "2024",
    location: "Mysuru, Karnataka",
    image: projectGreenPavilion,
    overview:
      "A biophilic events pavilion set inside an existing grove. Cross-laminated timber, a living green wall and passive cooling drive the environmental strategy.",
    services: ["Architecture", "Consultancy", "Construction"],
    highlights: [
      { label: "Built-up", value: "8,000 sq.ft" },
      { label: "Duration", value: "18 months" },
      { label: "Certification", value: "IGBC Platinum" },
      { label: "Status", value: "Completed 2024" },
    ],
    gallery: [projectGreenPavilion, projectSkylineVilla, projectCourtyard, projectHorizonTower],
  },
];

export const TESTIMONIALS = [
  {
    name: "Rohit & Ananya Sharma",
    role: "Homeowners, Skyline Villa",
    quote:
      "Studio Dyota gave us a house that feels like it was always meant to be there. Every corner has a reason.",
    rating: 5,
  },
  {
    name: "Kavya Menon",
    role: "COO, Ferndale Realty",
    quote:
      "They delivered our 32-storey tower ahead of schedule with a level of finish that has become our benchmark.",
    rating: 5,
  },
  {
    name: "Arjun Rao",
    role: "Founder, Northlight Fintech",
    quote:
      "Our new office has genuinely changed how the team works. Careful, considered, and beautifully detailed.",
    rating: 5,
  },
  {
    name: "Meera Nair",
    role: "Director, Amara Hospitality",
    quote:
      "The team's design instinct is second only to their site discipline. Rare combination.",
    rating: 5,
  },
  {
    name: "Siddharth Patil",
    role: "Managing Partner, Patil & Co.",
    quote:
      "As independent consultants they held our contractor to a standard we could not have enforced alone.",
    rating: 5,
  },
  {
    name: "Priya Iyer",
    role: "Homeowner, Courtyard Residence",
    quote:
      "Two years in, the house still surprises us with how it holds the light. That is the highest praise I can give.",
    rating: 5,
  },
];

export const AWARDS = [
  { year: "2024", title: "National Architecture Excellence Award", body: "Council of Architecture India" },
  { year: "2024", title: "Quality Construction Excellence", body: "CIDC India" },
  { year: "2023", title: "Best Interior Design Studio", body: "IIID South Chapter" },
  { year: "2023", title: "Innovation in Modern Architecture", body: "Design Trust South Asia" },
  { year: "2022", title: "Sustainable Design Recognition", body: "IGBC Green Awards" },
  { year: "2022", title: "Top Emerging Construction Firm", body: "Construction World" },
];

export const TEAM = [
  { name: "Anish Reddy", role: "Founder & Principal Architect", initials: "AR" },
  { name: "Sanjana Iyer", role: "Senior Architect", initials: "SI" },
  { name: "Kabir Malhotra", role: "Interior Design Lead", initials: "KM" },
  { name: "Naveen Kulkarni", role: "Project Engineer", initials: "NK" },
  { name: "Aditi Sharma", role: "Construction Manager", initials: "AS" },
  { name: "Rahul Deshpande", role: "Structural Consultant", initials: "RD" },
];

export const STATS = [
  { value: 250, suffix: "+", label: "Completed Projects" },
  { value: 20, suffix: "+", label: "Architects & Engineers" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 18, suffix: "+", label: "Cities Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export const WHY_US = [
  { title: "Innovation", body: "New ideas, tested rigorously against site, brief and budget." },
  { title: "Quality", body: "Materials chosen for how they age, not how they photograph." },
  { title: "Experienced Team", body: "A senior architect on every project, from brief to handover." },
  { title: "Transparent Process", body: "Fixed fees, weekly reports, no invisible line items." },
  { title: "Timely Delivery", body: "Contracts we keep, and schedules we publish." },
  { title: "Customer Satisfaction", body: "98% of our clients come back to us for their next build." },
];

export const PROCESS_STEPS = [
  { id: "01", title: "Discover", text: "Site visit, brief and constraints." },
  { id: "02", title: "Planning", text: "Zoning, feasibility and budget." },
  { id: "03", title: "Design", text: "Concepts, models and drawings." },
  { id: "04", title: "Construction", text: "Execution, QA/QC and reporting." },
  { id: "05", title: "Delivery", text: "Snagging, handover and support." },
];

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;