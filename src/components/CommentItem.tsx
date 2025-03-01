
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
    <div className={cn("comment-item border-l-4 pl-3 py-2", 
      isChild ? "border-gray-200 ml-4 mt-3" : "border-gray-300")}
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
        
        <span className="font-medium">{comment.by}</span>
        <span className="px-1">·</span>
        <span>{getTimeAgo(comment.time)}</span>
      </div>
      
      {!collapsed && (
        <>
          <div 
            className="text-hn-title text-sm mt-1 pl-6 pb-2"
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
