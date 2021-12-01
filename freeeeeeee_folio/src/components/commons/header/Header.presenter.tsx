import React from "react";
import * as H from "./Header.styles";
import Image from "next/image";

interface IProps {
  onClickCommunity: () => void;
  onClickSignin: () => void;
  onClickSignUP: () => void;
  onClickHome: () => void;
}

export default function HeaderUI(props: IProps) {
  return (
    <H.Header>
      <H.Wrapper>
        <H.Logo onClick={props.onClickHome}>
          <Image src="/img/WHY-logo.png" alt="LOGO" width={100} height={100} />
        </H.Logo>
        <H.Nav>
          <H.PageBtn>WORLD</H.PageBtn>
          <H.PageBtn onClick={props.onClickCommunity}>COMMUNITY</H.PageBtn>
          <H.PageBtn>My Page</H.PageBtn>
        </H.Nav>
        <H.SignBtns>
          <H.Sign onClick={props.onClickSignin}>Login</H.Sign>
          <H.SignUp onClick={props.onClickSignUP}>SignUp</H.SignUp>
        </H.SignBtns>
      </H.Wrapper>
    </H.Header>
  );
}
