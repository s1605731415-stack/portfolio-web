import type { Language } from "../components/LanguageProvider";
import type { Project } from "./projects";

export const uiCopy = {
  en: {
    brand: "Sun Wang Portfolio",
    nav: {
      Work: "Work",
      Method: "Method",
      "AI Workflow": "AI Workflow",
      System: "System",
      Archive: "Archive",
      About: "About",
      Contact: "Contact",
    },
    heroMeta: "Product-oriented UI/UX Designer - 2026 Edition",
    heroTitle: "SUN WANG PORTFOLIO",
    heroSubtitle:
      "I design clear, usable, and scalable product experiences across health tech, AI tools, web products, and mobile interfaces.",
    heroChinese:
      "Product thinking, UX narrative, AI-assisted workflow, and frontend-ready delivery - organized as a precise portfolio system.",
    scoreLabel: "UX/UI",
    score: "9.0",
    scoreOutOf: "/10",
    creators: ["Product thinking", "AI workflow", "Frontend handoff"],
    selectedWorkTitle: "Selected Work",
    selectedWorkDescription:
      "A curated set of 2026 AI/product projects first, followed by commercial work that proves real delivery experience.",
    caseStudyCta: "View Case Study",
    methodTitle: "How I Build Case Studies",
    methodDescription:
      "Case studies are written to show judgment: what problem matters, why the solution is shaped that way, and how design moves toward implementation.",
    aiWorkflowTitle: "AI-assisted UX Workflow",
    aiWorkflowDescription:
      "AI is part of the workflow, not the headline. It makes research, prompting, prototyping, testing, and handoff more explicit and reviewable.",
    builderTitle: "From UI Designer to Product Builder",
    builderDescription:
      "I use frontend awareness to make design decisions clearer, more realistic, and easier to deliver.",
    systemTitle: "Design System & Frontend Handoff",
    systemDescription:
      "System thinking connects visual consistency, interaction states, responsive behavior, and build-ready documentation.",
    archiveTitle: "Past Commercial Work",
    archiveDescription:
      "2025 work is treated as commercial proof, supporting credibility across real business contexts and multi-scenario design.",
    aboutTitle: "About Me",
    aboutDescription:
      "I focus on turning complex ideas into clear product experiences across health tech, AI tools, web products, and mobile interfaces.",
    aboutBody:
      "My work sits between UX strategy, interface systems, AI-assisted design workflows, and frontend-ready delivery. I care about why a product should be structured a certain way, how users move through it, and how design decisions can be communicated clearly enough to build.",
    contactTitle: "Contact",
    contactDescription: "For product design, UX strategy, AI workflow, or frontend-ready portfolio conversations.",
    emailMe: "Email Me",
    reviewWork: "Review Work",
    dock: {
      creator: "Creator",
      type: "Type & Color",
      details: "Details",
      score: "Score",
      visit: "View Work",
    },
    back: "Back to selected work",
    toc: "Case study sections",
    activeStage: "Active stage",
  },
  zh: {
    brand: "Sun Wang 作品集",
    nav: {
      Work: "作品",
      Method: "方法",
      "AI Workflow": "AI 工作流",
      System: "系统",
      Archive: "归档",
      About: "关于",
      Contact: "联系",
    },
    heroMeta: "产品型 UI/UX 设计师 - 2026 版",
    heroTitle: "SUN WANG 作品集",
    heroSubtitle:
      "我设计清晰、可用、可扩展的产品体验，覆盖智能健康、AI 工具、Web 产品和移动端界面。",
    heroChinese:
      "用产品思维、UX 叙事、AI 辅助工作流和前端落地意识，把复杂功能整理成可理解、可交付的体验系统。",
    scoreLabel: "UX/UI",
    score: "9.0",
    scoreOutOf: "/10",
    creators: ["产品判断", "AI 工作流", "前端交付"],
    selectedWorkTitle: "精选项目",
    selectedWorkDescription:
      "优先展示 2026 年 AI 与产品主线项目，再用商业项目归档证明真实交付经验。",
    caseStudyCta: "查看案例",
    methodTitle: "案例叙事方法",
    methodDescription:
      "案例不是堆图，而是解释判断：为什么这个问题重要，方案为什么这样组织，以及设计如何走向落地。",
    aiWorkflowTitle: "AI 辅助 UX 工作流",
    aiWorkflowDescription:
      "AI 是工作流的一部分，不是噱头。它让研究、提示词、原型、验证和交付更清楚、更可复盘。",
    builderTitle: "从 UI 设计师到产品构建者",
    builderDescription:
      "我用前端意识让设计决策更清楚、更现实，也更容易被开发实现。",
    systemTitle: "设计系统与前端交付",
    systemDescription:
      "系统思维连接视觉一致性、交互状态、响应式规则和可构建的交付文档。",
    archiveTitle: "商业项目归档",
    archiveDescription:
      "2025 项目作为商业经验补充，证明我在真实业务、多场景设计中的交付能力。",
    aboutTitle: "关于我",
    aboutDescription:
      "我专注于把复杂想法整理成清晰的产品体验，方向包括智能健康、AI 工具、Web 产品和移动端体验。",
    aboutBody:
      "我的工作位于 UX 策略、界面系统、AI 辅助设计工作流和前端交付之间。我关注产品为什么要这样组织，用户如何完成任务，以及设计决策如何被清楚地传达并落地。",
    contactTitle: "联系",
    contactDescription: "欢迎交流产品设计、UX 策略、AI 工作流或作品集合作。",
    emailMe: "发邮件",
    reviewWork: "查看作品",
    dock: {
      creator: "创作者",
      type: "字体与色彩",
      details: "细节",
      score: "评分",
      visit: "查看作品",
    },
    back: "返回精选项目",
    toc: "案例目录",
    activeStage: "当前阶段",
  },
} as const;

