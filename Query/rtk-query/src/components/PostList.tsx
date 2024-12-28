import {
  useCreatePostMutation,
  useGetPostsQuery,
} from "../States/posts/PostApiSlice";

export default function PostList() {
  const {
    data: posts,
    isLoading,
    isError,
  } = useGetPostsQuery({
    limit: 10,
    offset: 0,
  });
  const [createPost, { isLoading: isCreating }] = useCreatePostMutation({});

  const handleCreatePost = async () => {
    await createPost({ title: "New Post" });
  };

  if (isCreating) return <div>Creating the Post...</div>;

  if (isLoading) return <div>Loading...</div>; //if the query is loading it will return a loading message

  if (isError) return <div>Error</div>; //if an error occurs in the query it will return an error
  return (
    <div>
      <button onClick={handleCreatePost}>Create Post</button>
      <ul>
        {posts?.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
