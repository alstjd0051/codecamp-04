import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";

interface IProps {
  onClickLogo: () => void;
  onClickMoveToLogin: () => void;
}
export default function LayoutHeaderUI(props: IProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>🎨 MIIIN_SSEONG</InnerLogo>
        <div>
          <InnerButton onClick={props.onClickMoveToLogin}>Login</InnerButton>
          <InnerButton>Sign up</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
