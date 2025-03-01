
import { Story, Comment } from "@/types";

// List of tech buzzwords to detect in titles
const buzzwords = [
  "serverless", "cloud", "AI", "ML", "blockchain", "crypto", "web3", 
  "microservices", "DevOps", "containers", "kubernetes", "docker", "GitOps", 
  "NoSQL", "agile", "CI/CD", "MVP", "scale", "optimization", "architecture",
  "framework", "stack", "API", "automation", "performance", "UX", "UI",
  "responsive", "reactive", "native", "paradigm", "algorithm", "neural",
  "deep learning", "data", "analytics", "dashboard", "metrics", "vision", 
  "future", "innovation", "disruption", "transform", "revolution"
];

// List of realistic tech usernames
const techUsernames = [
  "devninja", "codesmith", "rustacean", "pythonista", "webwizard", 
  "fullstackfan", "cloudguru", "datascientist", "securityhawk", "uxdesigner",
  "sysadmin", "netarchitect", "dbmaster", "frontenddev", "backendpro",
  "gitmaster", "dockerfan", "kubeguru", "aiengineer", "hackerman",
  "terminalwarrior", "bitshifter", "jsmonkey", "linuxlover", "macfanboy",
  "windowsdev", "quantumcoder", "embeddedhacker", "10xdeveloper", "scriptkiddie",
  "bytecoder", "pixelpusher", "uiartist", "algorithmace", "memoryleaker",
  "bugfixer", "featureadder", "scalability_guru", "techpurge", "startupfounder",
  "venturecapitalist", "techlead", "productowner", "scrummaster", "agilecoach"
];

// Sample comment templates
const commentTemplates = [
  "This is absolutely groundbreaking. I've been waiting for someone to tackle this issue.",
  "I'm not convinced this approach will scale in production environments.",
  "Has anyone actually benchmarked this against existing solutions?",
  "The article misses several important points about {topic}.",
  "I've implemented something similar at my company and ran into several challenges.",
  "Great write-up, but I think the security implications need more attention.",
  "This reminds me of a project from the early 2000s that tried to solve the same problem.",
  "The author clearly hasn't worked with enterprise systems at scale.",
  "I'd love to see some actual performance metrics on this.",
  "This is exactly why I switched from {tech1} to {tech2} last year.",
  "The comments here are missing the point entirely.",
  "As someone who's worked in this field for 15+ years, I can confirm this is revolutionary.",
  "Interesting approach, but I wonder about backward compatibility.",
  "Does anyone have a link to the original research this is based on?",
  "I'm surprised no one has mentioned the regulatory implications of this.",
  "The problem isn't the technology, it's the implementation.",
  "I've contributed to an open-source project that addresses this exact issue.",
  "Can we please stop pretending that every new framework is going to change the world?",
  "I've been saying this for years, glad to see someone finally wrote it up properly.",
  "This is why I love the tech community - always pushing boundaries."
];

// Tech topics for comment generation
const techTopics = [
  "serverless architecture", "microservices", "Kubernetes", "Docker", 
  "cloud computing", "machine learning", "React", "Vue", "Angular",
  "TypeScript", "JavaScript", "Python", "Rust", "Go", "Java",
  "functional programming", "concurrency", "DevOps", "CI/CD pipelines",
  "testing", "security", "databases", "SQL", "NoSQL", "MongoDB",
  "PostgreSQL", "Redis", "performance optimization", "algorithms",
  "data structures", "system design", "web development", "mobile development",
  "cross-platform frameworks", "native development", "cloud providers",
  "AWS", "Azure", "GCP", "infrastructure as code", "Terraform", "Ansible"
];

// Tech comparisons for the template
const techComparisons = [
  ["MongoDB", "PostgreSQL"],
  ["React", "Vue"],
  ["JavaScript", "TypeScript"],
  ["Python", "Go"],
  ["AWS", "GCP"],
  ["Docker", "Podman"],
  ["REST", "GraphQL"],
  ["Redux", "Context API"],
  ["Angular", "React"],
  ["Node.js", "Deno"],
  ["npm", "yarn"],
  ["Jenkins", "GitHub Actions"],
  ["Kubernetes", "Docker Swarm"],
  ["MySQL", "PostgreSQL"],
  ["Linux", "Windows"],
  ["CSS", "Sass"],
  ["Express", "Fastify"],
  ["Webpack", "Vite"],
  ["PHP", "Node.js"],
  ["Apache", "Nginx"]
];

