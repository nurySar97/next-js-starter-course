import { MainLayout } from "../../layouts";

const Posts = ({ posts, length }) => {
  return (
    <MainLayout title={"Posts page"}>
      <h1>Posts length: {length}</h1>
      <h1>{posts && <pre>{JSON.stringify(posts, null, 3)}</pre>}</h1>
    </MainLayout>
  );
};

export default Posts;

export async function getStaticProps(props) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: { posts, length: posts.length },
  };
}
