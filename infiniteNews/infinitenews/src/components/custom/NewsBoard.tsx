import {useEffect} from 'react'

function NewsBoard() {
  //newsapi is banned for bangladesh. finding another api here.
    useEffect(() =>{
        const url={import.meta.env.NEWS_URL};
        fetch(url)
    })
  return (
    <div>NewsBoard</div>
  )
}

export default NewsBoard