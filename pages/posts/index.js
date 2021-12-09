import { MainLayout } from "../../layouts";
import Link from "next/link";
import { PostNav } from "./../../components";

const Posts = ({ posts, length }) => {
  return (
    <MainLayout title={"Posts page"}>
      <h1 className="text-center">Total count of posts {length}</h1>
      <PostNav />
      <div className="container">
        <div className="row">
          {posts.map((post) => (
            <div className="col-12 col-sm-6 col-md-4 py-3" key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>
                  <div className="card w-100 h-100">
                    <div className="card-body">
                      <h5 className="card-title text-capitalize">
                        {post.title}
                      </h5>
                      <p className="card-text">{post.body}</p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
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
