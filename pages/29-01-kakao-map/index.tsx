import { useEffect } from "react";
import Head from "next/head";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      // 지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.484732, 126.896491), // 지도의 중심좌표.
      level: 1, // 지도의 레벨(확대, 축소 정도)
    };

    const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
  }, []);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=8eac908670bf2e1eae75892827acafb1"
        ></script>
      </Head>
      <div id="map" style={{ width: "500px", height: "400px" }}>
        Home
      </div>
    </>
  );
}
