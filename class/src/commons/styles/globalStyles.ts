import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 15px;
    font-family: "cyWord";
  }

  // font적용하기
  @font-face {
    font-family: "cyWord";
    src: url("/fonts/scifibit.ttf");
  }
`;
