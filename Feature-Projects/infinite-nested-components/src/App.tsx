import Comment from './components/Comment.tsx';
import { commentData } from './data/CommentsData.ts';
import { useState } from 'react';

interface CommentType {
  id: string;
  text: string;
  replies: CommentType[]; // Recursive structure for nested comments
}

function App() {
  const [comment, setComment] = useState<CommentType>(commentData);

  const handleComments = (commentId: string, newComment: CommentType)=>{
    console.log(commentId, newComment, 'handleComments');
  }
  
  return (
    <>
      <Comment key={comment.id} data={comment} handleComments={handleComments}/>
    </>
  )
}

export default App
