import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // 여기에 useEffect 작성
  useEffect(() => {
    console.log("count 변경됨");
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

export default Counter;
