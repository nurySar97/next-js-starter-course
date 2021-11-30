import { MainLayout } from "./../layouts";
import Head from "next/head";


const Index = () => {
  return (
    <MainLayout>
      <Head>
        <title>Next App | Index</title>
      </Head>
      <h1>Hello from Index page!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nisi quo
        est saepe, aut fugiat. Praesentium quia repudiandae laboriosam fugiat ut
        accusantium voluptas, officia, eum fuga in dolorum dolores voluptatibus.
      </p>
    </MainLayout>
  );
};

export default Index;
