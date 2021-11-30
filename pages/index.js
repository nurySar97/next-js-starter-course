import Link from "next/link";
const Index = () => {
  return (
    <>
      <h1>Hello from Index page!</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nisi quo
        est saepe, aut fugiat. Praesentium quia repudiandae laboriosam fugiat ut
        accusantium voluptas, officia, eum fuga in dolorum dolores voluptatibus.
      </p>
    </>
  );
};

export default Index;
