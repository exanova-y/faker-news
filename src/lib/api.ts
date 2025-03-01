import { Story, Comment } from "@/types";

// List of tech buzzwords to detect in titles
const buzzwords = [
  "serverless", "cloud", "AI", "ML", "blockchain", "crypto", "web3", 
  "microservices", "DevOps", "containers", "kubernetes", "docker", "GitOps", 
  "NoSQL", "agile", "CI/CD", "MVP", "scale", "optimization", "architecture",
  "framework", "stack", "API", "automation", "performance", "UX", "UI",
  "responsive", "reactive", "native", "paradigm", "algorithm", "neural",
  "deep learning", "data", "analytics", "dashboard", "metrics", "vision", 
  "future", "innovation", "disruption", "transform", "revolution",
  "inference", "compute", "latency", "throughput", "GPUs", "TPUs", "ASICs"
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
  "venturecapitalist", "techlead", "productowner", "scrummaster", "agilecoach",
  "mlresearcher", "gpumaniac", "asicminer", "quantumtheorist", "aiethicist"
];

// Inference debate specific comments
const inferenceDebateComments = [
  "Edge computing is the only viable approach for real-time inference. Waiting for API calls to centralized servers will never be good enough for mission-critical applications.",
  "The entire AI industry is blindly worshipping at the altar of GPU acceleration without questioning if these power-hungry monsters are actually needed for most use cases.",
  "I've been running inference on consumer hardware for years. The cloud providers have convinced everyone they need specialized hardware when reality is much different.",
  "Anyone claiming you can do high-quality real-time inference on a phone is selling snake oil. The physics simply don't work out for the compute requirements.",
  "The latency-accuracy tradeoff is universally misunderstood. 90% of companies would be better off with a simpler model that runs 10x faster.",
  "Our team switched from cloud inference to local and saved $2.3M annually. The obsession with running everything in the cloud is financially irresponsible.",
  "Quantization is not a silver bullet! I'm tired of seeing papers claim 'minimal accuracy loss' when real-world performance drops by double digits.",
  "Inference providers are charging 100x the actual compute cost and nobody is calling them out on this highway robbery.",
  "Most of the 'innovation' in model compression is just rehashing techniques from the 1990s with fancier marketing.",
  "The environmental impact of these massive GPU farms for inference is indefensible. We're burning the planet to run chatbots.",
  "Apple's ML hardware strategy proves that custom silicon, not general-purpose GPUs, is the future of efficient inference.",
  "I've benchmarked every major cloud inference provider, and the performance variability is shocking. You're paying premium prices for inconsistent service.",
  "The real bottleneck for most inference workloads isn't compute - it's memory bandwidth. The industry is optimizing for the wrong thing.",
  "Anyone claiming their API has 'human-level response times' is either lying or has a very generous definition of human response time.",
  "We need to stop pretending that open-source models running locally can compete with proprietary cloud models. The performance gap is enormous and growing.",
  "The opposite is true - open source models on consumer hardware are already outperforming cloud APIs from last year, and the gap is narrowing rapidly.",
  "If you're not running ONNX for production inference, you're leaving 40% performance on the table. TensorFlow and PyTorch are research frameworks, not production tools.",
  "ONNX is just another abstraction layer that adds complexity without solving the fundamental issues in deployment.",
  "TPUs are the most overrated hardware in AI. Unless you're Google, their real-world performance advantages rarely justify the development overhead.",
  "The companies achieving actual real-time inference at scale aren't writing Medium articles about it - they're filing patents and keeping their methods secret."
];

