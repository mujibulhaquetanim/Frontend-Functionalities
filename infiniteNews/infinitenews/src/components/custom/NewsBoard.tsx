import IOnewsApi from "@/api/IOnewsApi";
import OrgNewsApi from "@/api/OrgNewsApi";

interface category {
  category: string;
  ioSuccess: string;
}

const NewsBoard: React.FC<category> = ({ category,ioSuccess="success"}) => {
return <div>{ioSuccess==="RateLimitExceeded" ? <OrgNewsApi category={category}/> : <IOnewsApi category={category}/>}</div>  
}

export default NewsBoard;