type ProjectTranslation = {
  title: string;
  type: string;
  summary: string;
  imageLabel: string;
  tags: string[];
  caseStudy: Record<Project["caseStudy"][number]["title"], string>;
};

const zhProjectCopy: Record<string, ProjectTranslation> = {
  "awak-health-app": {
    title: "AWAK 智能健康 App",
    type: "智能健康 / 移动端 UX",
    summary: "一个移动健康产品概念，将复杂健康数据、日常习惯和 AI 辅助建议整理成更清晰的用户体验。",
    imageLabel: "移动健康 App 预览",
    tags: ["智能健康", "移动端 UX", "AI 建议", "设计系统"],
    caseStudy: {
      Overview: "AWAK 被定位为一个健康陪伴产品，帮助用户理解身体信号、日常习惯和下一步行动。",
      Problem: "核心挑战是让健康信息变得可行动，而不是只展示没有上下文的数据看板。",
      Role: "我负责信息架构、移动端流程、界面层级和 AI 辅助健康体验的视觉系统方向。",
      Process: "流程从场景梳理开始，再进入任务路径、屏幕分组和健康洞察组件模型。",
      "Design Decisions": "关键决策包括渐进披露、克制的状态语言、轻量卡片和适合日常使用的视觉节奏。",
      Outcome: "结果是一个清晰的健康 App 产品叙事，连接用户需求、AI 辅助和可构建的界面模式。",
    },
  },
  "awak-website": {
    title: "AWAK 官方网站",
    type: "品牌官网 / 产品叙事",
    summary: "AWAK 官网方向，通过结构化叙事和可信的视觉模块解释智能健康产品价值。",
    imageLabel: "健康官网 Hero 与模块预览",
    tags: ["官网", "健康品牌", "产品叙事", "响应式"],
    caseStudy: {
      Overview: "这个官网用于介绍 AWAK 的智能健康产品价值，并把复杂概念转化成访客容易理解的页面结构。",
      Problem: "主要问题是在信任感、解释力和产品清晰度之间取得平衡，而不是依赖普通健康科技视觉。",
      Role: "我定义页面层级、信息模块、内容节奏、响应式结构和后续可替换的视觉占位。",
      Process: "流程连接定位、受众问题、页面分区和复用模块，再进入视觉精修。",
      "Design Decisions": "设计使用克制字体、冷静色彩、产品 UI 预览和有序分区来提升理解效率。",
      Outcome: "结果是一个可扩展的网站框架，后续可以接入真实产品图片、声明和转化内容。",
    },
  },
  "ai-prompt-video-site": {
    title: "AI 提示词与视频生成网站",
    type: "AI 工具 / Web 产品",
    summary: "面向提示词探索和 AI 视频生成的网站概念，围绕创建步骤、提示词质量和结果审阅组织体验。",
    imageLabel: "AI 提示词工作台预览",
    tags: ["AI 工具", "Web 产品", "提示词 UX", "创作流程"],
    caseStudy: {
      Overview: "这个概念把提示词编写、生成设置和视频审阅组织成一个实用的创作工作台。",
      Problem: "AI 工具常常暴露强大控制项，却没有帮助用户理解顺序、意图和结果质量。",
      Role: "我聚焦 UX 结构、提示词流程、控制分组、结果状态和前端友好的屏幕模型。",
      Process: "流程比较创作者场景、提示词编辑循环、生成状态和内容审阅路径。",
      "Design Decisions": "界面优先保证步骤清晰、提示词块可编辑、设置紧凑、结果反馈可见。",
      Outcome: "结果是一个更易理解的 AI 创作流程，降低从想法到提示词再到生成结果的摩擦。",
    },
  },
  "ai-ux-workflow": {
    title: "AI 辅助 UX 工作流",
    type: "设计流程 / AI 工作流",
    summary: "一个记录 AI 如何支持研究整理、提示词迭代、原型、测试和前端交付的工作流项目。",
    imageLabel: "AI 工作流步骤预览",
    tags: ["AI 工作流", "UX 策略", "原型", "交付"],
    caseStudy: {
      Overview: "这个项目解释 AI 如何进入实际 UX 工作流，而不是把 AI 当成视觉趋势。",
      Problem: "问题在于让 AI 的贡献具体化：它帮助什么、哪里需要判断、输出如何变成设计决策。",
      Role: "我梳理工作流、撰写提示词模式、定义检查点，并把 AI 输出连接到产品设计产物。",
      Process: "流程依次经过研究、提示词、原型、验证和交付，每一步都有明确复盘点。",
      "Design Decisions": "核心决策是把 AI 呈现为澄清和迭代助手，而不是替代设计判断的自动机器。",
      Outcome: "结果是一个能体现设计成熟度、AI 素养和产品落地意识的作品集模块。",
    },
  },
  "xingshu-ai-platform": {
    title: "Xingshu AI 平台",
    type: "AI 平台 / 商业项目",
    summary: "商业 AI 平台体验，将复杂产品能力整理成更清晰的导航、任务路径和可用界面模块。",
    imageLabel: "AI 平台看板预览",
    tags: ["AI 平台", "B 端 UX", "导航", "商业项目"],
    caseStudy: {
      Overview: "Xingshu AI Platform 展示了 AI 能力发现、工作流导航和界面系统中的商业产品经验。",
      Problem: "平台需要展示复杂能力，同时避免让首次使用者迷失或过载。",
      Role: "我参与 UX 结构、视觉界面方向、模块层级和平台使用中的实用设计模式。",
      Process: "流程包括重组能力、明确入口点，以及为重复任务塑造可复用 UI 模块。",
      "Design Decisions": "设计选择强调扫描效率、状态清晰、组件一致性和更少的装饰性复杂度。",
      Outcome: "结果证明我具备真实 AI 产品约束、多模块界面和商业交付场景经验。",
    },
  },
  "ant-health-commercial": {
    title: "Ant Health 商业项目",
    type: "健康 / 商业 UX",
    summary: "健康相关商业项目归档，展示服务场景、业务要求和移动/Web 触点中的实际设计经验。",
    imageLabel: "商业健康体验预览",
    tags: ["健康", "商业 UX", "服务流程", "移动 Web"],
    caseStudy: {
      Overview: "这个归档案例展示了商业环境中的健康与服务设计经验。",
      Problem: "挑战是在真实产品界面中平衡用户清晰度、业务需求和实现约束。",
      Role: "我的角色集中在界面结构、交互细节、服务流程清晰度和视觉一致性。",
      Process: "流程从理解需求，到优化流程、屏幕设计、评审和交付准备。",
      "Design Decisions": "决策重点是降低歧义、明确行动入口，并让健康服务信息更容易接近。",
      Outcome: "结果为作品集提供可信度，证明我不只做个人项目，也有真实商业设计经验。",
    },
  },
};

export function getProjectCopy(project: Project, language: Language) {
  if (language === "en") {
    return {
      title: project.title,
      type: project.type,
      summary: project.summary,
      imageLabel: project.imageLabel,
      tags: project.tags,
      caseStudy: project.caseStudy,
    };
  }

  const zh = zhProjectCopy[project.slug];
  return {
    title: zh.title,
    type: zh.type,
    summary: zh.summary,
    imageLabel: zh.imageLabel,
    tags: zh.tags,
    caseStudy: project.caseStudy.map((section) => ({
      title: section.title,
      body: zh.caseStudy[section.title],
    })),
  };
}
