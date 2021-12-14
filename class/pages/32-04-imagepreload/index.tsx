import { useEffect, useRef, useState } from "react";

export default function ImagePreLoadPage() {
  const [myLodedImage, setMyLodedImage] = useState();
  const divRef = useRef(null);
  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp";
    img.onload = () => {
      setMyLodedImage(img);
    };
  }, []);

  function onClickButton() {
    divRef.current?.appendChild(myLodedImage);
  }
  return (
    <>
      <h1>안녕하세요 사이트에 오신것을 환영합니다.</h1>
      <button onClick={onClickButton}>이미지 보여주기</button>
      <div ref={divRef}></div>

      <hr />
      {/* <img
        src="https://i.pinimg.com/564x/53/11/c4/5311c43706419a5145d93fc8d7d14869.jpg"
        alt=""
      /> */}
    </>
  );
}
