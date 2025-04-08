import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 여기에 조건과 로그 출력 작성
    if (count >= 3) console.log("경고! count가 높아요!");
    return () => {
      // 여기에 정리할 작업 작성
    };
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

export default Counter;
