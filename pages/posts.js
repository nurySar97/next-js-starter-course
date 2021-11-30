import Link from "next/link";

const Posts = () => {
  return (
    <>
      <h1>Hello from Posts page!</h1>
      <Link href="/">
        <a>Return Main Page!</a>
      </Link>
    </>
  );
};

export default Posts;