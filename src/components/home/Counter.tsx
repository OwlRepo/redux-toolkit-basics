import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "~/lib/redux/store";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "~/lib/redux/features/counter/counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row items-center justify-between text-white">
      <b>Redux Toolkit w/ react-redux</b>
      <div className="flex flex-row items-center space-x-5 text-white">
        <button
          className="btn"
          aria-label="Decrement value"
          onClick={() => dispatch(decrementByAmount(10))}
        >
          Decrement by 10
        </button>
        <button
          className="btn"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span>{count}</span>
        <button
          className="btn"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="btn"
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment by 10
        </button>
      </div>
    </div>
  );
}
