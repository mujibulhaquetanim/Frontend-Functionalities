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

  console.log(comment);
  
  return (
    <>
      <Comment key={comment.id} data={comment}/>
    </>
  )
}

export default App
