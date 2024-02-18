import {useEffect} from 'react'
import NewItem from './NewItem';

function NewsBoard() {
    // useEffect(() =>{
    //     const url=`${import.meta.env.VITE_NEWS_URL}&country=${"us"}`;
    //     fetch(url).then(response => response.json()).then((data) => {
    //         console.log('News data:', data);
    // })},[]);
  return (
    <NewItem/>
  )
}

export default NewsBoard;