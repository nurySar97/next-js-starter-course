import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "../store/selectors";
import { decrement, increment } from "../store/actions";

const Default = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <section>
      <h2>Count: {count}</h2>
      <p>
        <button
          className="btn btn-lg btn-primary me-1"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="btn btn-lg btn-danger ms-1"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </p>
    </section>
  );
};

export default Default;
