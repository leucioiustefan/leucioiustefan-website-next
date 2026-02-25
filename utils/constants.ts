export type ProjectStatus =
  | "2021"
  | "2022"
  | "2023"
  | "2024"
  | "2025"
  | "2026"
  | "In Progress"
  | "Live";

export interface ProjectInterface {
  title: string;
  description: string;
  extraDescription?: string;
  tags: string[];
  href: string;
  status: ProjectStatus;
}
export const projects: ProjectInterface[] = [
  {
    title: "BFNL Portals",
    description:
      "Build and maintain the core component library powering 5 B2B and consumer portals serving active users across the BFNL platform.",
    tags: [
      "Next.js",
      "Typescript",
      "React",
      "React Query",
      "Security",
      "AWS",
      "Auth",
    ],
    href: "https://www.bedrijfsfitnessnederland.nl/",
    status: "2025",
  },
  {
    title: "ZeroBounce Website",
    description:
      "A complete platform migration from Gatsby to Next.js for an award-winning email validation SaaS, rebuilding 1,000+ pages across English and Spanish. Worked closely with the DevOps team to migrate from legacy Jenkins deployments to modern GitHub CI/CD.",
    tags: ["Next.js", "Gatsby", "TypeScript", "React", "CI/CD"],
    href: "https://www.zerobounce.net/",
    status: "2024",
  },
  {
    title: "ZeroBounce Members",
    description:
      "Built features for the admin portal and maintained the Angular members platform alongside the main migration work.",
    tags: ["React", "Angular", "SCSS", "External integrations"],
    href: "https://www.zerobounce.net/members/",
    status: "2023",
  },
  {
    title: "Jellysmack Kamua",
    description:
      "Worked on Kamua - a browser based video editing platform, built with react, enabling content creators to edit video content directly in the browser.",
    tags: ["React", "TypeScript", "GraphQL", "REST", "SCSS", "MUI"],
    href: "https://blog.jellysmack.com/jellysmack-aquires-ai-video-editing-kamua/",
    status: "2022",
  },
  {
    title: "Against Data",
    description:
      "Worked on Against Data, a privacy and inbox management platform allowing users to manage email subscriptions, request GDPR data deletions, and track mailbox analytics.",
    tags: ["React", "Javascript", "Typescript", "REST", "CSS in JS", "MUI"],
    href: "https://againstdata.com/",
    status: "2022",
  },
  {
    title: "Bp Pulse iOS",
    description:
      "Developed features for a React Native mobile application for iOS enabling EV drivers to locate and pay for fast charging stations across UK, Netherlands, and Germany.",
    tags: ["React Native", "React", "Javascript", "REST", "CSS in JS"],
    href: "https://apps.apple.com/gb/app/bp-pulse/id1515768723",
    status: "2021",
  },
  {
    title: "Bp Pulse Android",
    description:
      "Developed features for a React Native mobile application for android enabling EV drivers to locate and pay for fast charging stations across UK, Netherlands, and Germany.",
    tags: ["React Native", "React", "Javascript", "REST", "CSS in JS"],
    href: "https://play.google.com/store/apps/details?id=com.aml.evapp&pcampaignid=web_share",
    status: "2021",
  },
  {
    title: "Oren",
    description:
      "Worked on Oren (Shell × IBM) — an enterprise-scale B2B marketplace for the global mining sector, delivering frontend features in React as part of a large cross-functional team.",
    tags: ["React", "Javascript", "HTML", "CSS", "SCSS", "Hubspot"],
    href: "https://www.shell.co.za/business-customers/industrial-lubricants/mining/oren-shell-ibm-create-innovative-solution-for-mining.html",
    status: "2021",
  },
];

export const personalProjects: ProjectInterface[] = [
  {
    title: "Next.js Wiki",
    description:
      "Working on a full stack, scalable Wiki application using Next.js with Drizzle ORM for database management, shadcn/ui component library, and Tailwind CSS for styling. ",
    extraDescription:
      "Implementing secure authentication, serverless file storage, transactional email system, and automated deployment pipeline using GitHub Actions and Vercel.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Shadcn",
      "Drizzle",
      "Auth",
      "CI/CD",
    ],
    href: "https://github.com/leucioiustefan/",
    status: "In Progress",
  },

  {
    title: "AI Agent",
    description:
      "Developing an autonomous CLI agent using the Anthropic SDK, featuring tool calling, iterative agent loops, and evaluation frameworks.",
    extraDescription:
      "Integrating human approval workflows for critical operations, real-time token tracking, and advanced context window optimization techniques to manage LLM memory constraints.",
    tags: [
      "Typescript",
      "Node.js",
      "Tool calling",
      "Iterative agent loops",
      "Human approval",
      "Token tracking",
    ],
    href: "https://github.com/leucioiustefan/",
    status: "In Progress",
  },
];

export const statusStyles = {
  "2021": "text-amber-400 bg-amber-400/10",
  "2022": "text-orange-400 bg-orange-400/10",
  "2023": "text-violet-400 bg-violet-400/10",
  "2024": "text-blue-400 bg-blue-400/10",
  "2025": "text-special bg-special/10",
  "2026": "text-teal-300 bg-teal-300/10",
  "In Progress": "text-amber-400 bg-amber-400/10",
  Live: "text-blue-400 bg-blue-400/10",
};
