import ReactPlayer from "react-player/youtube";
import styled from "@emotion/styled";

const MyYoutube = styled(ReactPlayer)`
  width: 500px;
  height: 500px;
  border: 10px solid yellow;
`;

export default function index() {
  return <MyYoutube url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />;
}
