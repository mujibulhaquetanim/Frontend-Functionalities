import {useEffect,useState} from "react";
import NewsItem from "@/components/custom/NewsItem";

interface category {
  category: string;
}

interface newsApi {
    description: string;
    title: string;
    src: string;
    pubDate: string;
    article_id: string;
  }

const IOnewsApi:React.FC<category>=({category})=> {
    const [NextPage, setNextPage] = useState<string>("");
    const [article, setArticle] = useState<newsApi[]>([]);

    useEffect(() => {
        console.log(category);
        const url = `${
          import.meta.env.VITE_IO_NEWS
        }&country=${"in"}&category=${category}`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setArticle(data.results);
            setNextPage(data.nextPage);
            console.log("News data:", data.results);
            console.log("News nextPageId:", data.nextPage);
          });
      }, [category]);

  return (
    <div className="flex flex-wrap">
      {article.map((news,index) => {
        return (
          <NewsItem
            key={index}
            article={news.description}
            title={news.title}
            src={news.src}
            pubDate={news.pubDate}
          />
        );
      })}
    </div>
  );
}
export default IOnewsApi;