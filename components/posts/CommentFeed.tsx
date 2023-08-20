import { CommentItem } from "./CommentItem";

interface CommentFeedProps {
  comments?: Record<string, any>[];
}

export const CommentFeed: React.FC<CommentFeedProps> = ({ comments = [] }) => {
  return (
    <>
      {comments?.map((comment: Record<string, any>) => (
        <CommentItem key={comment.id} data={comment} />
      ))}
    </>
  );
};
