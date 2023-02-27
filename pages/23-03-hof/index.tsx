export default function HofPage() {
  const onClickChild = (index: number) => (e) => {
    console.log(e.target.id);
  };
  // function onClickChild(e) {
  //   console.log(e.target.id);
  // }

  return (
    <>
      <h1>HOF 연습 페이지입니다.</h1>
      <div>
        {["철수", "영희", "훈이"].map((el, index) => (
          <div key={el} onClick={onClickChild(index)}>
            {el}
          </div>
        ))}
      </div>
    </>
  );
}

onClickChild(index)(e);
