import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import React from "react";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
}

return (
  <div className="App">
    <header className="App-header">
      <button onClick={() => dispatch(increment())}>increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </header>
  </div>
);
