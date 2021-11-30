import { useRouter } from "next/router";
import { MainLayout } from "../../layouts";

const Post = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <MainLayout title={`Post: ${id}`}>
      <h1>Hello from Post:{id} page!</h1>
    </MainLayout>
  );
};

export default Post;
