import { useRouter } from "next/router";
import styled from "@emotion/styled";

export default function DynamicRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/05-06-dynamic-routed-number/1");
  };
  const onClickMove2 = () => {
    router.push("/05-06-dynamic-routed-number/2");
  };
  const onClickMove3 = () => {
    router.push("/05-06-dynamic-routed-number/3");
  };

  return (
    <div>
      <Button1 onClick={onClickMove1}>1번 게시글로 이동하기</Button1>
      <Button2 onClick={onClickMove2}>2번 게시글로 이동하기</Button2>
      <Button3 onClick={onClickMove3}>3번 게시글로 이동하기</Button3>
    </div>
  );
}

const Button1 = styled.button`
  width: 0.5rem;
  height: 100px;
`;
const Button2 = styled.button`
  width: 0.5rem;
  height: 100px;
`;
const Button3 = styled.button`
  width: 0.5rem;
  height: 100px;
`;
