import { useParams } from "@remix-run/react";

export default function UserId() {
  const id = useParams();
  return (
    <div className="flex flex-col justify-center items-center m-7">
      <h1>User ID: {id.id}</h1>
    </div>
  );
}
