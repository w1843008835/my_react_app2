import { useState } from 'react';

function Count() {
    const [count, setCount] = useState(0)
    const handClick = () =>{
        setCount(count + 1)
    }
  return (
    <div>
        <button onClick={handClick}>{count}</button>
    </div>
  );
}

export default Count;
