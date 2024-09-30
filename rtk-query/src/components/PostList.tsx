import { useGetPostsQuery } from "../States/posts/PostApiSlice";

export default function PostList() {
  const { data: posts, isLoading, isError } = useGetPostsQuery({});

  if (isLoading) return <div>Loading...</div>; //if the query is loading it will return a loading message

  if (isError) return <div>Error</div>; //if an error occurs in the query it will return an error
  return (
    <div>
      <ul>
        {posts?.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
