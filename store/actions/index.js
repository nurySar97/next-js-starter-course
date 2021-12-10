import { counterSlice } from "../slices";
import todosSlice from "../slices/todos.slice";

// obtain actions from slice

// counter
const {
  increment: incrementAC,
  decrement: decrementAC,
  resetCount: resetCountAC,
} = counterSlice.actions;

// todos
const { setTodos: setTodosAC } = todosSlice.actions;

// export slices
export { incrementAC, decrementAC, resetCountAC, setTodosAC };
