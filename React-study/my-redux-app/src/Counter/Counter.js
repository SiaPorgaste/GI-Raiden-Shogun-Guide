import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions/counterAction";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // Implement increment logic
    dispatch(increment());
  };

  const handleDecrement = () => {
    // Implement decrement logic
    dispatch(decrement());
  };

  return (
    <div>
      <h2>Counter Value:{counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
