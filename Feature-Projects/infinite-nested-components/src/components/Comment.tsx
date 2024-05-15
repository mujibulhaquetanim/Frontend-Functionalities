import { useState } from "react";
import "./comment.css";

interface CommentType {
  id: string;
  text: string;
  replies: CommentType[];
}

function Comment({ data }: { data: CommentType }) {
  const [showInput, setShowInput] = useState(false);
  const [commentBody, setCommentBody] = useState("");
  console.log(`Rendering comment with ID: ${data.id}`);
  return (
    <div>
      <div className="comment-container">
        <h3>{data.text}</h3>
        <div>
          {showInput && (
            <input
              type="text"
              autoFocus
              onChange={(e) => setCommentBody(e.target.value)}
            />
          )}
          {showInput ? (
            <div>
              <button>Add</button>
              <button onClick={() => setShowInput(false)}>Cancel</button>
            </div>
          ) : (
            <div>
              <button onClick={() => setShowInput(true)}>Reply</button>
              <button>Delete</button>
            </div>
          )}
        </div>
      </div>

      <div className="pl-7">
        {data.replies?.map((reply) => (
          <Comment key={reply.id} data={reply} />
        ))}
      </div>
    </div>
  );
}

export default Comment;
