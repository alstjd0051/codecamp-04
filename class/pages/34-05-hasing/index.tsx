import { useState } from "react";

const HasingPage = () => {
  const [hashArr, setHashArr] = useState<string[]>([]);

  const onKeyUp = (e) => {
    if (e.keyCode === 13 && e.target.value !== " ") {
      setHashArr([...hashArr, `#${e.target.value}`]);
      e.target.value = "";
    }
  };

  const deleteHash = (idx) => () => {
    hashArr.splice(idx, 1);
    setHashArr([...hashArr]);
  };
  return (
    <>
      <div>
        <div style={{ backgroundColor: "blue", display: "flex" }}>
          <div style={{ backgroundColor: "red", color: "white" }}>
            {hashArr.map((el, idx) => (
              <span key={idx} onClick={deleteHash(idx)}>
                {el}
              </span>
            ))}
          </div>
          <input type="text" onKeyUp={onKeyUp} />
        </div>
      </div>
    </>
  );
};

export default HasingPage;
