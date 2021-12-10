import { useSelector } from "react-redux";
import { MainLayout } from "../layouts";
import { selectTodos } from "../store/selectors/todos.selector";

const Default = () => {
  const todos = useSelector(selectTodos);

  return (
    <MainLayout>
      <div className="todos">
        <pre>{JSON.stringify(todos, null, 3)}</pre>
      </div>
    </MainLayout>
  );
};

export default Default;
