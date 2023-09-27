import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    // Dispatch an action to increment the counter by 5
    dispatch({ type: "incrementBy5" });
  };

  const decrementBy5Handler = () => {
    // Dispatch an action to decrement the counter by 5
    dispatch({ type: "decrementBy5" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Increment By 5</button>
      <button onClick={decrementBy5Handler}>Decrement By 5</button>
    </main>
  );
};

export default Counter;
