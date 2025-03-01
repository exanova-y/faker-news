
import { useState, useEffect } from "react";
import { Comment } from "@/types";
import { fetchComments } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import HNLayout from "@/components/HNLayout";
import CommentItem from "@/components/CommentItem";
import { Skeleton } from "@/components/ui/skeleton";

const CommentsPage = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadComments = async () => {
      try {
        setLoading(true);
        // Generate some random comment IDs for simulation
        const randomIds = Array.from(
          { length: 20 },
          (_, i) => 2000 + i
        );
        const fetchedComments = await fetchComments(randomIds);
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
  }, [toast]);

  return (
    <HNLayout>
      <h1 className="text-xl font-semibold mb-4">Recent Comments</h1>
      
      {loading ? (
        <div className="space-y-6">
          {Array.from({ length: 7 }).map((_, index) => (
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
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </HNLayout>
  );
};

export default CommentsPage;
