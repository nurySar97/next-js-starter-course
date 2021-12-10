import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todoItems: [],
  },
  reducers: {
    setTodos(state, action) {
      state.todoItems = action.payload;
    },
  },
});

export default todosSlice;
