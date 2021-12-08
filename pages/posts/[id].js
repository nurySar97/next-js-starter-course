import { useRouter } from "next/router";
import { MainLayout } from "../../layouts";

const Post = ({ post }) => {
  const {
    query: { id },
  } = useRouter();

  return (
    <MainLayout title={`Post: ${id}`}>
      <h1>
        <pre>{JSON.stringify(post, null, 2)}</pre>
      </h1>
    </MainLayout>
  );
};

export default Post;

export async function getServerSideProps(props) {
  const { id } = props.query;
  let post = {};

  if (id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    post = await res.json();
  }

  return {
    props: { post },
  };
}