// Realistic tech news stories
const techStories = [
  {
    title: "The Hidden Cost of Serverless: When Abstractions Leak Money",
    url: "https://cloudeconomics.dev/serverless-cost-leaks",
    domain: "cloudeconomics.dev"
  },
  {
    title: "Show HN: LiteLLM – Run Any LLM with a Unified API",
    url: "https://github.com/litelabs/litellm",
    domain: "github.com/litelabs"
  },
  {
    title: "Building Your Own Home Lab: A Complete Guide",
    url: "https://selfhosted.blog/home-lab-guide",
    domain: "selfhosted.blog"
  },
  {
    title: "Why PostgreSQL Is Eating the Database World",
    url: "https://pganalytics.io/postgresql-dominance",
    domain: "pganalytics.io"
  },
  {
    title: "The Real Reason Your Machine Learning Models Are Failing",
    url: "https://ml-pitfalls.net/model-failure-analysis",
    domain: "ml-pitfalls.net"
  },
  {
    title: "Git Workflows That Actually Scale for Large Teams",
    url: "https://gitbetter.tech/scaling-workflows",
    domain: "gitbetter.tech"
  },
  {
    title: "Reverse Engineering the New Apple Vision OS",
    url: "https://applesecrets.com/vision-os-teardown",
    domain: "applesecrets.com"
  },
  {
    title: "Browser Extensions Are a Privacy Nightmare – Here's Why",
    url: "https://privacyresearch.org/extension-risks",
    domain: "privacyresearch.org"
  },
  {
    title: "How We Cut Our AWS Bill by 78%",
    url: "https://cloudoptimize.dev/aws-cost-reduction",
    domain: "cloudoptimize.dev"
  },
  {
    title: "The Programmer's Guide to Mechanical Keyboards",
    url: "https://keyhacker.com/mechanical-guide",
    domain: "keyhacker.com"
  },
  {
    title: "Next.js 14 Released with Major Performance Improvements",
    url: "https://nextjs.org/blog/next-14",
    domain: "nextjs.org"
  },
  {
    title: "Understanding Web Assembly: The Future of Browser Performance",
    url: "https://webassembly.dev/future-performance",
    domain: "webassembly.dev"
  },
  {
    title: "Rust vs. Go: When to Choose Which",
    url: "https://langbattle.dev/rust-vs-go",
    domain: "langbattle.dev"
  },
  {
    title: "The Psychology of Good API Design",
    url: "https://apidesign.systems/psychology",
    domain: "apidesign.systems"
  },
  {
    title: "Why Our Startup Moved Away from Microservices",
    url: "https://architecturedecisions.dev/microservices-retreat",
    domain: "architecturedecisions.dev"
  },
  {
    title: "TensorFlow 3.0 Preview: What's New and Improved",
    url: "https://tensorflow.blog/version-3-preview",
    domain: "tensorflow.blog"
  },
  {
    title: "The Complete Guide to Modern CSS Layout Techniques",
    url: "https://cssmastery.dev/modern-layouts",
    domain: "cssmastery.dev"
  },
  {
    title: "Security Audit Reveals Critical Flaws in Popular npm Packages",
    url: "https://securityaudit.dev/npm-vulnerabilities",
    domain: "securityaudit.dev"
  },
  {
    title: "How We Optimized Our React App Rendering by 300%",
    url: "https://reactoptimize.dev/rendering-boost",
    domain: "reactoptimize.dev"
  },
  {
    title: "The Future of Remote Work: Lessons from a Fully Distributed Team",
    url: "https://remotework.guide/future-lessons",
    domain: "remotework.guide"
  },
  {
    title: "Understanding Memory Leaks in JavaScript: A Deep Dive",
    url: "https://jsperformance.dev/memory-leaks",
    domain: "jsperformance.dev"
  },
  {
    title: "The Rise of Edge Computing: Why It Matters for Web Development",
    url: "https://edgecomputing.dev/web-importance",
    domain: "edgecomputing.dev"
  },
  {
    title: "GraphQL vs. REST: Real-world Comparisons After 5 Years",
    url: "https://apibattles.dev/graphql-vs-rest-5years",
    domain: "apibattles.dev"
  },
  {
    title: "Building Accessible Web Apps: The Complete Guide",
    url: "https://a11ymastery.dev/complete-guide",
    domain: "a11ymastery.dev"
  },
  {
    title: "Flutter 3.5 Released with Desktop Improvements",
    url: "https://flutterdev.news/3-5-desktop-focus",
    domain: "flutterdev.news"
  },
  {
    title: "How We Migrated 500TB of Data Without Downtime",
    url: "https://databasemigration.dev/zero-downtime-guide",
    domain: "databasemigration.dev"
  },
  {
    title: "The State of WebGPU: A New Era for Graphics on the Web",
    url: "https://webgraphics.dev/webgpu-state",
    domain: "webgraphics.dev"
  },
  {
    title: "Show HN: OpenTask – Open Source Alternative to Asana and Trello",
    url: "https://github.com/opentask/opentask",
    domain: "github.com/opentask"
  },
  {
    title: "Building High-Performance Node.js APIs with Fastify",
    url: "https://nodeguide.dev/fastify-performance",
    domain: "nodeguide.dev"
  },
  {
    title: "The Database Index Guide You've Been Missing",
    url: "https://sqltips.dev/index-guide",
    domain: "sqltips.dev"
  }
];

