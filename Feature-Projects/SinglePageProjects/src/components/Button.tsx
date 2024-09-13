import React, { useState } from 'react'

interface MyButtonProps{
  text: string;
  onClick: ()=> void;
}

const Button: React.FC <MyButtonProps> = (props)=>{
  const {text, onClick}=props;
  return (
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={onClick}>{text}</button>
  )
};

export default Button