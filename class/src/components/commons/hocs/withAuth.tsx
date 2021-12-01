import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = () => () => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);
  
  if (!accessToken) {
    alert("로그인 한 사람만 입장 가능합니다. 로그인을 먼저 해주세요");
    router.push("/22-01-login");
  }

  return (

  )
}