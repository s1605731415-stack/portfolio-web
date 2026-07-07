export type CaseStudySection = {
  title: "Overview" | "Problem" | "Role" | "Process" | "Design Decisions" | "Outcome";
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  year: "2026" | "2025";
  type: string;
  summary: string;
  tags: string[];
  imageLabel: string;
  accent: "blue" | "green" | "graphite" | "violet";
  media: {
    hero: string;
    thumb: string;
    alt: string;
    beforeAfter?: {
      before: string;
      after: string;
      beforeAlt: string;
      afterAlt: string;
    };
  };
  caseStudy: CaseStudySection[];
};

const caseStudy = (
  overview: string,
  problem: string,
  role: string,
  process: string,
  decisions: string,
  outcome: string,
): CaseStudySection[] => [
  { title: "Overview", body: overview },
  { title: "Problem", body: problem },
  { title: "Role", body: role },
  { title: "Process", body: process },
  { title: "Design Decisions", body: decisions },
  { title: "Outcome", body: outcome },
];

export const workflowSteps = [
  {
    title: "Research",
    description: "Frame the product question, map users and scenarios, and turn scattered material into useful design inputs.",
    prompt: "Summarize user goals, constraints, and risk points from interview notes.",
    output: "Research themes, opportunity areas, and first product assumptions.",
  },
  {
    title: "Information Architecture",
    description: "Organize tasks, content groups, navigation, and decision paths before drawing screens.",
    prompt: "Compare three IA models for a health insight app and identify trade-offs.",
    output: "Sitemap, entry points, primary task paths, and naming principles.",
  },
  {
    title: "Wireframe",
    description: "Translate information hierarchy into low-fidelity flows that can be reviewed quickly.",
    prompt: "Draft screen-level wireframe requirements for onboarding, dashboard, and insight review.",
    output: "Flow skeletons, layout priorities, and interaction checkpoints.",
  },
  {
    title: "UI Exploration",
    description: "Explore visual systems, component behavior, spacing, and responsive rules with restraint.",
    prompt: "Generate three visual directions using calm health data, editorial AI tool, and graphite system moods.",
    output: "Visual direction, type scale, components, and image treatment rules.",
  },
  {
    title: "Prototype",
    description: "Test motion, states, task completion, and content clarity before committing to build details.",
    prompt: "Create usability questions for checking whether the dashboard feels actionable.",
    output: "Clickable prototype, state notes, and UX issues to resolve.",
  },
  {
    title: "Frontend Handoff",
    description: "Document states, tokens, edge cases, and interaction rules so the product can be built consistently.",
    prompt: "Convert design decisions into component props, states, and responsive acceptance criteria.",
    output: "Build-ready handoff notes, token map, and interaction rules.",
  },
];

