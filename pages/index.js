import { useRouter } from "next/router";
import { MainLayout } from "./../layouts";
import Counter from "./../components/counter";

const Index = () => {
  const router = useRouter();
  const query = router?.query?.search || "No query yet!";

  return (
    <MainLayout title={"Main page"}>
      <Counter />
      <h1>Hello from Index page!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nisi quo
        est saepe, aut fugiat. Praesentium quia repudiandae laboriosam fugiat ut
        accusantium voluptas, officia, eum fuga in dolorum dolores voluptatibus.
      </p>
      <p>Query: {query}</p>
    </MainLayout>
  );
};

export default Index;
