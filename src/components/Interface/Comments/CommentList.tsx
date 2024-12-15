import { useCommentStore } from "../../../store/commentStore";
import { CommentBubble } from "./CommentBubble";

export function CommentList() {
  const comments = useCommentStore((state) => state.comments);

  return (
    <>
      {comments.map((comment) => (
        <CommentBubble
          key={comment.id}
          text={comment.text}
          author={comment.author}
          position={comment.position}
        />
      ))}
    </>
  );
}
