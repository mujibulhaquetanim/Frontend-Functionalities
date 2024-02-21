import { useEffect, useState } from "react";
import NewsItem from "@/components/custom/NewsItem";

interface category {
  category: string;
}

interface newsApi {
  description: string;
  title: string;
  urlToImage: string;
  publishedAt: string;
  article_id: string;
}

const OrgNewsApi: React.FC<category> = ({ category }) => {
  const [NextPage, setNextPage] = useState<number>(1);
  const [article, setArticle] = useState<newsApi[]>([]);

  useEffect(() => {
    console.log(category);
    const url = `${
      import.meta.env.VITE_ORG_NEWS
    }&country=${"in"}&category=${category}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data.articles);
        setNextPage(data.page);
        console.log("News data:", data.articles);
      });
  }, [category]);
  return (
    <div className="flex flex-wrap">
      {article.map((news, index) => {
        return (
          <NewsItem
            key={index}
            article={news.description}
            title={news.title}
            src={news.urlToImage}
            pubDate={news.publishedAt}
          />
        );
      })}
    </div>
  );
};
export default OrgNewsApi;