export const projects: Project[] = [
  {
    slug: "awak-health-app",
    title: "AWAK Intelligent Health App",
    year: "2026",
    type: "Health Tech / Mobile UX",
    summary:
      "A mobile health product concept that turns complex health data, daily habits, and AI-supported guidance into a clearer patient-facing experience.",
    tags: ["Health Tech", "Mobile UX", "AI Guidance", "Design System"],
    imageLabel: "Mobile health app preview",
    accent: "green",
    media: {
      hero: "/images/projects/awak-health.png",
      thumb: "/images/projects/awak-health.png",
      alt: "AWAK 智能健康 App 的移动端健康数据界面和生命体征可视化",
    },
    caseStudy: caseStudy(
      "AWAK is positioned as a health companion that helps users understand signals, routines, and next steps without overwhelming them.",
      "The challenge was to make health information feel actionable while avoiding a dashboard that only exposes data without context.",
      "I shaped the information architecture, mobile flows, interface hierarchy, and placeholder visual system for an AI-assisted health experience.",
      "The process started with scenario mapping, then moved into task flows, screen grouping, and a component model for repeated health insights.",
      "Key decisions centered on progressive disclosure, calm status language, lightweight cards, and a visual rhythm that supports daily use.",
      "The result is a clear product narrative for a health app that connects user needs, AI assistance, and buildable interface patterns.",
    ),
  },
  {
    slug: "awak-website",
    title: "AWAK Official Website",
    year: "2026",
    type: "Brand Website / Product Story",
    summary:
      "A product website direction for AWAK that explains the value of intelligent health support through structured storytelling and credible visual modules.",
    tags: ["Website", "Health Brand", "Product Narrative", "Responsive"],
    imageLabel: "Health website hero and modules",
    accent: "blue",
    media: {
      hero: "/images/projects/awak-health.png",
      thumb: "/images/projects/awak-health.png",
      alt: "AWAK 健康产品网站的产品叙事视觉和健康界面模块",
    },
    caseStudy: caseStudy(
      "The website introduces AWAK as a credible intelligent health product and translates product complexity into visitor-friendly sections.",
      "The main problem was balancing trust, explanation, and product clarity without relying on generic health-tech visuals.",
      "I defined page hierarchy, messaging modules, content rhythm, responsive structure, and visual placeholders for later assets.",
      "The process connected positioning, audience questions, page sections, and reusable modules before visual polishing.",
      "The design uses restrained typography, calm color, product UI previews, and section sequencing to support comprehension.",
      "The result is a scalable website framework that can later accept real product images, claims, and conversion content.",
    ),
  },
  {
    slug: "ai-prompt-video-site",
    title: "AI Prompt & Video Generation Site",
    year: "2026",
    type: "AI Tool / Web Product",
    summary:
      "A web product concept for prompt exploration and AI video generation, designed around clear creation steps, prompt quality, and output review.",
    tags: ["AI Tool", "Web Product", "Prompt UX", "Creation Flow"],
    imageLabel: "AI prompt workspace preview",
    accent: "violet",
    media: {
      hero: "/images/projects/ai-workflow.png",
      thumb: "/images/projects/ai-workflow.png",
      alt: "AI 提示词与视频生成工具的创作工作台和浮动界面",
    },
    caseStudy: caseStudy(
      "This concept organizes prompt writing, generation settings, and video review into a practical creation workspace.",
      "AI tools often expose powerful controls without helping users understand sequence, intent, or result quality.",
      "I focused on UX structure, prompt workflows, control grouping, result states, and a front-end-friendly screen model.",
      "The process compared creator scenarios, prompt editing loops, generation states, and content review paths.",
      "The interface prioritizes step clarity, editable prompt blocks, compact settings, and visible output feedback.",
      "The result is a more understandable AI creation flow that reduces friction between idea, prompt, and generated output.",
    ),
  },
  {
    slug: "ai-ux-workflow",
    title: "AI-assisted UX Workflow",
    year: "2026",
    type: "Design Process / AI Workflow",
    summary:
      "A documented workflow showing how AI can support research synthesis, prompt iteration, prototyping, testing, and frontend handoff.",
    tags: ["AI Workflow", "UX Strategy", "Prototyping", "Handoff"],
    imageLabel: "AI workflow stepper preview",
    accent: "graphite",
    media: {
      hero: "/images/projects/ai-workflow.png",
      thumb: "/images/projects/ai-workflow.png",
      alt: "AI 辅助 UX 工作流的研究、提示词和原型设计场景",
    },
    caseStudy: caseStudy(
      "This project explains how AI fits into a practical UX workflow rather than treating AI as a visual trend.",
      "The problem was making AI contribution concrete: what it helps with, where judgment matters, and how outputs become design decisions.",
      "I mapped the workflow, wrote prompt patterns, defined checkpoints, and connected AI outputs to product design artifacts.",
      "The process follows research, prompting, prototyping, testing, and handoff as repeatable stages with clear review points.",
      "The main decision was to present AI as an assistant for clarity and iteration, not as an automatic replacement for design thinking.",
      "The result is a portfolio module that communicates design maturity, AI literacy, and practical product-building awareness.",
    ),
  },
  {
    slug: "xingshu-ai-platform",
    title: "Xingshu AI Platform",
    year: "2025",
    type: "AI Platform / Commercial Project",
    summary:
      "A commercial AI platform experience that organized complex product capabilities into clearer navigation, task flows, and usable interface modules.",
    tags: ["AI Platform", "B2B UX", "Navigation", "Commercial"],
    imageLabel: "AI platform dashboard preview",
    accent: "blue",
    media: {
      hero: "/images/projects/design-system.png",
      thumb: "/images/projects/design-system.png",
      alt: "AI 平台与设计系统交付的深色组件界面和代码示例",
    },
    caseStudy: caseStudy(
      "Xingshu AI Platform represents commercial product experience across AI capability discovery, workflow navigation, and interface systems.",
      "The platform needed to expose complex capabilities without making first-time users feel lost or overloaded.",
      "I contributed UX structure, visual interface direction, module hierarchy, and practical design patterns for platform use.",
      "The process involved reorganizing capabilities, clarifying entry points, and shaping reusable UI modules for repeated tasks.",
      "Design choices emphasized scanning, state clarity, consistent components, and less decorative complexity.",
      "The outcome demonstrates experience with real AI product constraints, multi-module interfaces, and commercial delivery contexts.",
    ),
  },
  {
    slug: "ant-health-commercial",
    title: "Ant Health Commercial Work",
    year: "2025",
    type: "Health / Commercial UX",
    summary:
      "A commercial health-related project archive entry showing practical design experience across service scenarios, business requirements, and mobile/web touchpoints.",
    tags: ["Health", "Commercial UX", "Service Flow", "Mobile Web"],
    imageLabel: "Commercial health experience preview",
    accent: "green",
    media: {
      hero: "/images/projects/commercial-archive.png",
      thumb: "/images/projects/commercial-archive.png",
      alt: "商业项目归档的移动界面、服务蓝图和品牌触点组合",
    },
    caseStudy: caseStudy(
      "This archive case shows applied health and service design experience in a commercial environment.",
      "The challenge was balancing user clarity, business requirements, and implementation constraints across real product surfaces.",
      "My role centered on interface structure, interaction details, service flow clarity, and visual consistency.",
      "The process moved from requirement understanding to flow refinement, screen design, review, and delivery preparation.",
      "Decisions focused on reducing ambiguity, clarifying calls to action, and keeping health-service information approachable.",
      "The outcome supports the portfolio's credibility by showing real-world commercial design experience beyond self-initiated projects.",
    ),
  },
];
