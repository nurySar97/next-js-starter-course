import Router from "next/router";
import { MainLayout } from "../../layouts";

const About = () => {
  const linkHandler = (path = "/") => {
    return () => Router.push(path);
  };
  return (
    <MainLayout title={"About page"}>
      <h1>Hello from About page!</h1>
      <p>
        <button onClick={linkHandler("/")}>Go back to home page!</button>
      </p>
      <p>
        <button onClick={linkHandler("/posts")}>Go to posts page!</button>
      </p>
    </MainLayout>
  );
};

export default About;
