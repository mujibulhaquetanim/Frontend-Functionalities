import IOnewsApi from "@/api/IOnewsApi";
import OrgNewsApi from "@/api/OrgNewsApi";

interface category {
  category: string;
  ioSuccess: string;
}

const NewsBoard: React.FC<category> = ({ category, }) => {
  return (
    <div>
      <IOnewsApi category={category} />
      {/* <OrgNewsApi category={category} /> */}
    </div>
  );
};

export default NewsBoard;
