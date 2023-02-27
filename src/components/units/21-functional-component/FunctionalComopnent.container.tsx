import FunctinalComopentUI from "./FunctionalComopnent.presenter";

export default function FunctinalComopent() {
  // container
  // 두가지 차이는 없다.
  // 하이워드 컴포넌트할때 이해가 간다.
  // return <>{FunctinalComopentUI({ count: 3 })} </>;
  return <FunctinalComopentUI count={3} />;
}
