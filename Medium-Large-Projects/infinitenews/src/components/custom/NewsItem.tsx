import React from "react";

interface value {
  article: string;
  title: string;
  src: string;
  pubDate: string;
}

const NewsItem: React.FC<value> = ({
  article,
  title,
  src = "Blank Image",
  pubDate,
}) => {
  return (
    <div className="border-2 w-1/6 m-3 p-3 rounded-xl hover:scale-105 duration-300">
      <div className="mb-1">
        <img className="w-14 h-14 font-bold" src={src} alt="news pic" />
      </div>
      <h1 className="font-bold text-2xl">{title.slice(0, 30)}</h1>
      <div className="text-sm">{pubDate}</div>
      <div className="justify-end mt-1">{article.slice(0, 120)}</div>
      <button className="p-2 rounded-md border-2 mt-3 hover:scale-90">
        Read More
      </button>
    </div>
  );
};

export default NewsItem;
