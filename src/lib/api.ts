
import { Story, Comment } from "@/types";

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

// We'll simulate an API but later integrate with Claude API
export const fetchTopStories = async (): Promise<Story[]> => {
  // Simulated delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  // Generate 30 simulated stories with our tech story titles
  return Array.from({ length: 30 }, (_, i) => {
    const storyInfo = techStories[i % techStories.length];
    return {
      id: i + 1,
      title: storyInfo.title,
      url: storyInfo.url,
      score: Math.floor(Math.random() * 500) + 10,
      time: Math.floor(Date.now() / 1000) - Math.floor(Math.random() * 86400),
      by: `user${Math.floor(Math.random() * 1000)}`,
      descendants: Math.floor(Math.random() * 100),
      kids: Array.from(
        { length: Math.floor(Math.random() * 10) + 1 },
        (_, j) => 1000 + i * 100 + j
      ),
    };
  });
};

export const fetchStory = async (id: number): Promise<Story> => {
  // Simulated delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  const storyIndex = (id - 1) % techStories.length;
  const storyInfo = techStories[storyIndex];
  
  return {
    id,
    title: storyInfo.title,
    url: storyInfo.url,
    score: Math.floor(Math.random() * 500) + 10,
    time: Math.floor(Date.now() / 1000) - Math.floor(Math.random() * 86400),
    by: `user${Math.floor(Math.random() * 1000)}`,
    descendants: Math.floor(Math.random() * 100),
    kids: Array.from(
      { length: Math.floor(Math.random() * 20) + 5 },
      (_, j) => 1000 + id * 100 + j
    ),
  };
};

export const fetchComments = async (ids: number[]): Promise<Comment[]> => {
  // Simulated delay
  await new Promise((resolve) => setTimeout(resolve, 700));
  
  return ids.map((id) => ({
    id,
    text: `This is a simulated comment #${id}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    time: Math.floor(Date.now() / 1000) - Math.floor(Math.random() * 86400),
    by: `user${Math.floor(Math.random() * 1000)}`,
    parent: Math.floor(id / 100),
    kids: Math.random() > 0.7
      ? Array.from(
          { length: Math.floor(Math.random() * 5) },
          (_, j) => id * 10 + j + 1
        )
      : undefined,
  }));
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
