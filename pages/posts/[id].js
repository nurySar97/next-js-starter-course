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
      <div className="card w-100 h-100">
        <div className="card-body text-dark">
          <h4>Post №{id}</h4>
          <h5 className="card-title text-capitalize">{post.title}</h5>
          <p className="card-text">{post.body}</p>
        </div>
      </div>

      <section className="p-3 bg-success my-3">
        <h3>
          Locale <span className="text-danger">text.txt </span>obtained while
          getStaticProps is running
        </h3>
        <p>{text}</p>
      </section>
      <section className="p-3 bg-info my-3">
        <h3>
          Locale <span className="text-danger">cms-headless.html</span> fetched
          while getStaticProps is running
        </h3>
        <div className="p-3" dangerouslySetInnerHTML={{ __html }} />
      </section>
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
