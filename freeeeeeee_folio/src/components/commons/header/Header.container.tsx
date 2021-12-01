import { useRouter } from "next/dist/client/router";
import React from "react";
import HeaderUI from "./Header.presenter";

export default function Header() {
  const router = useRouter();
  function onClickCommunity() {
    router.push("/community/list");
  }
  function onClickSignin() {
    router.push("/sign/signin");
  }
  function onClickSignUP() {
    router.push("/sign/signup");
  }
  function onClickHome() {
    router.push("/");
  }

  return (
    <HeaderUI
      onClickCommunity={onClickCommunity}
      onClickSignin={onClickSignin}
      onClickSignUP={onClickSignUP}
      onClickHome={onClickHome}
    />
  );
}
