export const projectDetails = {
  "lads": {
    id: "lads",
    title: "LADS",
    subtitle: "AI-Powered Anomaly Detection & Monitoring System",
    year: "2025",
    github: "https://github.com/yajneshx94/aiops-anomaly-detection",
    tech: ["Java 17", "Spring Boot", "Python", "FastAPI", "Isolation Forest", "scikit-learn", "Docker", "HTML", "CSS", "JavaScript"],
    problem: `Modern microservices fail silently and gradually — by the time a crash happens, the damage is done. Traditional monitoring (CPU > 90% → alert) only catches failures after they occur. LADS detects statistical deviations from normal behaviour while they are developing, giving operators time to act before the service fails. It's an end-to-end AIOps pipeline that monitors a live microservice in real time, detects anomalies using unsupervised ML, and generates specific operational recommendations — not just "something's wrong."`,
    architecture: [
      {
        layer: "Layer 1 — Python FastAPI :8000",
        description: "Loads a trained Isolation Forest model (contamination=0.05). Exposes POST /predict — accepts 5 runtime metrics, returns is_anomaly, anomaly_score, confidence. Uses StandardScaler for feature normalization before inference. Trained on 56,400 normal samples — purely unsupervised.",
        tech: ["Python", "FastAPI", "scikit-learn", "Isolation Forest"],
      },
      {
        layer: "Layer 2 — Java Spring Boot :8080",
        description: "AnomalyController handles REST API calls. AnomalyService calls the Python ML service via RestTemplate, maintains an in-memory ConcurrentLinkedDeque event history (last 1000 events). RecommendationService rule engine produces a structured ActionDecision with 4 possible actions: CIRCUIT_BREAKER, SCALE, RETRY, RESUME.",
        tech: ["Java 17", "Spring Boot", "RestTemplate"],
      },
      {
        layer: "Layer 3 — HTML/JS Dashboard",
        description: "Polls the Java backend every 3 seconds. Shows a 3-colour state system: NORMAL → ELEVATED → ANOMALY DETECTED. Displays the ActionDecision details — severity, action, operator guidance, trigger pattern.",
        tech: ["HTML", "CSS", "JavaScript"],
      },
    ],
    challenges: [
      "Collecting reliable training data — scraped 56,400 samples from a Podinfo CNCF microservice's Prometheus endpoint every 3 seconds over 48 hours via Docker.",
      "Finding the right anomaly threshold — contamination=0.05 was tuned through repeated stress and failure scenario testing.",
      "Handling service communication between the Java backend and Python ML service reliably under load.",
      "Preventing false recoveries — implemented a 3-cycle confirmation before declaring all-clear after an anomaly.",
    ],
    outcome: [
      "56,400 training samples collected over 48 hours",
      "95.2% accuracy achieved on stress and failure scenarios",
      "0.847 F1 score validated against real failure simulations",
      "3-layer microservice architecture with ML inference fully decoupled from the backend",
    ],
  },

  "linknest": {
    id: "linknest",
    title: "LinkNest",
    subtitle: "Full-Stack Link Management Platform",
    year: "2025",
    github: "https://github.com/yajneshx94/linknest-ui",
    tech: ["Java 17", "Spring Boot", "Spring Security", "JWT", "React 19", "Vite", "PostgreSQL", "H2", "Docker", "Axios", "Recharts"],
    problem: `People want a single shareable URL that acts as a personal landing page listing all their important links — GitHub, portfolio, socials — without depending on a paid third-party service like Linktree. LinkNest solves this with full ownership: register, manage your links, customise your profile, and get a public-facing page. User data is isolated through ownership-based access control — every link is tied to its owner via a foreign key, and the API enforces that users can only read or modify their own data. Built-in click tracking and analytics give users insight into link engagement.`,
    architecture: [
      {
        layer: "Frontend — React 19 + Vite",
        description: "JWT decoded client-side (jwt-decode) to check the isAdmin claim for route gating. Axios with a request interceptor auto-attaches Bearer token to every call. Recharts for analytics charts. Two route guards: ProtectedRoute (any logged-in user) and AdminRoute (checks isAdmin from JWT).",
        tech: ["React 19", "Vite", "Axios", "Recharts", "jwt-decode"],
      },
      {
        layer: "Backend — Spring Boot 3.5.6",
        description: "Fully stateless — sessions disabled, JWT filter plugged in before UsernamePasswordAuthenticationFilter. Passwords hashed with BCrypt. isAdmin flag baked into the JWT payload at login time. Dual-database setup: H2 for local dev, PostgreSQL for production — swapped via env vars with no code change.",
        tech: ["Java 17", "Spring Security", "JWT (HS512)", "BCrypt", "JPA/Hibernate"],
      },
      {
        layer: "Data Model",
        description: "Two JPA entities: User (username, password, displayName, bio, avatarUrl, isPublic, isAdmin) and Link (title, url, category, clickCount, lastClicked) in a @ManyToOne relationship. Two computed @Transient fields on Link — displayDomain and faviconUrl — returned in JSON without being stored in DB.",
        tech: ["PostgreSQL", "H2", "Docker"],
      },
    ],
    challenges: [
      "Implementing stateless JWT auth correctly — ensuring the filter chain order was right so the JWT filter ran before Spring Security's default auth filter.",
      "The isAdmin claim embedded in JWT means admin checks don't need a DB call, but if access is revoked the old token still carries the claim until expiry (24h). A known tradeoff.",
      "Building the dual-database setup (H2 dev, PostgreSQL prod) using only env vars — no code changes between environments.",
      "Computing faviconUrl and displayDomain as @Transient fields at serialisation time without storing them in the database.",
    ],
    outcome: [
      "Full-stack app with secure JWT auth, protected routes, and user-scoped data isolation",
      "Admin panel with platform-level oversight and role-based route gating",
      "Click tracking and analytics dashboard with Recharts visualisation",
      "Dockerized backend with environment-based database switching",
    ],
  },

  "wikifetcher": {
    id: "wikifetcher",
    title: "WikiFetcher",
    subtitle: "Wikipedia Content Fetcher",
    year: "2025",
    github: "https://github.com/yajneshx94/java-wikipedia-fetcher",
    tech: ["Java 17", "Spring Boot", "Spring MVC", "Thymeleaf", "RestTemplate", "Jackson", "Apache Commons Text", "MongoDB", "Maven", "HTML5", "CSS3"],
    problem: `Wikipedia provides comprehensive information, but users are presented with lengthy articles when they only need a quick understanding of a topic. WikiFetcher transforms Wikipedia into a lightweight knowledge exploration platform — delivering structured summaries, key concepts, and related topic recommendations through a clean web interface. Fuzzy search using Levenshtein Distance handles misspelled queries, and processed results are cached in MongoDB to reduce repeated API calls and improve response times.`,
    architecture: [
      {
        layer: "Web Layer — Spring MVC",
        description: "SearchController handles GET / (empty state) and POST /search. Adds the SearchResult DTO to the Thymeleaf Model for server-side rendering. No REST API exposed externally — single Spring Boot process serves both logic and HTML.",
        tech: ["Spring MVC", "Thymeleaf"],
      },
      {
        layer: "Service Layer — WikipediaService",
        description: "Levenshtein Distance (Apache Commons Text) handles misspelled queries. MongoDB cache checked before hitting the API. Fetches from Wikipedia MediaWiki API (generator=search, gsrlimit=5, exintro=1). Jackson parses JSON, sorts by relevance, skips disambiguation pages, picks the best article, surfaces the rest as suggestions.",
        tech: ["RestTemplate", "Jackson", "Apache Commons Text", "MongoDB"],
      },
      {
        layer: "Data Layer — Java Records",
        description: "SearchResult and SearchResult.Article are Java Records — immutable, auto-generated constructor/getters. Two factory methods SearchResult.success() and SearchResult.error() make the response type explicit without enums or separate classes.",
        tech: ["Java Records", "MongoDB"],
      },
    ],
    challenges: [
      "Handling disambiguation pages — Wikipedia often returns 'may refer to' pages instead of real articles. Built filtering logic to detect and skip them while presenting meaningful alternatives.",
      "Implementing fuzzy search with Levenshtein Distance — balancing accuracy and relevance to avoid returning unrelated corrections.",
      "Generating meaningful related topic recommendations by extracting internal article links, keywords, and categories, then ranking by relevance.",
      "Optimizing repeated searches with MongoDB caching — significantly reducing response times for frequently searched topics.",
    ],
    outcome: [
      "Full MVC knowledge exploration platform with search, summarisation, and topic recommendations",
      "Fuzzy search with Levenshtein Distance for misspelling tolerance",
      "MongoDB-backed caching strategy reducing repeated API dependency",
      "Java Records used for clean, immutable DTO design",
    ],
  },

  "content-generator": {
    id: "content-generator",
    title: "Content Generator",
    subtitle: "Voice-Assisted Content Processing Service",
    year: "2024",
    github: "https://github.com/yajneshx94/text-generation-content-tool",
    tech: ["Python 3.13", "TinyLlama 1.1B", "PyTorch", "HuggingFace Transformers", "SpeechRecognition", "Google STT", "pyttsx3", "wikipedia"],
    problem: `Content creators and students often need quick, spoken and written summaries on any topic — but switching between a search engine, reading a Wikipedia page, and manually writing a caption or blog intro is slow and fragmented. Narrify collapses that into a single flow: speak or type a topic, it fetches real Wikipedia context, feeds it into a local LLM to generate a content-ready summary, then reads the result back via text-to-speech. A voice-first AI content assistant that runs mostly offline using a locally loaded language model.`,
    architecture: [
      {
        layer: "Input Layer",
        description: "input_handler.py accepts mic input via SpeechRecognition (Google STT) or keyboard fallback. extract_topic_from_query() strips trigger phrases like 'tell me about' and 'what is' to extract the clean topic.",
        tech: ["SpeechRecognition", "Google STT", "pyaudio"],
      },
      {
        layer: "Knowledge Layer",
        description: "wiki_fetcher.py fetches the Wikipedia page summary (first 500 chars) using the wikipedia library. The summary is injected directly into the LLM prompt as context — a basic RAG (Retrieval-Augmented Generation) pattern that grounds the output in real facts rather than letting the model hallucinate.",
        tech: ["wikipedia", "RAG pattern"],
      },
      {
        layer: "Generation & Output Layer",
        description: "text_generator.py runs TinyLlama 1.1B-Chat via HuggingFace pipeline. Uses GPU (float16) if CUDA is available, else CPU (float32). voice_output.py reads the result aloud via pyttsx3 (fully offline TTS). No web framework, no UI — pure CLI pipeline.",
        tech: ["TinyLlama 1.1B", "PyTorch", "HuggingFace", "pyttsx3"],
      },
    ],
    challenges: [
      "Getting reliable voice input — SpeechRecognition with Google STT requires internet and can misfire on background noise. Built a keyboard fallback for offline use.",
      "Preventing LLM hallucination — solved by injecting Wikipedia context directly into the prompt as a RAG pattern, instructing the model to answer only from provided context.",
      "Running a 1.1B parameter model locally — handled GPU/CPU switching automatically via PyTorch device detection.",
      "Stripping natural language trigger phrases cleanly from voice input to extract just the topic.",
    ],
    outcome: [
      "You speak a topic, it searches Wikipedia, summarises it with AI, and reads the answer back to you", 
      "Uses Wikipedia as a knowledge source so the AI doesn't make things up", 
      "Works on any machine — uses GPU if available, falls back to CPU automatically", 
      "Reads the result aloud without needing an internet connection",
    ],
  },
}