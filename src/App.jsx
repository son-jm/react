import { useState, useEffect } from "react";
import "./App.css";

function TimerComponent() {
  const [isRunning, setIsRunning] = useState(true); // 타이머 실행 여부 상태

  useEffect(() => {
    if (!isRunning) return; // 실행 중이 아니면 아무 것도 안 함

    const timer = setInterval(() => {
      console.log("⏱ 타이머 동작 중...");
    }, 1000);

    // 정리 함수: 타이머 멈추기
    return () => {
      console.log("🛑 타이머 정지!");
      clearInterval(timer);
    };
  }, [isRunning]); // isRunning이 바뀔 때마다 useEffect 다시 실행

  return (
    <div>
      <h1>{isRunning ? "타이머 실행 중" : "타이머 멈춤"}</h1>
      <button onClick={() => setIsRunning(false)}>멈추기</button>
      <button onClick={() => setIsRunning(true)}>다시 시작</button>
    </div>
  );
}

export default TimerComponent;
