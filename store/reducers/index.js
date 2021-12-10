import { counterSlice } from "../slices";
import todosSlice from "../slices/todos.slice";

// obtain reducer from slice
const counterReducer = counterSlice.reducer;
const todosReducer = todosSlice.reducer;

// export reducers
export { counterReducer, todosReducer };
