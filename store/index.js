import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, todosReducer } from "./reducers";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
  devTools: true,
});

export default store;
