import { useParams } from "react-router-dom";

export default function DynamicPage() {
    const page  = useParams<{page:string}>();
    console.log(page)

          
      return <></>
}
