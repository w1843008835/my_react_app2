import { useDispatch, useSelector } from "react-redux";
import { inscrement, decrement, addToNum } from "./store/modules/counterStore";
import { useEffect } from "react";
import { fetchChanelList } from "./store/modules/chanelStore";
function ReduxCounter() {
  const { count } = useSelector((state) => state.counter);
  const { chanelList } = useSelector((state) => state.chanel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChanelList());
  }, [dispatch]);
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(inscrement())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>add to 10</button>
      <button onClick={() => dispatch(addToNum(20))}>add to 20</button>
      <ul>
        {chanelList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReduxCounter;
