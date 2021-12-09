import { counterSlice } from "../slices";

// obtain actions from slice
const {
  increment: incrementAC,
  decrement: decrementAC,
  resetCount: resetCountAC,
} = counterSlice.actions;

// export slices
export { incrementAC, decrementAC, resetCountAC };
