import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "../store/selectors";
import { resetCountAC } from "../store/actions";

const Default = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <section>
      <h2>Count of clicks: {count}</h2>
      <p>
        <button
          className="btn btn-lg btn-danger ms-1"
          onClick={() => dispatch(resetCountAC())}
        >
          Reset count of clicks!
        </button>
      </p>
    </section>
  );
};

export default Default;
