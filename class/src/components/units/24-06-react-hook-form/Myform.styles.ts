import styled from "@emotion/styled";
import { IMyButtonProps } from "./Myform.types";

const MyButton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "skyblue" : "gray"};
`;
