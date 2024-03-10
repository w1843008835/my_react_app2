import { useDispatch, useSelector } from "react-redux";
import { inscrement, decrement } from "./store/modules/counterStore";

function ReduxCounter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(inscrement())}>+</button>
    </div>
  );
}

export default ReduxCounter;
