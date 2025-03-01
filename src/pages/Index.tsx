
import { useState, useEffect } from "react";
import { Story } from "@/types";
import { fetchTopStories } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import HNLayout from "@/components/HNLayout";
import StoryItem from "@/components/StoryItem";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadStories = async () => {
      try {
        setLoading(true);
        const fetchedStories = await fetchTopStories();
        setStories(fetchedStories);
      } catch (error) {
        console.error("Failed to fetch stories:", error);
        toast({
          title: "Error",
          description: "Failed to load stories. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadStories();
  }, [toast]);

  return (
    <HNLayout>
      <h1 className="text-xl font-semibold mb-4">Faker News</h1>
      
      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex items-start gap-2">
              <Skeleton className="h-4 w-4 mt-1" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="divide-y divide-hn-divider">
          {stories.map((story, index) => (
            <StoryItem key={story.id} story={story} rank={index + 1} />
          ))}
        </div>
      )}
    </HNLayout>
  );
};

export default Index;
