export const portfolioData = {
  personalInfo: {
    name: "Alex Dev", // Placeholder Name
    role: "AI Product Developer",
    shortDescription: "I build intelligent products that solve real problems.",
    longDescription:
      "AI-powered applications, automation systems, web platforms and custom software built for startups, businesses and individuals.",
    about:
      "I am an AI Product Developer specializing in Generative AI, LLM applications, RAG, and AI automation. I bridge the gap between cutting-edge AI models and production-ready full-stack applications. Whether you need an intelligent chatbot, an autonomous agent, or a scalable web platform, I build solutions that deliver real business value.",
    email: "contact@example.com",
    availability: "Available for freelance projects",
  },
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/1234567890",
  },
  techStack: [
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "FastAPI",
    "LLMs",
    "RAG",
    "LangChain",
    "LangGraph",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
  ],
  services: [
    {
      id: "ai-systems",
      category: "AI & Intelligent Systems",
      items: [
        {
          title: "AI Chatbots",
          description: "Custom AI chatbots, customer support assistants, website AI assistants, WhatsApp AI bots, and document chatbots.",
          icon: "bot",
        },
        {
          title: "RAG Applications",
          description: "Chat with documents, enterprise knowledge assistants, private knowledge bases, semantic search, and document Q&A.",
          icon: "database",
        },
        {
          title: "AI Agents",
          description: "AI agents, agentic workflows, multi-agent systems, API/tool-integrated agents, and autonomous business workflows.",
          icon: "cpu",
        },
        {
          title: "LLM Fine-tuning",
          description: "LoRA, QLoRA, domain-specific fine-tuning, model evaluation, and custom model adaptation.",
          icon: "settings",
        },
        {
          title: "AI Features",
          description: "AI search, content generation, document processing, summarization, classification, and AI-powered recommendations.",
          icon: "sparkles",
        },
      ],
    },
    {
      id: "automation",
      category: "Automation",
      items: [
        {
          title: "AI Automation",
          description: "Business workflow automation, lead generation automation, WhatsApp/Email/CRM automation, data extraction, and API integrations.",
          icon: "workflow",
        },
      ],
    },
    {
      id: "software",
      category: "Software Development",
      items: [
        {
          title: "Web Development",
          description: "Business websites, SaaS applications, admin dashboards, CRM systems, full-stack applications, and backend APIs.",
          icon: "globe",
        },
        {
          title: "Mobile App Development",
          description: "Android applications, cross-platform applications, AI-powered mobile apps, and API-integrated applications.",
          icon: "smartphone",
        },
        {
          title: "Portfolio Websites",
          description: "Personal portfolios, developer portfolios, freelancer websites, resume websites, and personal branding websites.",
          icon: "layout",
        },
        {
          title: "Academic Project Development",
          description: "AI/ML projects, Deep learning, Computer vision, NLP, Generative AI, RAG, full-stack AI projects, and research-oriented projects.",
          icon: "graduation-cap",
        },
      ],
    },
  ],
  projects: [
    {
      id: "doc-intel",
      title: "Document Intelligence System",
      category: "AI / RAG",
      description: "An enterprise RAG system that allows users to chat with thousands of technical documents and extract insights instantly.",
      technologies: ["Python", "LangChain", "Pinecone", "OpenAI", "Next.js"],
      problem: "Employees spent hours manually searching through PDF manuals for specific technical specifications.",
      solution: "Developed a secure RAG pipeline that vectorizes documents and provides a chat interface with citations to the original PDFs.",
      outcome: "Reduced search time by 90% and improved accuracy of technical support responses.",
      link: "#",
      github: "#",
    },
    {
      id: "whatsapp-crm",
      title: "WhatsApp AI Assistant & CRM",
      category: "AI Automation",
      description: "An automated lead qualification bot for a real estate agency integrated with their CRM.",
      technologies: ["Node.js", "WhatsApp API", "OpenAI", "Supabase", "Make.com"],
      problem: "High volume of unqualified leads from Facebook ads overwhelming the sales team.",
      solution: "Built a conversational AI that answers basic property questions, qualifies the lead, and books meetings automatically.",
      outcome: "24/7 lead response time, 40% increase in qualified meetings booked.",
      link: "#",
      github: "#",
    },
    {
      id: "saas-analytics",
      title: "AI-Powered Analytics Dashboard",
      category: "Web Application",
      description: "A SaaS dashboard that uses AI to analyze business metrics and generate plain-English summaries.",
      technologies: ["Next.js", "Tailwind CSS", "Recharts", "Prisma", "Claude API"],
      problem: "Business owners struggled to interpret complex charts and data tables.",
      solution: "Integrated an LLM to automatically generate weekly executive summaries based on the raw data trends.",
      outcome: "Increased active user engagement by 65%.",
      link: "#",
      github: "#",
    },
  ],
  process: [
    {
      step: "01",
      title: "Understand",
      description: "Understand the business problem and requirements.",
    },
    {
      step: "02",
      title: "Plan",
      description: "Design the architecture, technology and development approach.",
    },
    {
      step: "03",
      title: "Build",
      description: "Develop, test and integrate the solution.",
    },
    {
      step: "04",
      title: "Launch",
      description: "Deploy, monitor and improve the product.",
    },
  ],
  whyWorkWithMe: [
    {
      title: "AI First",
      description: "AI isn't an add-on. It's at the core of what I build.",
    },
    {
      title: "Business Focused",
      description: "Technology should solve a real problem, not just look impressive.",
    },
    {
      title: "Full-Stack Capability",
      description: "From AI backend to production-ready frontend.",
    },
    {
      title: "Custom Solutions",
      description: "Build according to the client's actual requirements.",
    },
    {
      title: "Modern Technology",
      description: "Use current AI and software engineering practices.",
    },
    {
      title: "End-to-End Development",
      description: "From idea → architecture → development → deployment.",
    },
  ],
};
