import styled from "@emotion/styled";
import HomeFilled from "@ant-design/icons/HomeFilled";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  border-bottom: 1px solid #000;
  position: sticky;
`;

export const Home = styled(HomeFilled)`
  font-size: 35px;
  width: 50px;
  cursor: pointer;
`;

export const Navbar = styled.div``;
export const PageBtn = styled.span`
  font-size: 25px;
  padding-right: 25px;
  font-family: "Montserrat-Medium";
  cursor: pointer;
  :hover {
    color: gray;
  }
`;
export const Sign = styled.div``;
export const SignIn = styled.span`
  font-family: "Montserrat-Medium";
  cursor: pointer;
  font-size: 20px;
  padding-left: 35px;
`;
export const SignUp = styled.span`
  font-family: "Montserrat-Medium";
  cursor: pointer;
  padding-left: 35px;
  font-size: 20px;
`;
