import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import "./App.css";
import { createTodoQueryOptions } from "./queryOptions/createTodoQueryOptions";
import { useState } from "react";
import { createCommentsOptions } from "./queryOptions/createCommentsOptions";
import { Icomment } from "./types/todoTypes";

function App() {
  const [page, setPage] = useState(1);
  const { data, isError, error, isFetching, refetch } = useSuspenseQuery(
    createTodoQueryOptions()
  );
  const {
    data: commnetsData,
    isError: isCommentError,
    isPending: isCommentsPending,
  } = useQuery(createCommentsOptions(page));

  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontSize: "2rem",
          textDecoration: "underline",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        Tanstack Query Example
      </div>
      {/* json.stringify will convert the array to string, if we don't use it then we will get the array in the form of object which is not readable and cannot be displayed  */}
      {/* <div>{isPending ? "Loading..." : JSON.stringify(data?.slice(0, 10))}</div> */}
      <div>
        {isFetching
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
      <div>
        {isCommentsPending
          ? "Loading..."
          : commnetsData?.slice(0, 10).map((comment: Icomment) => (
              <div key={comment.id} style={{ marginBottom: "10px" }}>
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
                {/* {JSON.stringify(comment)} */}
                <div>
                  <span
                    style={{
                      marginBottom: "10px",
                      textDecoration: "underline",
                    }}
                  >
                    user id:
                  </span>
                  {comment.postId}
                </div>
                <div>
                  <span
                    style={{
                      marginBottom: "10px",
                      textDecoration: "underline",
                    }}
                  >
                    User name:
                  </span>
                  {comment.name}
                </div>
                <div>
                  <span
                    style={{
                      marginBottom: "10px",
                      textDecoration: "underline",
                    }}
                  >
                    Comment body:
                  </span>
                  {comment.body}
                </div>
              </div>
            ))}
      </div>
      <button onClick={() => setPage((prev) => prev + 1)}>netxt page</button>
      {isCommentError && <div>Error: {(error as Error).message}</div>}
      {isError && <div>Error: {(error as Error).message}</div>}
      <button onClick={() => refetch()}>Refetch it</button>
    </>
  );
}

export default App;