// Topic-specific follow-up comments for the inference debate
const inferenceFollowupComments = [
  "That's a classic cloud provider talking point. Have you actually measured the TCO including bandwidth costs, API fees, and engineering time?",
  "This perspective reeks of academic thinking with no real-world deployment experience. Try maintaining that position when serving millions of requests per day.",
  "I implemented exactly what you're suggesting at my previous company and it was a disaster. Latency spikes during peak hours made the product unusable.",
  "Your benchmarks must be using toy models. With any production-scale transformer, the numbers don't support that conclusion at all.",
  "This completely ignores the security implications. Running inference in untrusted environments introduces vulnerabilities no amount of performance can justify.",
  "The hardware landscape is changing so rapidly that any architecture decisions based on today's benchmarks will be obsolete in 6 months.",
  "What people miss in this debate is that most business use cases don't need sub-100ms inference. They need reliability and consistent pricing.",
  "Have you actually looked at the latest NVIDIA H100 benchmarks? The performance per watt improvement is making all these distributed approaches irrelevant.",
  "The mobile hardware advocates always conveniently ignore how much pre-processing and model pruning they had to do to make their demos work.",
  "You're optimizing for the wrong metric. User experience should drive these decisions, not theoretical throughput numbers on synthetic benchmarks."
];

// Create an inference debate article as the first story
const inferenceDebateStory = {
  title: "The Great Inference Debate: Cloud vs. Edge vs. On-Device Compute",
  url: "https://aifuture.tech/inference-compute-debate",
  domain: "aifuture.tech",
  debateThread: true  // Mark this as our special debate thread
};

// Realistic tech news stories
const techStories = [
  inferenceDebateStory,  // Add our debate story as the first one
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

// Generate a comment for the inference debate thread
const generateInferenceDebateComment = (isTopLevel: boolean): string => {
  if (isTopLevel) {
    return inferenceDebateComments[Math.floor(Math.random() * inferenceDebateComments.length)];
  } else {
    return inferenceFollowupComments[Math.floor(Math.random() * inferenceFollowupComments.length)];
  }
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
      descendants: i === 0 ? 35 : Math.floor(Math.random() * 100), // More comments for our debate thread
      kids: Array.from(
        { length: i === 0 ? 12 : Math.floor(Math.random() * 10) + 1 }, // More top-level comments for debate
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
  const isDebateThread = storyIndex === 0; // Check if this is our inference debate thread
  
  return {
    id,
    title: storyInfo.title,
    url: storyInfo.url,
    score: Math.floor(Math.random() * 500) + 10,
    time: Math.floor(Date.now() / 1000) - Math.floor(Math.random() * 86400),
    by: username,
    descendants: isDebateThread ? 35 : Math.floor(Math.random() * 100),
    kids: Array.from(
      { length: isDebateThread ? 12 : Math.floor(Math.random() * 20) + 5 },
      (_, j) => 1000 + id * 100 + j
    ),
    buzzwordScore,
  };
};

export const fetchComments = async (ids: number[]): Promise<Comment[]> => {
  // Simulated delay
  await new Promise((resolve) => setTimeout(resolve, 700));
  
  // Determine if these are comments for the inference debate thread
  const isInferenceDebateThread = ids.some(id => id >= 1000 && id < 1100);
  
  return ids.map((id) => {
    const username = techUsernames[Math.floor(Math.random() * techUsernames.length)];
    // Generate different comment text based on thread type
    const commentText = isInferenceDebateThread 
      ? generateInferenceDebateComment(id < 1100) // Top level comments have IDs 1000-1099
      : generateCommentText();
    
    // For inference debate thread, add more nested comments to create deeper discussions
    const hasChildren = isInferenceDebateThread 
      ? Math.random() > 0.3 // 70% chance of having children in debate thread
      : Math.random() > 0.7; // 30% chance in normal threads
    
    const childrenCount = isInferenceDebateThread 
      ? Math.floor(Math.random() * 4) + 1 // 1-5 children for debate comments
      : Math.floor(Math.random() * 3); // 0-3 children for normal comments
    
    return {
      id,
      text: commentText,
      time: Math.floor(Date.now() / 1000) - Math.floor(Math.random() * 86400),
      by: username,
      parent: Math.floor(id / 100),
      kids: hasChildren
        ? Array.from(
            { length: childrenCount },
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
