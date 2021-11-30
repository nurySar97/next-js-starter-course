import Link from "next/link";
import Head from "next/head";

const Posts = () => {
  return (
    <>
      <Head>
        <title>Next App | Posts</title>
      </Head>
      <h1>Hello from Posts page!</h1>
      <Link href="/">
        <a>Return Main Page!</a>
      </Link>
    </>
  );
};

export default Posts;
