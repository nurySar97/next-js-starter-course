import Link from "next/link";
import Head from "next/head";

const Posts = () => {
  return (
    <>
      <Head>
        <title>Next App | Posts</title>
        <meta name="keywords" content="next,javascript,react,ssr,nextjs" />
        <meta name="description" content="this is youtube tutorial for next js!" />
        <meta charSet='utf-8' />
      </Head>
      <h1>Hello from Posts page!</h1>
      <Link href="/">
        <a>Return Main Page!</a>
      </Link>
    </>
  );
};

export default Posts;
