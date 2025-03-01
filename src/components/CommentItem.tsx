
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

  return (
    <div className={cn("comment-item", isChild && "ml-4 mt-3")}>
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
        
        <span className="font-medium">{comment.by}</span>
        <span className="px-1">·</span>
        <span>{getTimeAgo(comment.time)}</span>
      </div>
      
      {!collapsed && (
        <>
          <div 
            className="text-hn-title text-sm mt-1 pl-6 pb-2"
            dangerouslySetInnerHTML={{ __html: comment.text }}
          />
          
          {children && (
            <div className={cn(
              "comment-thread transition-all duration-200",
              isChild ? "border-l-hn-divider/70" : "border-l-hn-divider"
            )}>
              {children}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CommentItem;
