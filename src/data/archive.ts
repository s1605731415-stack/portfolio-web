export type ArchiveItem = {
  title: string;
  year: "2025";
  category: string;
  description: string;
  tags: string[];
};

export const archiveItems: ArchiveItem[] = [
  {
    title: "Commercial Mobile App Redesign",
    year: "2025",
    category: "Mobile App / Service Design",
    description:
      "A commercial app redesign focused on clearer user paths, stronger homepage hierarchy, and more reliable conversion moments.",
    tags: ["Mobile UX", "Conversion", "UI Refresh"],
  },
  {
    title: "B2B Dashboard Experience",
    year: "2025",
    category: "Dashboard / Operations",
    description:
      "A data-heavy dashboard project that organized operational states, comparison views, and repeated workflows for business users.",
    tags: ["Dashboard", "Information Architecture", "B2B"],
  },
  {
    title: "Brand Website System",
    year: "2025",
    category: "Website / Brand",
    description:
      "A web presence for a commercial brand, balancing visual storytelling with practical content modules and reusable sections.",
    tags: ["Website", "Brand System", "Responsive"],
  },
  {
    title: "Campaign Landing Pages",
    year: "2025",
    category: "Marketing / Web",
    description:
      "A set of landing page templates designed for campaign iteration, content testing, and consistent visual presentation.",
    tags: ["Landing Page", "Template System", "Visual Design"],
  },
];
