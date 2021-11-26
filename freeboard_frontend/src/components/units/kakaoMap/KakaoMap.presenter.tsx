import Head from "next/head";
import { Wrapper, WrapperTitle, Infomation, KakaoMap } from "./KakaoMap.styles";

export default function KakaoMapPresenter(props) {
  return (
    <>
      <Wrapper>
        <WrapperTitle>I'm In Here</WrapperTitle>
        <Head></Head>
        <KakaoMap
          id="map"
          style={{ width: "500px", height: "500px", borderRadius: "20%" }}
        ></KakaoMap>
        <Infomation>저는 여기있어요</Infomation>
        <Infomation>Copyright 2021.</Infomation>
      </Wrapper>
    </>
  );
}
