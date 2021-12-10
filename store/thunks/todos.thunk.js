import { setTodosAC } from "../actions";

export const fetchTodosThunk = () => async (dispatch) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    console.log(dispatch)
    dispatch(setTodosAC(todos));
  } catch (error) {
    console.error(error);
  }
};
