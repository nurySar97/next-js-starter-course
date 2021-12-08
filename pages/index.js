import { useRouter } from "next/router";
import { MainLayout } from "./../layouts";

const Index = () => {
  const router = useRouter();

  return (
    <MainLayout title={'Main page'}>
      <h1>Hello from Index page!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nisi quo
        est saepe, aut fugiat. Praesentium quia repudiandae laboriosam fugiat ut
        accusantium voluptas, officia, eum fuga in dolorum dolores voluptatibus.
      </p>
      <p>Query: {router?.query?.search}</p>
    </MainLayout>
  );
};

export default Index;
