import { useRouter } from "next/router";
import { useState } from "react";

type IPage = "/board" | "/market" | "/mypage"; // 기존 interface에서 타입을 정해줘서 기존의 경로를 지정해줬는데 type을 이용해서 경로를 이용하는 방법이있다.

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useState("/");

  const moveToPage = (page: IPage) => () => {
    setVisitedPage(page);
    router.push(page);
  };

  return {
    moveToPage,
    visitedPage,
  };
}
