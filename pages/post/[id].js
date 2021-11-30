import { useRouter } from "next/router";
import Link from "next/link";

const Post = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <>
      <h1>Hello from Post:{id} page!</h1>
      <Link href="/">
        <a>Return Main Page!</a>
      </Link>
    </>
  );
};

export default Post;
