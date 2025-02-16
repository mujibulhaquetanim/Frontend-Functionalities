import Comment from './components/Comment.tsx';
import useFunctions from './components/useAddComment.tsx';
import { commentData } from './data/CommentsData.ts';
import { useState } from 'react';

interface CommentType {
  id: string;
  text: string;
  replies: CommentType[]; // Recursive structure for nested comments
}

function App() {
  const [comment, setComment] = useState<CommentType>(commentData);
  const {addComments} = useFunctions();

  const handleComments = (commentId: string, newComment: CommentType)=>{
    // console.log(commentId, newComment, 'handleComments');
    const updatedComment = addComments(comment, commentId, newComment);
    setComment(updatedComment)

  }
  
  return (
    <>
      <Comment key={comment.id} data={comment} handleComments={handleComments}/>
    </>
  )
}

export default App
