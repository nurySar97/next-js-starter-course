import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MainLayout } from "../../layouts";
import { sleep } from "../../services/sleep";

const Post = () => {
  const [post, setPost] = useState({});
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    void (async function () {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        let post = await res.json();
        await sleep(2000);
        setPost(post);
      } catch (error) {
        console.error("error: ", error);
      }
    })();
  }, [id]);

  return (
    <MainLayout title={`Post: ${id}`}>
      <h1>
        <pre>{JSON.stringify(post, null, 2)}</pre>
      </h1>
    </MainLayout>
  );
};

export default Post;
