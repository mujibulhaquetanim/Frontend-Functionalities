import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../States/store";
import {
  increment,
  decrement,
  incrementAsync,
} from "../States/Counter/CounterSlice";
export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h2>{count}</h2>
      <p>Redux Toolkit Query</p>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementAsync(10))}>
          increment by 10
        </button>
      </div>
    </div>
  );
}
