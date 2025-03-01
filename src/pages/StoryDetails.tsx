
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Story } from "@/types";
import { fetchStory } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import HNLayout from "@/components/HNLayout";
import CommentsSection from "@/components/CommentsSection";
import { ChevronUp, ArrowLeft, ExternalLink } from "lucide-react";
import { getTimeAgo } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";

const StoryDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadStory = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const storyId = parseInt(id);
        const fetchedStory = await fetchStory(storyId);
        setStory(fetchedStory);
      } catch (error) {
        console.error("Failed to fetch story:", error);
        toast({
          title: "Error",
          description: "Failed to load story. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadStory();
  }, [id, toast]);

  const hostname = story?.url ? new URL(story.url).hostname.replace('www.', '') : '';

  return (
    <HNLayout>
      <Link 
        to="/" 
        className="inline-flex items-center text-sm text-hn-subtext hover:text-hn-orange transition-colors mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to stories
      </Link>

      {loading ? (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-4" />
            <Skeleton className="h-8 w-3/4" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-1/2" />
            <Skeleton className="h-5 w-1/3" />
          </div>
        </div>
      ) : story ? (
        <div>
          <div className="flex items-start gap-2">
            <button className="hn-vote-button pt-1">
              <ChevronUp className="h-5 w-5" />
            </button>
            
            <div>
              <h1 className="text-xl font-semibold text-hn-title">{story.title}</h1>
              
              {hostname && (
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-hn-subtext hover:text-hn-orange transition-colors mt-1"
                >
                  {hostname}
                  <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </a>
              )}
              
              <div className="flex items-center text-sm text-hn-subtext mt-2">
                <span>{story.score} points</span>
                <span className="mx-1.5">·</span>
                <span>by {story.by}</span>
                <span className="mx-1.5">·</span>
                <span>{getTimeAgo(story.time)}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-lg font-medium mb-2">
              {story.descendants || 0} Comment{story.descendants !== 1 ? 's' : ''}
            </h2>
            <CommentsSection storyId={story.id} commentIds={story.kids} />
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-hn-title">Story not found</h2>
          <p className="text-hn-subtext mt-2">
            The story you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/"
            className="inline-block mt-4 text-hn-orange hover:underline"
          >
            Return to home page
          </Link>
        </div>
      )}
    </HNLayout>
  );
};

export default StoryDetails;
