import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { incrementAC } from "../store/actions";
import { fetchTodosThunk } from "../store/thunks";

const Default = ({ children }) => {
  const dispatch = useDispatch();

  const clickHandler = useCallback(() => {
    dispatch(incrementAC());
  }, [incrementAC]);

  useEffect(() => {
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [fetchTodosThunk]);
  return <React.Fragment>{children}</React.Fragment>;
};

export default Default;
