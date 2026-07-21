const zhContent = {
  about: {
    stage: "STAGE 01",
    title: "ABOUT ME",
    paragraphs: [
      "你好，我是 Lily。",
      "一名拥有金融、审计与海外互联网产品经验的 AI 应用探索者。",
      "我的经历横跨企业业务与互联网产品。我喜欢发现真实工作流程中的低效环节，并将业务问题转化为可落地的 AI 解决方案。",
      "从用户需求分析到产品原型设计，我持续探索 AI 如何连接技术与实际业务，让想法从概念走向真正有价值的产品。",
    ],
    tags: ["AI 应用探索", "审计与金融", "海外互联网产品"],
    photoLabel: "PHOTO",
  },
  projects: {
    stage: "STAGE 02",
    title: "独立策划与开发的 vibe coding 作品",
    detailLabel: "项目详细介绍",
    cardHint: "点击查看详情",
    itemAriaLabelPrefix: "查看",
    itemAriaLabelSuffix: "详情",
    techStackLabel: "Tech Stack",
    items: [
      {
        id: "auditmind",
        number: "01",
        title: "AuditMind",
        subtitle: "AI 审计助手",
        cardImage: "/assets/portfolio/page2_project/project_card_yellow.png",
        keywords: ["审计研究", "RAG", "工作流辅助"],
        summary: "面向审计人员的 AI 辅助审计工作流平台。",
        detail:
          "项目背景：基于真实审计实务场景，针对新人上手难、底稿编制重复、业务经验依赖人工带教等问题，独立完成需求分析、产品设计与 MVP 搭建，探索将审计规则、知识资料和底稿模板转化为可执行的 AI 辅助工作流。\n\n产品设计与开发：规划工作台总览、项目管理、RAG 知识库、审计工作台、抽凭中心、模板管理、函证中心和合规配置等 8 个模块，并完成货币资金审计核心流程。前端使用 HTML、CSS 和 JavaScript 实现复杂表单交互与状态记忆；后端使用 Node.js 搭建本地服务，接入 DeepSeek API，实现本地知识检索、Excel 资料解析、规则辅助检查和底稿副本导出。\n\nAI 与风控设计：搭建轻量级本地 RAG 知识库，系统先检索审计准则、底稿规则和业务资料，再由大模型基于命中依据整理回答。资料不足时明确提示缺口，所有 AI 输出保留引用来源与人工复核环节，公开展示版不暴露 API Key，也不处理真实审计资料。\n\n项目成果：完成 AuditMind MVP 原型，跑通“资料上传 → 本地解析与规则检查 → 辅助抽凭 → 底稿初稿生成 → 人工复核 → Excel 副本导出”的端到端流程，验证 AI 与审计工作流结合的产品方案。",
        tags: ["HTML", "CSS", "JavaScript", "Node.js", "DeepSeek API", "Local RAG", "Excel Parsing", "Prompt Engineering"],
      },
      {
        id: "youtube-analysis",
        number: "02",
        title: "YouTube\n竞品分析工具",
        subtitle: "海外内容研究工具",
        cardImage: "/assets/portfolio/page2_project/project_card_red.png",
        keywords: ["Data API", "数据分析", "竞品洞察"],
        summary: "面向海外内容竞品研究场景，基于 Python、Streamlit 和 Pandas 开发，并接入 YouTube Data API 与字幕接口。",
        detail:
          "支持单视频和频道视频列表两种分析方式，可自动获取并整理视频标题、描述、标签、发布时间、播放量、点赞量、时长、封面及字幕等信息；提供日期、视频类型和播放量级别筛选，以及播放趋势展示、视频详情浏览和 Excel 导出。\n\n该工具减少了人工收集和整理竞品内容的重复工作，辅助内容团队进行视频表现对比、选题研究和素材线索整理。",
        tags: ["Python", "Streamlit", "Pandas", "YouTube Data API", "YouTube Transcript API"],
      },
      {
        id: "reddit-insight",
        number: "03",
        title: "Reddit\n用户洞察工具",
        subtitle: "海外用户研究工具",
        cardImage: "/assets/portfolio/page2_project/project_card_purple.png",
        keywords: ["Playwright", "数据采集", "用户痛点分析"],
        summary: "面向海外市场用户研究场景，基于 Python 和 Playwright 开发 Reddit 公开内容采集工具。",
        detail:
          "工具采用浏览器自动化方式访问公开社区页面，无需依赖 Reddit API；支持输入 Subreddit 或 Reddit 链接，按照 New、Hot、Top、Rising 排序，设置时间范围和采集数量，自动完成页面翻页、帖子去重和数据整理。\n\n可采集帖子标题、正文摘要、分数、发布时间、链接及来源域名，并以卡片、表格和 CSV 形式展示或导出，为产品调研、用户需求研究和市场洞察提供原始素材。",
        tags: ["Python", "Playwright", "Streamlit", "Web Scraping", "User Research"],
      },
      {
        id: "wangcai-todo",
        number: "04",
        title: "旺财 Todo",
        subtitle: "个人任务管理工具",
        cardImage: "/assets/portfolio/page2_project/project_card_green.png",
        keywords: ["任务管理", "交互设计", "本地存储"],
        summary: "一款以宠物陪伴和正向反馈为特色的轻量任务管理 Web App。",
        detail:
          "支持任务新增、编辑、完成、删除、撤销、重要标记、分类筛选与拖拽排序。将完成任务设计为“旺财吃掉任务”的互动过程，并通过进度、鼓励文案和庆祝动效，降低传统待办工具带来的压力感。\n\n采用浏览器本地存储保存任务，无需注册登录，刷新页面后数据仍然保留。",
        tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "LocalStorage"],
      },
      {
        id: "miaow-note",
        number: "05",
        title: "喵呜笔记",
        subtitle: "个人灵感记录工具",
        cardImage: "/assets/portfolio/page2_project/project_card_pink.png",
        keywords: ["笔记系统", "时间线", "瀑布流"],
        summary: "一款面向日常想法和内容灵感的本地优先笔记 Web App。",
        detail:
          "支持笔记创建、编辑、删除、分类、标签提取、关键词搜索、收藏置顶和状态管理，并可将笔记导出为 Markdown 文件。通过猫咪主题、卡片式布局和灵感追问，降低记录成本，帮助用户重新发现零散想法。\n\n采用浏览器本地存储保存笔记，无需账号和后端服务，适合快速、私密地记录个人灵感。",
        tags: ["React", "Vite", "Tailwind CSS", "LocalStorage", "Browser APIs"],
      },
    ],
  },
  journey: {
    routeAriaLabel: "人生旅程路线",
    stops: [
      {
        id: "yanbian-bachelor",
        className: "journey-stop-1",
        side: "right",
        pin: "/assets/portfolio/page3_journey/journey_pin_red.png",
        icon: "/assets/portfolio/page3_journey/journey_icon_bachelor.png",
        time: "2013.09 - 2017.07",
        lines: ["延边大学（211）", "经济学（学士）"],
      },
      {
        id: "anu-master",
        className: "journey-stop-2",
        side: "left",
        pin: "/assets/portfolio/page3_journey/journey_pin_yello.png",
        icon: "/assets/portfolio/page3_journey/journey_icon_master.png",
        time: "2018.02 - 2019.07",
        lines: ["澳大利亚国立大学", "应用金融（硕士）"],
      },
      {
        id: "handy-operation",
        className: "journey-stop-3",
        side: "right",
        pin: "/assets/portfolio/page3_journey/journey_pin_green.png",
        icon: "/assets/portfolio/page3_journey/journey_operation.png",
        time: "2020.06 - 2022.11",
        lines: ["北京汉迪移动互联网科技股份有限公司", "海外产品运营 & 渠道运营", "英文为工作语言"],
      },
      {
        id: "ruitai-auditor",
        className: "journey-stop-4",
        side: "left",
        pin: "/assets/portfolio/page3_journey/journey_pin_purple.png",
        icon: "/assets/portfolio/page3_journey/journey_icon_auditor.png",
        time: "2023.12 - 至今",
        lines: ["廊坊瑞泰会计师事务所有限公司", "审计专员"],
      },
    ],
  },
  skills: {
    stage: "STAGE 04",
    title: "我的技能箱",
    subtitle: "技能和兴趣",
    groups: [
      {
        title: "AI 应用与自动化",
        items: ["LLM 应用实践", "Prompt 设计", "RAG 知识库搭建", "AI 工作流设计", "API 调用与应用实践", "AI coding（Codex/Cursor）"],
      },
      {
        title: "产品与业务能力",
        items: ["AI 产品方案设计", "工作流方案设计", "海外产品增长运营", "竞品分析", "用户需求洞察"],
      },
      {
        title: "专业技能",
        items: ["IELTS 6.5", "CET-6", "CPA（战略）", "证券从业资格证"],
      },
      {
        title: "兴趣爱好",
        items: ["吉他", "钢琴", "唱歌/主唱", "汉服", "手工", "新事物探索", "持续学习"],
      },
    ],
  },
  contact: {
    stage: "FINAL STAGE",
    title: "CONTACT ME",
    email: "15643516005@163.com",
    resumeLabel: "简历下载：",
    resumeDownloads: [
      { label: "中文简历", href: "/assets/resume/CV-CN.pdf", filename: "Lily-CV-CN.pdf" },
      { label: "英文简历", href: "/assets/resume/CV-EN.pdf", filename: "Lily-CV-EN.pdf" },
    ],
    portfolioLabel: "AI作品网站：",
    portfolioUrl: "https://lilys-insight.streamlit.app/",
    closing: "Let's build the future, together.",
  },
};

