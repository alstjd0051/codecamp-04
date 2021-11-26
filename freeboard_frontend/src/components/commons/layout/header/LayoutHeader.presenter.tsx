import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";

interface IProps {
  onClickLogo: () => void;
  onClickMoveToSignin: () => void;
  onClickMoveToSignup: () => void;
}
export default function LayoutHeaderUI(props: IProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>💎 Woogie</InnerLogo>
        <div>
          <InnerButton onClick={props.onClickMoveToSignin}>Sign in</InnerButton>
          <InnerButton onClick={props.onClickMoveToSignup}>Sign up</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
