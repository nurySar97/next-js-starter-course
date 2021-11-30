import { useRouter } from "next/router";
import Link from "next/link";
import { MainLayout } from "../../layouts";

const Post = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <MainLayout title={`Post: ${id}`}>
      <h1>Hello from Post:{id} page!</h1>
      <Link href="/">
        <a>Return Main Page!</a>
      </Link>
    </MainLayout>
  );
};

export default Post;
