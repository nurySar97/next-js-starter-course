import Link from "next/link";
import Head from "next/head";

const Main = (props) => {
  const { children, title } = props;
  return (
    <>
      <Head>
        <title>Next App | {title}</title>
        <meta name="keywords" content="next,javascript,react,ssr,nextjs" />
        <meta
          name="description"
          content="this is youtube tutorial for next js!"
        />
        <meta charSet="utf-8" />
      </Head>
      <nav className='bg-primary'>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        <Link href="/website">
          <a>Website</a>
        </Link>
        <Link href="/styled">
          <a>Styled</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          nav {
            position: fixed;
            height: 60px;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            z-index: 50;
          }

          nav a {
            color: #fff;
            text-decoration: none;
          }

          main {
            margin-top: 60px;
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default Main;
