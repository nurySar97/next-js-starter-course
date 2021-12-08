import Link from "next/link";
import Head from "next/head";
import { Container, Nav, Navbar } from "react-bootstrap";

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

      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Next</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>

            <Link href="/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>

            <Link href="/posts" passHref>
              <Nav.Link>Posts</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <main className='p-3'>{children}</main>
    </>
  );
};

export default Main;
