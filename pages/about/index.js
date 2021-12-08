import Router from "next/router";
import { useState } from "react";
import { MainLayout } from "../../layouts";

const About = () => {
  const [value, setValue] = useState()
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
      <p>
        <button onClick={()=>Router.push({pathname: '/', query: {search: '777'}})}>Search</button>
      </p>

      <p>
        <button onClick={()=>Router.push(`/posts/${value}`)}>Post: {value}</button>
      </p>

      <p>
        <input type="number" value={value} onChange={e=>setValue(e.target.value)} />
      </p>

    </MainLayout>
  );
};

export default About;
