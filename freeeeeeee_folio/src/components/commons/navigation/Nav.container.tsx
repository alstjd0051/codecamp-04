import { useRouter } from "next/dist/client/router";
import React from "react";
import NavUI from "./Nav.presenter";

export default function Nav() {
  const router = useRouter();

  function onClickHome() {
    router.push("/");
  }
  function onClickWold() {
    router.push("/wold/");
  }
  function onClickGuestBook() {
    router.push("/boards");
  }
  function onClickSignUp() {
    router.push("/signup");
  }
  function onClickSignIn() {
    router.push("/signin");
  }
  function onClickMypage() {
    router.push("/mypage");
  }

  return (
    <NavUI
      onClickHome={onClickHome}
      onClickGuestBook={onClickGuestBook}
      onClickSignUp={onClickSignUp}
      onClickSignIn={onClickSignIn}
      onClickWold={onClickWold}
      onClickMypage={onClickMypage}
    />
  );
}
