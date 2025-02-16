import { useState } from "react";
import "./comment.css";

export interface CommentType {
  id: string;
  text: string;
  replies: CommentType[];
}

function Comment({
  data,
  handleComments,
}: {
  data: CommentType;
  handleComments: (commentId: string, newComment: CommentType) => void;
}) {
  const [showInput, setShowInput] = useState(false);
  const [commentBody, setCommentBody] = useState("");
  console.log(`Rendering comment with ID: ${data.id}`);

  const handleAddComment = () => {
    const newComment: CommentType = {
      id: Date.now().toString(),
      text: commentBody,
      replies: [],
    };
    handleComments(data.id, newComment);
    setShowInput(false);
  };

  return (
    <div>
      <div className={`${data.text && "comment-container"}`}>
        <h3>{data.text}</h3>
        <div>
          {showInput && (
            <input
              aria-label="Comment input"
              type="text"
              autoFocus
              onChange={(e) => setCommentBody(e.target.value)}
            />
          )}
          {showInput ? (
            <div>
              <button onClick={handleAddComment}>Add</button>
              <button onClick={() => setShowInput(false)}>Cancel</button>
            </div>
          ) : data.text ? (
            <div>
              <button onClick={() => setShowInput(true)}>Reply</button>
              <button>Delete</button>
            </div>
          ) : null}
        </div>
      </div>

      <div className="pl-7">
        {data.replies?.map((reply) => (
          <Comment
            key={reply.id}
            data={reply}
            handleComments={handleComments}
          />
        ))}
      </div>
    </div>
  );
}

export default Comment;
