import { useEffect, useState } from "react";
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

const OrgNewsApi:React.FC<category>=({category})=> {
  const [NextPage, setNextPage] = useState<string>("");
  const [article, setArticle] = useState<newsApi[]>([]);

  useEffect(() => {
    const url = `${
      import.meta.env.VITE_ORG_NEWS
    }&country=${"in"}&category=${category}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data.results);
        setNextPage(data.nextPage);
        console.log("News data:", data.results);
        console.log("News nextPageId:", data.nextPage);
      });
  }, []);
  return (
    <div className="flex flex-wrap">
      {article.map((news, article_id) => {
        return (
          <NewsItem
            key={article_id}
            article={news.description}
            title={news.title}
            page={NextPage}
            src={news.src}
            pubDate={news.pubDate}
          />
        );
      })}
    </div>
  );
}
export default OrgNewsApi;