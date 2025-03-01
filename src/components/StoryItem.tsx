
import { Link } from "react-router-dom";
import { Story } from "@/types";
import { getTimeAgo } from "@/lib/api";
import { ChevronUp, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface StoryItemProps {
  story: Story;
  rank?: number;
}

const StoryItem = ({ story, rank }: StoryItemProps) => {
  const hostname = story.url ? new URL(story.url).hostname.replace('www.', '') : '';

  return (
    <div className="hn-story-row flex gap-2 group">
      {rank && (
        <div className="w-8 text-right text-hn-subtext flex-shrink-0 pt-0.5">
          {rank}.
        </div>
      )}
      
      <div className="flex flex-col">
        <div className="flex items-start gap-1.5">
          <button 
            className="hn-vote-button pt-1"
            aria-label="Upvote"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
          
          <div>
            <div className="flex items-center gap-1.5">
              <Link to={`/story/${story.id}`} className="hn-story-title text-base">
                {story.title}
              </Link>
              
              {hostname && (
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-xs text-hn-subtext hover:text-hn-orange transition-colors"
                >
                  <span className="hidden sm:inline-block">({hostname})</span>
                  <ExternalLink className="h-3 w-3 ml-0.5" />
                </a>
              )}
            </div>
            
            <div className="flex items-center text-xs text-hn-subtext mt-0.5 gap-1">
              <span>{story.score} points</span>
              <span className="mx-1">·</span>
              <span>by {story.by}</span>
              <span className="mx-1">·</span>
              <span>{getTimeAgo(story.time)}</span>
              <span className="mx-1">·</span>
              <Link
                to={`/story/${story.id}`}
                className="hover:underline hover:text-hn-orange"
              >
                {story.descendants || 0} comment{story.descendants !== 1 ? 's' : ''}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryItem;
