
import { useState, useEffect } from "react";
import { Comment } from "@/types";
import { fetchComments } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import CommentItem from "./CommentItem";
import { Skeleton } from "@/components/ui/skeleton";

interface CommentsSectionProps {
  storyId: number;
  commentIds?: number[];
}

const CommentsSection = ({ storyId, commentIds = [] }: CommentsSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadComments = async () => {
      if (!commentIds?.length) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const fetchedComments = await fetchComments(commentIds);
        setComments(fetchedComments);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
        toast({
          title: "Error",
          description: "Failed to load comments. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadComments();
  }, [commentIds, toast]);

  if (loading) {
    return (
      <div className="mt-6 space-y-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-16 w-full mt-2" />
          </div>
        ))}
      </div>
    );
  }

  if (!comments.length) {
    return <div className="text-center py-10 text-hn-subtext">No comments yet</div>;
  }

  // Renderer for comment tree
  const renderCommentTree = (comment: Comment) => {
    const childComments = comment.kids
      ? comments.filter((c) => comment.kids?.includes(c.id))
      : [];

    return (
      <CommentItem key={comment.id} comment={comment}>
        {childComments.map((childComment) => (
          <CommentItem key={childComment.id} comment={childComment} isChild>
            {childComment.kids && (
              <div className="mt-2">
                {childComment.kids.map((kidId) => {
                  const grandchildComment = comments.find((c) => c.id === kidId);
                  return grandchildComment ? (
                    <CommentItem 
                      key={grandchildComment.id} 
                      comment={grandchildComment} 
                      isChild
                    />
                  ) : null;
                })}
              </div>
            )}
          </CommentItem>
        ))}
      </CommentItem>
    );
  };

  const topLevelComments = comments.filter(
    (comment) => comment.parent === storyId
  );

  return (
    <div className="mt-6 space-y-6">
      {topLevelComments.map(renderCommentTree)}
    </div>
  );
};

export default CommentsSection;
