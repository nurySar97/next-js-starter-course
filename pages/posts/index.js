import { MainLayout } from "../../layouts";

const Posts = ({ posts }) => {
  return (
    <MainLayout title={"Posts page"}>
      <h1>
        {posts && <pre>{JSON.stringify(posts, null, 3)}</pre>}
      </h1>
    </MainLayout>
  );
};

export default Posts;

export async function getServerSideProps(props) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();


  return {
    props: { posts },
  };
}
