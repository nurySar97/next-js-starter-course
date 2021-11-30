import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "../layouts";

const Posts = () => {
  return (
    <MainLayout>
      <Head>
        <title>Next App | Posts</title>
        <meta name="keywords" content="next,javascript,react,ssr,nextjs" />
        <meta name="description" content="this is youtube tutorial for next js!" />
        <meta charSet='utf-8' />
      </Head>
      <h1>Hello from Posts page!</h1>
    </MainLayout>
  );
};

export default Posts; 
