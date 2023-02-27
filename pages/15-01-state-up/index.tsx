import { useState } from "react";
import Child1 from "../../src/components/units/15-stateup/child1";
import Child2 from "../../src/components/units/15-stateup/Child2";

export default function StateupPage() {
  const [count, setCount] = useState(0);

  function onClickCounter() {
    setCount((prev) => prev + 11);
  }

  return (
    <>
      <Child1 count={count} onClickCounter={onClickCounter} />
      <br />
      <br />
      <div>
        <hr />
        <hr />
        <br />
      </div>
      <Child2 count={count} onClickCounter={onClickCounter} />
      <br />
      <br />
      <br />
      {/* <button onClick={onClickCounter}>껍데기</button> */}
    </>
  );
}
