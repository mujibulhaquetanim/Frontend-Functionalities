import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { createTodoQueryOptions } from "./queryOptions/createTodoQueryOptions";

function App() {
  const { data, isPending, isError } = useQuery(createTodoQueryOptions());

  return (
    <>
      <div>Tanstack Query Example</div>
      {/* json.stringify will convert the array to string, if we don't use it then we will get the array in the form of object which is not readable and cannot be displayed  */}
      <div>{isPending ? "Loading..." : JSON.stringify(data?.slice(0, 10))}</div>
      {isError && <div>Error</div>}
    </>
  );
}

export default App;
