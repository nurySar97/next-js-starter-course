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

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({ params: { id: String(post.id) } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    let post = await res.json();

    return { props: { post } };
  } catch (error) {
    console.error("error: ", error);
  }
}
