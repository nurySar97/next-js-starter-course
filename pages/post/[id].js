import { useRouter } from "next/router";

const Post = () => {
  const { query } = useRouter();
  return (
    <>
      <h1>Hello from Post {query.id} page!</h1>
    </>
  );
};

export default Post;
