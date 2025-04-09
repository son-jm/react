import { useState, useEffect } from "react";

function FetchExample() {
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    if (!shouldFetch) return;

    console.log("📡 데이터 불러오는 중...");

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ 응답 도착:", data);
      })
      .finally(() => {
        setShouldFetch(false);
      });
  }, [shouldFetch]);

  return (
    <div>
      <button onClick={() => setShouldFetch(true)}>데이터 가져오기</button>
    </div>
  );
}

export default FetchExample;
