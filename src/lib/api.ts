
import { Story, Comment } from "@/types";

// We'll simulate an API but later integrate with Claude API
export const fetchTopStories = async (): Promise<Story[]> => {
  // Simulated delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  // Generate 30 simulated stories
  return Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Simulated HN Story #${i + 1}: The Future of Technology`,
    url: `https://example.com/story-${i + 1}`,
    score: Math.floor(Math.random() * 500) + 10,
    time: Math.floor(Date.now() / 1000) - Math.floor(Math.random() * 86400),
    by: `user${Math.floor(Math.random() * 1000)}`,
    descendants: Math.floor(Math.random() * 100),
    kids: Array.from(
      { length: Math.floor(Math.random() * 10) + 1 },
      (_, j) => 1000 + i * 100 + j
    ),
  }));
};

export const fetchStory = async (id: number): Promise<Story> => {
  // Simulated delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  return {
    id,
    title: `Detailed Simulated Story #${id}`,
    url: `https://example.com/story-${id}`,
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
