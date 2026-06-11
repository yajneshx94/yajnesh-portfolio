export const projects = [
  // ── ADD NEW PROJECTS HERE ──
  // Copy the block below and fill in your details
{
    id: "lads",
    title: "LADS",
    subtitle: "AI-Powered Anomaly Detection & Monitoring System",
    description: "A real-time AIOps monitoring platform that automatically detects abnormal system behavior using machine learning. Collects live operational metrics, analyzes them through an Isolation Forest anomaly detection model, and generates intelligent recommendations to identify performance issues before they impact users. Follows a microservice-oriented architecture with a Spring Boot backend, a dedicated Python ML inference service, and an interactive monitoring dashboard.",
    tech: ["Java", "Spring Boot", "Python", "Isolation Forest", "Docker", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/yajneshx94/aiops-anomaly-detection",
    year: "2025",
    highlight: true,
},
  {
    id: "linknest",
    title: "LinkNest",
    subtitle: "Full-Stack Link Management Platform",
    description: "A full-stack web application that enables users to create personalized public profile pages containing all their important links in one place, similar to Linktree. Features JWT-based authentication, a protected dashboard, click tracking and analytics, and shareable public profiles. Built with React and Vite for the frontend and Spring Boot for the backend, following a layered monolithic architecture with RESTful APIs, Spring Security, JPA/Hibernate ORM, and a Dockerized backend deployment.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "React", "PostgreSQL", "Docker", "JPA/Hibernate"],
    github: "https://github.com/yajneshx94/linknest-ui",
    year: "2025",
    highlight: false,
},
  {
    id: "wikifetcher",
    title: "WikiFetcher",
    subtitle: "Wikipedia Content Fetcher",
    description: "A Spring Boot MVC web application that allows users to search for topics and instantly retrieve summarized Wikipedia content. The service layer communicates with the Wikipedia API using RestTemplate, parses JSON responses with Jackson ObjectMapper, and transforms them into structured DTOs using Java Records. Features intelligent result filtering, disambiguation handling, relevance sorting, and robust error handling. The frontend uses Thymeleaf for server-side rendering with a responsive glassmorphism-inspired UI.",
    tech: ["Java", "Spring Boot", "Thymeleaf", "REST APIs", "Jackson", "HTML", "CSS", "JavaScript", "Maven"],
    github: "https://github.com/yajneshx94/java-wikipedia-fetcher",
    year: "2025",
    highlight: false,
},
  {
    id: "content-generator",
    title: "Content Generator",
    subtitle: "Voice-Assisted Content Processing Service",
    description: "An AI content generation tool that automates the creation of blog introductions and social media captions using Python, PyTorch, and Transformers. Integrates a voice interface for input and connects to the Wikipedia API to enrich generated text with fact-checked, context-aware information.",
    tech: ["Python", "PyTorch", "Transformers", "Wikipedia API", "SpeechRecognition"],
    github: "https://github.com/yajneshx94/text-generation-content-tool",
    year: "2024",
    highlight: false,
},
  // ── END OF PROJECTS LIST ──
]