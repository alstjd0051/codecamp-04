import React from "react";
import * as N from "./Nav.styles";
import HomeFilled from "@ant-design/icons/HomeFilled";

interface IProps {
  onClickGuestBook: () => void;
  onClickSignIn: () => void;
  onClickSignUp: () => void;
  onClickWold: () => void;
  onClickMypage: () => void;
  onClickHome: () => void;
}

export default function NavUI(props: IProps) {
  return (
    <N.Wrapper>
      <N.Navbar>
        <N.PageBtn onClick={props.onClickWold}>World</N.PageBtn>
        <N.PageBtn onClick={props.onClickGuestBook}>Guest Book</N.PageBtn>
        <N.PageBtn onClick={props.onClickMypage}>My Page</N.PageBtn>
      </N.Navbar>
      <N.Home onClick={props.onClickHome} />
      <N.Sign>
        <N.SignIn onClick={props.onClickSignIn}>Sign in</N.SignIn>
        <N.SignUp onClick={props.onClickSignUp}>Sign up</N.SignUp>
      </N.Sign>
    </N.Wrapper>
  );
}
