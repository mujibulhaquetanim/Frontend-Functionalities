import { useSuspenseQuery } from "@tanstack/react-query";
import "./App.css";
import { createTodoQueryOptions } from "./queryOptions/createTodoQueryOptions";

function App() {
  const { data, isPending, isError, error } = useSuspenseQuery(
    createTodoQueryOptions()
  );

  return (
    <>
      <div style={{ textAlign: "center", fontSize: "2rem", textDecoration: "underline", marginBottom: "10px", fontWeight: "bold" }}>Tanstack Query Example</div>
      {/* json.stringify will convert the array to string, if we don't use it then we will get the array in the form of object which is not readable and cannot be displayed  */}
      {/* <div>{isPending ? "Loading..." : JSON.stringify(data?.slice(0, 10))}</div> */}
      <div>
        {isPending
          ? "Loading..."
          : data?.slice(0, 10).map((todo) => (
              <div key={todo.id} style={{ marginBottom: "10px" }}>
                <span
                  style={{
                    color: "red",
                    marginRight: "10px",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    padding: "5px",
                  }}
                >
                  Todo name:
                </span>
                {todo.title}
              </div>
            ))}
      </div>
      {isError && <div>Error: {(error as Error).message}</div>}
    </>
  );
}

export default App;
