import { counterSlice } from "../slices";

// obtain actions from slice
const { increment, decrement } = counterSlice.actions;

// export slices
export { increment, decrement };
