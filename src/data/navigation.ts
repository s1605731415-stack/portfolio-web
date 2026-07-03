export type NavigationItem = {
  label: "Work" | "Method" | "AI Workflow" | "System" | "Archive" | "About" | "Contact";
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { label: "Work", href: "#work" },
  { label: "Method", href: "#method" },
  { label: "AI Workflow", href: "#ai-workflow" },
  { label: "System", href: "#system" },
  { label: "Archive", href: "#archive" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
