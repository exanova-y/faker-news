
import { useState } from "react";
import { Comment } from "@/types";
import { getTimeAgo } from "@/lib/api";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommentItemProps {
  comment: Comment;
  children?: React.ReactNode;
  isChild?: boolean;
}

const CommentItem = ({ comment, children, isChild = false }: CommentItemProps) => {
  const [collapsed, setCollapsed] = useState(false);
  
  // Detect strongly opinionated comments by looking for certain phrases
  const isStrongOpinion = comment.text.includes("only viable") || 
    comment.text.includes("never be") || 
    comment.text.includes("blindly") ||
    comment.text.includes("snake oil") ||
    comment.text.includes("universally misunderstood") ||
    comment.text.includes("obsession") ||
    comment.text.includes("silver bullet") ||
    comment.text.includes("highway robbery") ||
    comment.text.includes("indefensible") ||
    comment.text.includes("shocking") ||
    comment.text.includes("lying") ||
    comment.text.includes("overrated") ||
    comment.text.toLowerCase().includes("completely ignores") ||
    comment.text.toLowerCase().includes("classic") ||
    comment.text.toLowerCase().includes("reeks of") ||
    comment.text.toLowerCase().includes("disaster");

  return (
    <div className={cn("comment-item border-l-4 pl-3 py-2", 
      isChild ? "border-gray-200 ml-4 mt-3" : "border-gray-300",
      isStrongOpinion ? "border-l-amber-500" : "")}
    >
      <div className="flex items-center gap-2 text-xs text-hn-subtext">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-hn-subtext hover:text-hn-orange transition-colors"
          aria-label={collapsed ? "Expand comment" : "Collapse comment"}
        >
          {collapsed ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronUp className="h-4 w-4" />
          )}
        </button>
        
        <span className={cn("font-medium", isStrongOpinion ? "text-hn-orange" : "")}>
          {comment.by}
        </span>
        <span className="px-1">·</span>
        <span>{getTimeAgo(comment.time)}</span>
      </div>
      
      {!collapsed && (
        <>
          <div 
            className={cn(
              "text-hn-title text-sm mt-1 pl-6 pb-2",
              isStrongOpinion ? "font-medium" : ""
            )}
          >
            {comment.text}
          </div>
          
          {children && (
            <div className="mt-2">
              {children}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CommentItem;
