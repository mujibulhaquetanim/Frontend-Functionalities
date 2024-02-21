import IOnewsApi from "@/api/IOnewsApi";
import OrgNewsApi from "@/api/OrgNewsApi";

interface category {
  category: string;
}

const NewsBoard: React.FC<category> = ({ category }) => {
  const newsBoard = function newsBoard() {
    try {
      return <IOnewsApi category={category} />;
    } catch (error) {
      // console.log(`${error}: trying another newsapi`);
      return <OrgNewsApi category={category} />;
    }
  };

  return <div>{newsBoard()}</div>;
};

export default NewsBoard;
