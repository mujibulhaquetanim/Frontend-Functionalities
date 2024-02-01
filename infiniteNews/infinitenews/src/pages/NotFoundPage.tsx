import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen text-2xl font-bold m-2">
      404 Not Found!
      <Link to={"/"} className="border-2 bg-slate-600 text-white p-4 rounded-full w-fit m-2">Home</Link>
    </div>
  );
}
