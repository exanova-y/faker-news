
import { useState } from "react";
import { Comment } from "@/types";
import { getTimeAgo } from "@/lib/api";
import { ChevronDown, ChevronUp, MessageSquare, AlertTriangle } from "lucide-react";
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

  // Determine persona based on username and comment content
  const getPersona = () => {
    const username = comment.by.toLowerCase();
    
    if (username.includes("cloud") || 
        username.includes("data") || 
        comment.text.includes("API") || 
        comment.text.includes("cloud")) {
      return "cloud-advocate";
    } else if (username.includes("edge") || 
              username.includes("system") || 
              comment.text.includes("edge computing") || 
              comment.text.includes("latency")) {
      return "edge-proponent";
    } else if (username.includes("mobile") || 
              username.includes("embed") || 
              username.includes("device") || 
              comment.text.includes("on-device") || 
              comment.text.includes("phone")) {
      return "on-device-supporter";
    } else if (username.includes("security") || 
              comment.text.includes("security") || 
              comment.text.includes("vulnerability")) {
      return "security-focused";
    } else if (username.includes("cost") || 
              username.includes("budget") || 
              comment.text.includes("cost") || 
              comment.text.includes("expensive") || 
              comment.text.includes("saving")) {
      return "cost-optimizer";
    } else if (username.includes("research") || 
              username.includes("academic") || 
              comment.text.includes("paper") || 
              comment.text.includes("research")) {
      return "academic-researcher";
    } else {
      return "neutral-observer";
    }
  };

  const persona = getPersona();
  
  // Get border and text colors based on persona
  const getPersonaStyles = () => {
    switch(persona) {
      case "cloud-advocate":
        return { border: "border-l-blue-500", text: "text-blue-700" };
      case "edge-proponent":
        return { border: "border-l-green-500", text: "text-green-700" };
      case "on-device-supporter":
        return { border: "border-l-purple-500", text: "text-purple-700" };
      case "security-focused":
        return { border: "border-l-red-500", text: "text-red-700" };
      case "cost-optimizer":
        return { border: "border-l-teal-500", text: "text-teal-700" };
      case "academic-researcher":
        return { border: "border-l-indigo-500", text: "text-indigo-700" };
      case "neutral-observer":
      default:
        return isStrongOpinion 
          ? { border: "border-l-amber-500", text: "text-hn-orange" }
          : { border: "border-gray-300", text: "text-hn-title" };
    }
  };

  const styles = getPersonaStyles();

  return (
    <div className={cn("comment-item border-l-4 pl-3 py-2", 
      isChild ? "border-gray-200 ml-4 mt-3" : styles.border)}
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
        
        <span className={cn("font-medium", styles.text)}>
          {comment.by}
        </span>
        
        {isStrongOpinion && (
          <span className="inline-flex items-center">
            <AlertTriangle className="h-3 w-3 text-amber-500 ml-1" />
          </span>
        )}
        
        <span className="px-1">·</span>
        <span>{getTimeAgo(comment.time)}</span>
      </div>
      
      {!collapsed && (
        <>
          <div 
            className={cn(
              "text-sm mt-1 pl-6 pb-2",
              isStrongOpinion ? "font-medium" : "",
              styles.text
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
