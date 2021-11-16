import { SlackOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyICON = styled(SlackOutlined)`
  font-size: 25rem;
  color: skyblue;
`;

export default function LibraryIconPage() {
  return <MyICON id="cute" />;
}
