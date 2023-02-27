import { useEffect } from "react";
import Head from "next/head";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=8eac908670bf2e1eae75892827acafb1"; // <script src="//dapi..."></script>
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.484796, 126.896351), // 지도의 중심좌표.
          level: 2, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다
        const polygonPath = [
          new window.kakao.maps.LatLng(37.484326, 126.896639),
          new window.kakao.maps.LatLng(37.484636, 126.896846),
          new window.kakao.maps.LatLng(37.484805, 126.896663),
          new window.kakao.maps.LatLng(37.485311, 126.897039),
          new window.kakao.maps.LatLng(37.484853, 126.89591),
          new window.kakao.maps.LatLng(37.484699, 126.896226),
          new window.kakao.maps.LatLng(37.484544, 126.896111),
          new window.kakao.maps.LatLng(37.484326, 126.896639),
        ];

        // 지도에 표시할 다각형을 생성합니다
        const polygon = new window.kakao.maps.Polygon({
          path: polygonPath, // 그려질 다각형의 좌표 배열입니다
          strokeWeight: 3, // 선의 두께입니다
          strokeColor: "#493229", // 선의 색깔입니다
          strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: "solid", // 선의 스타일입니다
          fillColor: "#945c2e", // 채우기 색깔입니다
          fillOpacity: 0.7, // 채우기 불투명도 입니다
        });

        // 지도에 다각형을 표시합니다
        polygon.setMap(map);

        // 다각형에 마우스오버 이벤트가 발생했을 때 변경할 채우기 옵션입니다
        const mouseoverOption = {
          fillColor: "#945c2f", // 채우기 색깔입니다
          fillOpacity: 0.8, // 채우기 불투명도 입니다
        };

        // 다각형에 마우스아웃 이벤트가 발생했을 때 변경할 채우기 옵션입니다
        const mouseoutOption = {
          fillColor: "#945c2g", // 채우기 색깔입니다
          fillOpacity: 0.7, // 채우기 불투명도 입니다
        };

        // 다각형에 마우스오버 이벤트를 등록합니다
        window.kakao.maps.event.addListener(polygon, "mouseover", function () {
          // 다각형의 채우기 옵션을 변경합니다
          polygon.setOptions(mouseoverOption);
        });

        window.kakao.maps.event.addListener(polygon, "mouseout", function () {
          // 다각형의 채우기 옵션을 변경합니다
          polygon.setOptions(mouseoutOption);
        });

        // 다각형에 마우스다운 이벤트를 등록합니다
        let downCount = 0;
        window.kakao.maps.event.addListener(polygon, "mousedown", function () {
          console.log(event);
          const resultDiv = document.getElementById("result");
          resultDiv.innerHTML =
            "다각형에 mousedown 이벤트가 발생했습니다!" + ++downCount;
        });
      });
    };
  }, []);

  return (
    <>
      <div id="map" style={{ width: "40rem", height: "30rem" }}>
        Home
      </div>
    </>
  );
}
