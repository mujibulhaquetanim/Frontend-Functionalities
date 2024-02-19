import { useEffect, useState } from "react";
import NewItem from "./NewItem";

interface category {
  category: string;
}

interface newsApi {
  description:string;
  title:string;

}


const NewsBoard: React.FC<category> = ({ category }) => {
  const [article, setArticle] = useState<newsApi[]>([]);
  const [NextPage, setNextPage] = useState<string>("");
  // useEffect(() => {
  //   const url = `${import.meta.env.VITE_NEWS_URL}&country=${"in"}&category={category}`;
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setArticle(data.results);
  //       setNextPage(data.nextPage);
  //       console.log("News data:", data.results);
  //       console.log("News nextPageId:", data.nextPage);
  //     });
  // }, []);
  return (
    <div className="flex flex-wrap">
    {article.map((news,index)=>{
      return (
        <NewItem key={index} article={news.description} title={news.title} page={NextPage} />
      );
    })}
    </div>
  );
};

export default NewsBoard;
