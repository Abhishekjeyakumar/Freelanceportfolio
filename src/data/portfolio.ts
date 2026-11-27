export const portfolioData = {
  personalInfo: {
    name: "Lakshmi Priya A",
    role: "Artificial Intelligence Engineer",
    title: "AI Engineer & Generative AI Specialist",
    shortDescription: "Computer Science graduate (B.E., 2026) specializing in Generative AI, RAG pipelines, and autonomous AI agents.",
    longDescription:
      "Hands-on experience engineering Generative AI and LLM applications in Python — RAG pipelines, MCP-based and LangGraph AI agents, and prompt-engineered chatbots. Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate.",
    about:
      "I am an Artificial Intelligence Engineer and Computer Science student (B.E., 2022-2026, CGPA: 8.3) at Mangayarkarasi College of Engineering (Anna University) with practical experience developing Generative AI, LLM applications, RAG pipelines, and autonomous multi-agent workflows. With hands-on internship experience at Infosys Springboard (building an AI Nutrition Intelligence System with 99.5% accuracy) and EY Global Delivery Services (full-stack MERN development), I combine machine learning fundamentals with modern agentic architectures to build scalable, real-world AI solutions.",
    email: "arasupriya044@gmail.com",
    phone: "+91 94884 16566",
    location: "Tamil Nadu, India",
    availability: "Available for AI Engineering Roles & Opportunities",
  },
  socialLinks: {
    github: "https://github.com/Laxmi1214",
    linkedin: "https://linkedin.com/in/lakshmi-priya1214",
    whatsapp: "https://wa.me/919488416566",
    email: "mailto:arasupriya044@gmail.com",
  },
  technicalSkills: {
    programming: ["Python (Primary)", "JavaScript"],
    generativeAi: [
      "Large Language Models (Gemini, Groq Llama 3.3, GPT-4o Mini, Claude)",
      "Prompt Engineering",
      "RAG (Retrieval-Augmented Generation)",
      "Vector Embeddings",
      "AI Agents",
      "Model Context Protocol (MCP / FastMCP)",
      "LLM Finetuning (LoRA, QLoRA)",
    ],
    frameworks: [
      "LangChain",
      "LangGraph",
      "Automation Anywhere AI Agent",
      "OCR",
    ],
    mlAndData: [
      "Machine Learning Fundamentals",
      "NumPy",
      "Pandas",
      "TensorFlow",
      "Logistic Regression",
    ],
    apisAndDatabases: [
      "REST APIs",
      "Gemini API",
      "Groq API",
      "OpenWeather API",
      "MySQL",
      "ChromaDB (Vector DB)",
      "MongoDB",
    ],
    tools: ["Git", "GitHub", "Postman", "VS Code"],
  },
  techStack: [
    "Python",
    "LangChain",
    "LangGraph",
    "FastMCP / MCP",
    "ChromaDB",
    "RAG",
    "Gemini API",
    "Groq Llama 3.3",
    "GPT-4o Mini",
    "TensorFlow",
    "REST APIs",
    "React / Next.js",
    "JavaScript",
  ],
  services: [
    {
      id: "genai-agents",
      category: "Generative AI & Agentic Systems",
      items: [
        {
          title: "RAG Systems & Semantic Search",
          description:
            "Multi-source Retrieval-Augmented Generation across PDFs, OCR images, and web URLs with metadata filtering and vector databases (ChromaDB) to eliminate hallucinations.",
          icon: "database",
        },
        {
          title: "LangGraph AI Agents",
          description:
            "Stateful agentic workflows with StateGraph, nodes, conditional edges, candidate screening, evaluation routing, and Mermaid workflow visualizations.",
          icon: "workflow",
        },
        {
          title: "Model Context Protocol (MCP)",
          description:
            "FastMCP-powered intelligence servers allowing LLMs (like Claude Desktop) to execute structured tools against live REST endpoints in real-time.",
          icon: "cpu",
        },
        {
          title: "Custom AI Chatbots & KB",
          description:
            "Document-aware enterprise conversational chatbots powered by GPT-4o Mini, Gemini, and Automation Anywhere AI Agent with verifiable citations.",
          icon: "bot",
        },
        {
          title: "LLM Fine-Tuning & Prompting",
          description:
            "Domain-specific parameter-efficient fine-tuning (LoRA, QLoRA) and structured prompt engineering for reliable, production-grade output.",
          icon: "sparkles",
        },
      ],
    },
    {
      id: "ml-engineering",
      category: "Machine Learning & Full-Stack Development",
      items: [
        {
          title: "Machine Learning & Classification",
          description:
            "Feature engineering, dataset preparation, and supervised classification models (Logistic Regression, TensorFlow) achieving up to 99.5% accuracy.",
          icon: "settings",
        },
        {
          title: "Full-Stack Web Development",
          description:
            "Modern web applications built with React, Next.js, Node.js, Express, and MongoDB/MySQL with clean RESTful API architecture.",
          icon: "globe",
        },
        {
          title: "Academic & Research AI Systems",
          description:
            "Healthcare intelligence, nutrition diagnosis models, automated screening pipelines, and computer science engineering applications.",
          icon: "graduation-cap",
        },
      ],
    },
  ],
  projects: [
    {
      id: "devrag",
      title: "DEVRAG | AI-Powered Documentation Retrieval & Developer Assistant",
      category: "RAG / Generative AI",
      description:
        "An end-to-end Retrieval-Augmented Generation (RAG) system using LangChain and ChromaDB vector embeddings for context-aware semantic Q&A across multi-modal sources.",
      technologies: ["Python", "LangChain", "ChromaDB", "Gemini API", "RAG", "OCR", "Vector Embeddings"],
      problem:
        "Developers lose hours navigating fragmented documentation, technical PDFs, and architectural diagrams, frequently facing cross-document hallucinations in standard LLMs.",
      solution:
        "Engineered source-aware retrieval with per-document metadata filtering across 3+ source types (PDFs, OCR-extracted images, web URLs). Leveraged Gemini API for fast, grounded response synthesis.",
      outcome:
        "Delivered sub-second semantic retrieval with high grounding and reduced cross-document hallucinations across multi-modal technical documentation.",
      link: "https://github.com/Laxmi1214",
      github: "https://github.com/Laxmi1214",
    },
    {
      id: "recruitment-screening",
      title: "AI Recruitment Screening Workflow",
      category: "LangGraph / AI Agent",
      description:
        "A stateful LangGraph agent workflow that automates candidate resume evaluation, experience categorisation, and conditional decision routing.",
      technologies: ["Python", "LangGraph", "LangChain", "Groq (Llama 3.3)", "StateGraph", "Mermaid"],
      problem:
        "High-volume hiring leads to manual screening bottlenecks, slow candidate turnaround, and inconsistent evaluation criteria across technical roles.",
      solution:
        "Built a stateful LangGraph architecture (StateGraph, nodes, edges, conditional routing) integrating Groq Llama 3.3 via LangChain for skill match and experience scoring. Mapped graph states with Mermaid.",
      outcome:
        "Automated candidate routing: scheduling HR interviews, escalating senior talent directly to lead recruiters, or generating polite rejections.",
      link: "https://github.com/Laxmi1214",
      github: "https://github.com/Laxmi1214",
    },
    {
      id: "weathermind-ai",
      title: "WeatherMind AI | MCP-Powered Weather Intelligence Agent",
      category: "Model Context Protocol (MCP)",
      description:
        "An MCP-powered AI agent using FastMCP where Claude Desktop calls structured tools over live OpenWeather APIs for real-time analysis, AQI monitoring, and alerts.",
      technologies: ["Python", "FastMCP", "Claude Desktop", "OpenWeather API", "Async Workflows"],
      problem:
        "Traditional LLM chatbots hallucinate weather or provide stale data because they cannot directly interact with live meteorological API streams in real-time.",
      solution:
        "Built an MCP server using FastMCP enabling Claude to execute structured tool calling over live OpenWeather endpoints for current weather, air quality index, and forecasts.",
      outcome:
        "Replaced hardcoded responses with asynchronous LLM tool reasoning driven directly by live, trusted meteorological API data feeds.",
      link: "https://github.com/Laxmi1214",
      github: "https://github.com/Laxmi1214",
    },
    {
      id: "aa-knowledge-bot",
      title: "AI Knowledge Base Chatbot",
      category: "Automation Anywhere / RAG",
      description:
        "Document-aware enterprise chatbot built on Automation Anywhere AI Agent with RAG and GPT-4o Mini for verified, context-rich question answering.",
      technologies: ["Automation Anywhere AI Agent", "RAG", "GPT-4o Mini", "Prompt Engineering"],
      problem:
        "Enterprise teams struggle to find accurate answers buried in hundreds of proprietary corporate documents and guidelines.",
      solution:
        "Created an AI chatbot on Automation Anywhere AI Agent with an uploaded document knowledge base, architecting context-aware prompts with strict citation rules.",
      outcome:
        "High-precision document Q&A tested against domain-specific queries and rigorous document retrieval checks, delivering verifiable source citations.",
      link: "https://github.com/Laxmi1214",
      github: "https://github.com/Laxmi1214",
    },
  ],
  experience: [
    {
      role: "Artificial Intelligence Intern",
      company: "Infosys Springboard",
      period: "Sep 2026 - Present",
      location: "Remote / Hybrid",
      type: "Internship",
      highlights: [
        "Developed an AI-powered Nutrition Intelligence System to assess nutritional risk and generate personalized diet recommendations based on food nutrient profiles and patient health symptoms.",
        "Built and evaluated machine learning classification models using Logistic Regression, achieving 98% and 99.5% test accuracy for food risk-tier classification and symptom-based deficiency categorization, respectively.",
      ],
      skills: ["Python", "Machine Learning", "Logistic Regression", "Data Modeling", "Healthcare AI"],
    },
    {
      role: "MERN Stack Intern",
      company: "EY Global Delivery Services - AICTE Edunet Foundation",
      period: "Feb 2025 - Mar 2025",
      location: "Remote",
      type: "Internship",
      highlights: [
        "Developed a full-stack web application during an intensive 8-week internship using MongoDB, Express.js, React.js, and Node.js.",
        "Integrated REST APIs and database schemas, following Git/GitHub version control workflows and best software engineering practices.",
      ],
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Git/GitHub"],
    },
  ],
  education: {
    institution: "Mangayarkarasi College of Engineering (Anna University)",
    degree: "B.E. Computer Science & Engineering",
    period: "2022 - 2026",
    score: "CGPA: 8.3 / 10.0",
    status: "Graduating 2026",
  },
  certifications: [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      badge: "AI & Cloud",
    },
    {
      title: "Python Zero to Hero",
      issuer: "HCL GUVI",
      year: "2024",
      badge: "Python Core",
    },
    {
      title: "MERN Stack Web Development",
      issuer: "Udemy",
      year: "2024",
      badge: "Full Stack",
    },
    {
      title: "Introduction to Prompt Engineering",
      issuer: "Simplilearn",
      year: "2024",
      badge: "Prompt Engineering",
    },
  ],
  process: [
    {
      step: "01",
      title: "Problem & Data Formulation",
      description: "Analyze domain requirements, data formats (PDFs, APIs, OCR), and target AI objectives.",
    },
    {
      step: "02",
      title: "Agent & Pipeline Architecture",
      description: "Design state graphs (LangGraph), RAG vector schemas (ChromaDB), or MCP tool endpoints.",
    },
    {
      step: "03",
      title: "Model Integration & Prompting",
      description: "Integrate LLMs (Gemini, Groq Llama, Claude, GPT-4o Mini) with structured prompting and evaluation.",
    },
    {
      step: "04",
      title: "Verification & Deployment",
      description: "Conduct retrieval accuracy checks, benchmark test sets, and ship production-ready interfaces.",
    },
  ],
  whyWorkWithMe: [
    {
      title: "Generative AI & Agent Specialization",
      description: "Deep hands-on experience in LangChain, LangGraph stateful agents, RAG pipelines, and Model Context Protocol (FastMCP).",
    },
    {
      title: "High Precision & Benchmarked Accuracy",
      description: "Demonstrated 99.5% accuracy in ML classification and sub-second semantic retrieval across diverse document modalities.",
    },
    {
      title: "Full-Stack + AI Integration",
      description: "Bridges the gap between raw models and usable software with Python, Next.js/React, REST APIs, and databases.",
    },
    {
      title: "Certified AI Foundations",
      description: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate with a strong foundation in modern cloud and AI principles.",
    },
  ],
};
