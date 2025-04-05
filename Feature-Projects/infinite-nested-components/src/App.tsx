import Comment from "./components/Comment.tsx";
import useFunctions from "./components/useAddComment.tsx";
import { commentData } from "./data/CommentsData.ts";
import { useState } from "react";

interface CommentType {
  id: string;
  text: string;
  replies: CommentType[]; // Recursive structure for nested comments
}

function App() {
  const [newComment, setNewComment] = useState("");
  const [comment, setComment] = useState<CommentType>(commentData);
  const { addComments } = useFunctions();

  const handleComments = (commentId: string, newComment: CommentType) => {
    // console.log(commentId, newComment, 'handleComments');
    const updatedComment = addComments(comment, commentId, newComment);
    setComment(updatedComment);
  };

  const handleSubmit = () => {
    if (newComment) {
      //logic
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <textarea
          value={newComment}
          rows={3}
          cols={50}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment"
          className="w-1/2 p-4 self-center m-3 "
        />
        <button
          className="bg-blue-500 rounded-full px-4 py-2 w-1/12 self-center text-white"
          onClick={handleSubmit}
        >
          Add Comment
        </button>
      </div>
      <Comment
        key={comment.id}
        data={comment}
        handleComments={handleComments}
      />
    </>
  );
}

export default App;