const enContent = {
  about: {
    stage: "STAGE 01",
    title: "ABOUT ME",
    paragraphs: [
      "Hi, I'm Lily.",
      "An AI application explorer with experience in finance, auditing, and overseas internet products.",
      "My background spans enterprise operations and internet product work. I enjoy finding inefficient steps in real workflows and turning business problems into practical AI solutions.",
      "From user research to product prototyping, I keep exploring how AI can connect technology with real business needs and turn ideas into useful products.",
    ],
    tags: ["AI Applications", "Audit & Finance", "Global Internet Products"],
    photoLabel: "PHOTO",
  },
  projects: {
    stage: "STAGE 02",
    title: "Vibe Coding Projects I Planned and Built",
    detailLabel: "Project Details",
    cardHint: "Click for details",
    itemAriaLabelPrefix: "View",
    itemAriaLabelSuffix: "details",
    techStackLabel: "Tech Stack",
    items: [
      {
        id: "auditmind",
        number: "01",
        title: "AuditMind",
        subtitle: "AI Audit Assistant",
        cardImage: "/assets/portfolio/page2_project/project_card_yellow.png",
        keywords: ["Audit Research", "RAG", "Workflow Support"],
        summary: "An AI-assisted audit workflow platform for audit professionals.",
        detail:
          "Project background: Based on real audit practice, AuditMind addresses the steep learning curve for junior auditors, repetitive working paper preparation, and dependence on manual coaching. I independently completed the requirements analysis, product design, and MVP development, exploring how audit rules, reference materials, and working paper templates can become executable AI-assisted workflows.\n\nProduct design and development: I planned eight modules covering the dashboard, project management, RAG knowledge base, audit workspace, sampling center, template management, confirmation center, and compliance settings, and completed the core cash and bank audit workflow. The frontend uses HTML, CSS, and JavaScript for complex forms and state persistence. The Node.js local service integrates the DeepSeek API for local knowledge retrieval, Excel parsing, rule-assisted checks, and working paper copy export.\n\nAI and risk-control design: I built a lightweight local RAG knowledge base. The system retrieves audit standards, working paper rules, and business materials before the model organizes an answer from the matched evidence. It identifies information gaps when materials are insufficient, preserves citations and human review for every AI output, and keeps API keys and real audit data out of the public demo.\n\nOutcome: I completed the AuditMind MVP and validated an end-to-end workflow covering document upload, local parsing and rule checks, assisted sampling, working paper draft generation, human review, and Excel copy export.",
        tags: ["HTML", "CSS", "JavaScript", "Node.js", "DeepSeek API", "Local RAG", "Excel Parsing", "Prompt Engineering"],
      },
      {
        id: "youtube-analysis",
        number: "02",
        title: "YouTube\nCompetitor Analyzer",
        subtitle: "Global Content Research Tool",
        cardImage: "/assets/portfolio/page2_project/project_card_red.png",
        keywords: ["Data API", "Analytics", "Competitor Insight"],
        summary: "Built for global competitor content research with Python, Streamlit, and Pandas, integrating the YouTube Data API and transcript interface.",
        detail:
          "It supports both individual-video analysis and channel video lists, automatically collecting and organizing titles, descriptions, tags, publish dates, views, likes, duration, thumbnails, and transcripts. It also provides filters for date, video type, and view range, plus trend visualization, video detail browsing, and Excel export.\n\nThe tool reduces repetitive competitor-data collection and helps content teams compare video performance, research topics, and organize creative leads.",
        tags: ["Python", "Streamlit", "Pandas", "YouTube Data API", "YouTube Transcript API"],
      },
      {
        id: "reddit-insight",
        number: "03",
        title: "Reddit\nUser Insight Tool",
        subtitle: "Global User Research Tool",
        cardImage: "/assets/portfolio/page2_project/project_card_purple.png",
        keywords: ["Playwright", "Data Collection", "Pain Point Analysis"],
        summary: "A Reddit public-content collection tool built with Python and Playwright for global user research.",
        detail:
          "It uses browser automation to access public community pages without relying on the Reddit API. Users can enter a Subreddit or Reddit URL, choose New, Hot, Top, or Rising, set a time range and collection size, and automatically handle pagination, deduplication, and data organization.\n\nThe tool collects post titles, text summaries, scores, publish times, links, and source domains, then presents or exports them as cards, tables, and CSV files for product research, user-needs discovery, and market insight.",
        tags: ["Python", "Playwright", "Streamlit", "Web Scraping", "User Research"],
      },
      {
        id: "wangcai-todo",
        number: "04",
        title: "Wangcai Todo",
        subtitle: "Personal Task Manager",
        cardImage: "/assets/portfolio/page2_project/project_card_green.png",
        keywords: ["Task Management", "Interaction Design", "Local Storage"],
        summary: "A lightweight task-management web app centered on pet companionship and positive feedback.",
        detail:
          "It supports task creation, editing, completion, deletion, undo, priority marking, category filtering, and drag-and-drop sorting. Completing a task becomes an interaction where Wangcai “eats” it, while progress indicators, encouraging messages, and celebration effects reduce the pressure associated with traditional todo tools.\n\nTasks are stored locally in the browser, so no registration is required and data remains available after refresh.",
        tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "LocalStorage"],
      },
      {
        id: "miaow-note",
        number: "05",
        title: "Miaow Notes",
        subtitle: "Personal Idea Notebook",
        cardImage: "/assets/portfolio/page2_project/project_card_pink.png",
        keywords: ["Note System", "Timeline", "Masonry Layout"],
        summary: "A local-first note-taking web app for everyday thoughts and content inspiration.",
        detail:
          "It supports note creation, editing, deletion, categories, tag extraction, keyword search, favorites, pinning, status management, and Markdown export. Its cat theme, card-based layout, and reflective prompts reduce the effort of recording ideas and help users rediscover fragmented thoughts.\n\nNotes are stored locally in the browser with no account or backend required, making the app suitable for fast and private idea capture.",
        tags: ["React", "Vite", "Tailwind CSS", "LocalStorage", "Browser APIs"],
      },
    ],
  },
  journey: {
    routeAriaLabel: "Career and education journey route",
    stops: [
      {
        id: "yanbian-bachelor",
        className: "journey-stop-1",
        side: "right",
        pin: "/assets/portfolio/page3_journey/journey_pin_red.png",
        icon: "/assets/portfolio/page3_journey/journey_icon_bachelor.png",
        time: "2013.09 - 2017.07",
        lines: ["Yanbian University (Project 211)", "B.A. in Economics"],
      },
      {
        id: "anu-master",
        className: "journey-stop-2",
        side: "left",
        pin: "/assets/portfolio/page3_journey/journey_pin_yello.png",
        icon: "/assets/portfolio/page3_journey/journey_icon_master.png",
        time: "2018.02 - 2019.07",
        lines: ["Australian National University", "Master of Applied Finance"],
      },
      {
        id: "handy-operation",
        className: "journey-stop-3",
        side: "right",
        pin: "/assets/portfolio/page3_journey/journey_pin_green.png",
        icon: "/assets/portfolio/page3_journey/journey_operation.png",
        time: "2020.06 - 2022.11",
        lines: ["Beijing iHandy Mobile Inc.", "Overseas Product & Channel Operations", "English as a working language"],
      },
      {
        id: "ruitai-auditor",
        className: "journey-stop-4",
        side: "left",
        pin: "/assets/portfolio/page3_journey/journey_pin_purple.png",
        icon: "/assets/portfolio/page3_journey/journey_icon_auditor.png",
        time: "2023.12 - Present",
        lines: ["Langfang Ruitai Accounting Firm Co., Ltd.", "Audit Associate"],
      },
    ],
  },
  skills: {
    stage: "STAGE 04",
    title: "My Skill Box",
    subtitle: "Skills & Interests",
    groups: [
      {
        title: "AI & Automation",
        items: ["LLM Practice", "Prompt Design", "RAG Knowledge Base", "AI Workflow Design", "API Integration", "AI Coding (Codex/Cursor)"],
      },
      {
        title: "Product & Business",
        items: ["AI Product Planning", "Workflow Design", "Overseas Growth Ops", "Competitor Analysis", "User Need Discovery"],
      },
      {
        title: "Professional Skills",
        items: ["IELTS 6.5", "CET-6", "CPA Strategy", "Securities Qualification"],
      },
      {
        title: "Interests",
        items: ["Guitar", "Piano", "Singing / Lead Vocal", "Hanfu", "Handcrafts", "Exploring New Things", "Continuous Learning"],
      },
    ],
  },
  contact: {
    stage: "FINAL STAGE",
    title: "CONTACT ME",
    email: "15643516005@163.com",
    resumeLabel: "Resume:",
    resumeDownloads: [
      { label: "Chinese CV", href: "/assets/resume/CV-CN.pdf", filename: "Lily-CV-CN.pdf" },
      { label: "English CV", href: "/assets/resume/CV-EN.pdf", filename: "Lily-CV-EN.pdf" },
    ],
    portfolioLabel: "AI projects:",
    portfolioUrl: "https://lilys-insight.streamlit.app/",
    closing: "Let's build the future, together.",
  },
};

export const supportedLanguages = ["zh", "en"];
export const defaultLanguage = "zh";

export const portfolioContent = {
  zh: zhContent,
  en: enContent,
};

export function getPortfolioContent(language) {
  return portfolioContent[language] ?? portfolioContent[defaultLanguage];
}
