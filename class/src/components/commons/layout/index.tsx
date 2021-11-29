import { ReactChild } from "react";
import styled from "@emotion/styled";
import Header from "./header/Header.container";
import Banner from "./banner/Banner.container";
import Navigation from "./navigation/Navigation.container";
import Footer from "./footer/Footer.container";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: ReactChild;
}

const Wrapper = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: skyblue;
`;

const Body = styled.div`
  background-color: beige;
  width: 1000px;
`;

const BodyWrapper = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 200px;
  height: 700px;
  background-color: blueviolet;
`;

const HIDDEN_HEADERS = [
  "/12-04-state-prev",
  // ...
];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHIDDEN_Header = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <Wrapper>
      {!isHIDDEN_Header && <Header />}

      <Banner />
      <Navigation />
      <BodyWrapper>
        <Sidebar>Sidebar</Sidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
}