// Calculate buzzword score for a title
const calculateBuzzwordScore = (title: string): number => {
  let score = 0;
  const lowerTitle = title.toLowerCase();
  
  buzzwords.forEach(buzzword => {
    if (lowerTitle.includes(buzzword.toLowerCase())) {
      score += 1;
    }
  });
  
  return score;
};

// Generate realistic comment text
const generateCommentText = (): string => {
  let template = commentTemplates[Math.floor(Math.random() * commentTemplates.length)];
  
  // Replace {topic} placeholder if present
  if (template.includes("{topic}")) {
    const topic = techTopics[Math.floor(Math.random() * techTopics.length)];
    template = template.replace("{topic}", topic);
  }
  
  // Replace tech comparison placeholders if present
  if (template.includes("{tech1}") && template.includes("{tech2}")) {
    const comparison = techComparisons[Math.floor(Math.random() * techComparisons.length)];
    template = template.replace("{tech1}", comparison[0]).replace("{tech2}", comparison[1]);
  }
  
  return template;
};

// We'll simulate an API but later integrate with Claude API
export const fetchTopStories = async (): Promise<Story[]> => {
  // Simulated delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  // Generate 30 simulated stories with our tech story titles
  return Array.from({ length: 30 }, (_, i) => {
    const storyInfo = techStories[i % techStories.length];
    const username = techUsernames[Math.floor(Math.random() * techUsernames.length)];
    const buzzwordScore = calculateBuzzwordScore(storyInfo.title);
    
    return {
      id: i + 1,
      title: storyInfo.title,
      url: storyInfo.url,
      score: Math.floor(Math.random() * 500) + 10,
      time: Math.floor(Date.now() / 1000) - Math.floor(Math.random() * 86400),
      by: username,
      descendants: Math.floor(Math.random() * 100),
      kids: Array.from(
        { length: Math.floor(Math.random() * 10) + 1 },
        (_, j) => 1000 + i * 100 + j
      ),
      buzzwordScore,
    };
  });
};

export const fetchStory = async (id: number): Promise<Story> => {
  // Simulated delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  const storyIndex = (id - 1) % techStories.length;
  const storyInfo = techStories[storyIndex];
  const username = techUsernames[Math.floor(Math.random() * techUsernames.length)];
  const buzzwordScore = calculateBuzzwordScore(storyInfo.title);
  
  return {
    id,
    title: storyInfo.title,
    url: storyInfo.url,
    score: Math.floor(Math.random() * 500) + 10,
    time: Math.floor(Date.now() / 1000) - Math.floor(Math.random() * 86400),
    by: username,
    descendants: Math.floor(Math.random() * 100),
    kids: Array.from(
      { length: Math.floor(Math.random() * 20) + 5 },
      (_, j) => 1000 + id * 100 + j
    ),
    buzzwordScore,
  };
};

export const fetchComments = async (ids: number[]): Promise<Comment[]> => {
  // Simulated delay
  await new Promise((resolve) => setTimeout(resolve, 700));
  
  return ids.map((id) => {
    const username = techUsernames[Math.floor(Math.random() * techUsernames.length)];
    const commentText = generateCommentText();
    
    return {
      id,
      text: commentText,
      time: Math.floor(Date.now() / 1000) - Math.floor(Math.random() * 86400),
      by: username,
      parent: Math.floor(id / 100),
      kids: Math.random() > 0.7
        ? Array.from(
            { length: Math.floor(Math.random() * 5) },
            (_, j) => id * 10 + j + 1
          )
        : undefined,
    };
  });
};

// Function to get formatted time
export const getTimeAgo = (timestamp: number): string => {
  const seconds = Math.floor(Date.now() / 1000) - timestamp;
  
  if (seconds < 60) return `${seconds} seconds ago`;
  
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  
  const days = Math.floor(hours / 24);
  return `${days} day${days > 1 ? 's' : ''} ago`;
};
