import {useEffect} from 'react'

function NewsBoard() {
  //newsapi is banned for bangladesh. finding another api here.
    useEffect(() =>{
        const url=`${import.meta.env.VITE_NEWS_URL}&country=${"us"}`;
        fetch(url).then(response => response.json()).then((data) => {
            console.log('News data:', data);
    })},[]);
  return (
    <div>look at the console</div>
  )
}

export default NewsBoard;