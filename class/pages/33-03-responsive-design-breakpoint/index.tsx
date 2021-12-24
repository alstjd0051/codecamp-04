import styled from "@emotion/styled";
import { breakPoint } from "../../src/commons/styles/media";
const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: skyblue;

  @media ${breakPoint.tablet} {
    width: 500px;
    height: 500px;
    background-color: #3939f1;
  }

  @media ${breakPoint.tablet} {
    width: 100px;
    height: 100px;
    background-color: #a7a7f3;
  }
`;

export default function ResponsiveDesignPage() {
  return (
    <div>
      <Wrapper>상자</Wrapper>
    </div>
  );
}
