import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-7xl flex flex-col items-center gap-10 mx-auto p-10">
      <nav className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">To Do List</h1>
      <Button variant="default">Add task</Button>
      </nav>
    </div>
  );
}
