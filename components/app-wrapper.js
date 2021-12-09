import React, { useCallback, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { incrementAC } from "../store/actions";

const Default = ({ children }) => {
  const dispatch = useDispatch();

  const clickHandler = useCallback(() => {
    dispatch(incrementAC());
  }, [incrementAC]);

  useLayoutEffect(() => {
    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  }, []);
  return <React.Fragment>{children}</React.Fragment>;
};

export default Default;
