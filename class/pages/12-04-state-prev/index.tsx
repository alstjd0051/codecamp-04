import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCounter() {
    setCount((prev) => prev + 1);

    console.log(count + 1);
  }

  return (
    <>
      <div>현재카운트 : {count} </div>
      <button onClick={onClickCounter}>카운트올리기</button>
    </>
  );
}
