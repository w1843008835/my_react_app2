import { useDispatch, useSelector } from "react-redux";
import { inscrement, decrement, addToNum } from "./store/modules/counterStore";

function ReduxCounter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(inscrement())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>add to 10</button>
      <button onClick={() => dispatch(addToNum(20))}>add to 20</button>
    </div>
  );
}

export default ReduxCounter;
