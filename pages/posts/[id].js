import { useRouter } from "next/router";
import path from "path";
import fs from "fs";
import { MainLayout } from "../../layouts";

const Post = ({ post, text, __html }) => {
  const {
    query: { id },
  } = useRouter();

  return (
    <MainLayout title={`Post: ${id}`}>
      <h1>
        <pre>{JSON.stringify(post, null, 2)}</pre>
      </h1>
      <p>{text}</p>
      <div dangerouslySetInnerHTML={{ __html }} />
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
  const rootDir = process.cwd();
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    let post = await res.json();

    const text = fs.readFileSync(
      path.join(rootDir, "data", "text.txt"),
      "utf-8"
    );

    const __html = fs.readFileSync(
      path.join(rootDir, "data", "cms-headless.html"),
      "utf-8"
    );
    return { props: { post, text, __html } };
  } catch (error) {
    console.error("error: ", error);
  }
}
