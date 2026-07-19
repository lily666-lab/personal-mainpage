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
        summary: "面向审计人员的 AI 辅助审计工具。",
        detail:
          "项目背景：基于真实的审计实操痛点设计，如新人上手难、底稿编制繁琐、经验严重依赖人工带教，独立构思并开发的一款将业务经验转化为 AI 辅助填写的自动化工作流。\n\n产品设计与开发：规划并落地工作台总览、自动化审计工作台、抽凭中心、RAG 知识库、项目管理等 8 大核心模块。前端采用 HTML/CSS/JS 构建包含状态记忆与复杂表单管理的完整交互；后端基于 Node.js 搭建本地服务，接入 DeepSeek API 并实现本地化数据解析与导出。\n\n项目成果：完成 AI 审计助手 AuditMind MVP 原型设计与开发，跑通“资料上传 → AI 辅助分析与抽样 → 审计底稿初稿生成 → Excel 导出”的端到端工作流闭环。搭建基于 RAG 的审计知识库问答模块，实现审计准则与业务经验知识的检索增强，为审计人员提供智能化辅助支持。",
        tags: ["HTML", "CSS", "JavaScript", "Node.js", "DeepSeek API", "RAG"],
      },
      {
        id: "youtube-analysis",
        number: "02",
        title: "YouTube\n竞品分析工具",
        subtitle: "海外内容研究工具",
        cardImage: "/assets/portfolio/page2_project/project_card_red.png",
        keywords: ["Data API", "数据分析", "竞品洞察"],
        summary:
          "基于 Python（Streamlit + Pandas）结合 YouTube Data API 开发，实现频道/视频维度的数据采集与筛选，自动获取视频元数据、字幕等信息，并通过可视化分析与数据导出，辅助海外内容竞品研究流程自动化。",
        detail:
          "围绕海外内容竞品研究场景，设计并实现频道/视频维度的数据采集、筛选、字幕获取、可视化分析与数据导出流程。\n\n该工具用于减少手动整理竞品内容的重复劳动，帮助快速识别频道内容方向、视频表现、选题特征与素材线索。",
        tags: ["Python", "Streamlit", "Pandas", "YouTube Data API"],
      },
      {
        id: "reddit-insight",
        number: "03",
        title: "Reddit\n用户洞察工具",
        subtitle: "海外用户研究工具",
        cardImage: "/assets/portfolio/page2_project/project_card_purple.png",
        keywords: ["Playwright", "数据采集", "用户痛点分析"],
        summary:
          "针对海外市场用户研究场景，基于 Python + Playwright 开发自动化数据采集工具，实现指定社区帖子、评论及互动数据的自动获取与整理。",
        detail:
          "通过浏览器自动化方案解决 API 访问限制问题，支持关键词检索、内容提取及用户痛点素材沉淀，为产品调研、竞品分析和市场洞察提供数据支持。",
        tags: ["Python", "Playwright", "Web Scraping", "User Research"],
      },
      {
        id: "wangcai-todo",
        number: "04",
        title: "旺财 Todo",
        subtitle: "个人任务管理工具",
        cardImage: "/assets/portfolio/page2_project/project_card_green.png",
        keywords: ["任务管理", "交互设计", "本地存储"],
        summary: "针对个人任务管理场景，设计并开发一款轻量化 Todo 应用，探索任务管理流程与交互体验优化。",
        detail:
          "支持任务新增、编辑、完成、删除、撤销、置顶及拖拽排序。\n\n通过本地存储实现数据持久化，让个人任务管理流程更轻量、更顺手。",
        tags: ["React", "Local Storage", "UX Design"],
      },
      {
        id: "miaow-note",
        number: "05",
        title: "喵呜笔记",
        subtitle: "个人灵感记录工具",
        cardImage: "/assets/portfolio/page2_project/project_card_pink.png",
        keywords: ["笔记系统", "时间线", "瀑布流"],
        summary:
          "探索轻量化个人记录场景，设计并开发一款本地优先的笔记 Web App，用于快速记录、整理和回顾日常想法与灵感。",
        detail:
          "支持笔记创建、编辑、删除、时间线浏览及瀑布流展示。\n\n通过视觉化设计提升记录与回顾体验，让想法可以更轻松地被收集、整理和重新发现。",
        tags: ["Web App", "Note System", "Interaction Design"],
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
    resumeLabel: "简历下载链接：先占位 后期我会补上",
    portfolioLabel: "AI作品网站：先占位 后期我会补上",
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
        summary: "An AI-assisted audit tool designed for auditors.",
        detail:
          "Project background: AuditMind was designed around real audit pain points, including the steep learning curve for junior auditors, repetitive working paper preparation, and heavy dependence on manual coaching. I independently planned and developed an automated workflow that turns audit experience into AI-assisted form filling and draft generation.\n\nProduct design and development: I planned and built 8 core modules, including a dashboard overview, automated audit workspace, sampling center, RAG knowledge base, and project management. The frontend was built with HTML/CSS/JS and supports state memory plus complex form interactions. The backend uses Node.js, integrates the DeepSeek API, and supports local data parsing and export.\n\nOutcome: I completed the MVP prototype and ran through an end-to-end workflow from document upload, AI-assisted analysis and sampling, to draft audit working paper generation and Excel export. I also built a RAG-based audit knowledge Q&A module to retrieve audit standards and business experience, providing auditors with intelligent decision support.",
        tags: ["HTML", "CSS", "JavaScript", "Node.js", "DeepSeek API", "RAG"],
      },
      {
        id: "youtube-analysis",
        number: "02",
        title: "YouTube\nCompetitor Analyzer",
        subtitle: "Global Content Research Tool",
        cardImage: "/assets/portfolio/page2_project/project_card_red.png",
        keywords: ["Data API", "Analytics", "Competitor Insight"],
        summary:
          "A Python tool built with Streamlit and Pandas, integrated with the YouTube Data API to collect and filter channel/video data, retrieve metadata and captions, visualize insights, and export research data for overseas content analysis.",
        detail:
          "Designed for global content competitor research, this tool supports channel and video level data collection, filtering, caption retrieval, visual analysis, and data export.\n\nIt reduces repetitive manual research work and helps identify content direction, video performance, topic patterns, and creative material clues more quickly.",
        tags: ["Python", "Streamlit", "Pandas", "YouTube Data API"],
      },
      {
        id: "reddit-insight",
        number: "03",
        title: "Reddit\nUser Insight Tool",
        subtitle: "Global User Research Tool",
        cardImage: "/assets/portfolio/page2_project/project_card_purple.png",
        keywords: ["Playwright", "Data Collection", "Pain Point Analysis"],
        summary:
          "An automated data collection tool built with Python and Playwright for overseas user research, supporting the collection and organization of posts, comments, and engagement data from selected communities.",
        detail:
          "This tool uses browser automation to work around API access limitations. It supports keyword search, content extraction, and user pain point material collection, providing data support for product research, competitor analysis, and market insight.",
        tags: ["Python", "Playwright", "Web Scraping", "User Research"],
      },
      {
        id: "wangcai-todo",
        number: "04",
        title: "Wangcai Todo",
        subtitle: "Personal Task Manager",
        cardImage: "/assets/portfolio/page2_project/project_card_green.png",
        keywords: ["Task Management", "Interaction Design", "Local Storage"],
        summary: "A lightweight Todo app designed for personal task management, exploring smoother task workflows and interaction details.",
        detail:
          "Supports task creation, editing, completion, deletion, undo, pinning, and drag-and-drop sorting.\n\nLocal storage keeps data persistent, making the personal task workflow lighter and easier to use.",
        tags: ["React", "Local Storage", "UX Design"],
      },
      {
        id: "miaow-note",
        number: "05",
        title: "Miaow Notes",
        subtitle: "Personal Idea Notebook",
        cardImage: "/assets/portfolio/page2_project/project_card_pink.png",
        keywords: ["Note System", "Timeline", "Masonry Layout"],
        summary:
          "A local-first note-taking web app for quick idea capture, organization, and review in lightweight personal recording scenarios.",
        detail:
          "Supports note creation, editing, deletion, timeline browsing, and masonry-style display.\n\nThe visual design improves the experience of capturing and revisiting ideas, making everyday inspiration easier to collect, organize, and rediscover.",
        tags: ["Web App", "Note System", "Interaction Design"],
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
    resumeLabel: "Resume download link: placeholder for now",
    portfolioLabel: "AI project site: placeholder for now",
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
