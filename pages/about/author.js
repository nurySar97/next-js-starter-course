import Link from "next/link";

const Author = () => {
  return (
    <>
      <h1>Hello from About Author page!</h1>
      <Link href="/">
        <a>Return Main Page!</a>
      </Link>
    </>
  );
};

export default Author;
