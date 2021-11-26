import KakaoMapPresenter from "./KakaoMap.presenter";
import { useEffect } from "react";

export default function KakaoMapContainer() {
  useEffect(() => {
    // 문서 엘리먼트 생성
    const script = document.createElement("script");
    // 카카오 map API 사용하기 (url + API Key + 자동로드 설정( 페이지가 그려지기 전에 불러와서 에러 남 필수로 설정 해줄 것!!! ))
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=4c33ef03752164bbd0f08a2dfcc871f3&autoload=false";
    // Head 자식에 셋팅 해줌
    document.head.appendChild(script);
    // 실행
    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementById("map");
        const option = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(37.484491628178155, 126.89623249778072), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, option);

        // 지도에 표시된 마커 객체를 가지고 있을 배열입니다
        const markers = [];

        // 마커가 표시될 위치입니다
        const markerPosition = new kakao.maps.LatLng(
          37.484491628178155,
          126.89623249778072
        );

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        const iwRemoveable = true;

        const iwContent =
            '<div style="padding:5px; font-size:17px">코캠4기😎 <br><a href="https://map.kakao.com/link/map/코캠4기!,37.484491628178155, 126.89623249778072" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/코캠4기!,37.484491628178155, 126.89623249778072" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
          iwPosition = new kakao.maps.LatLng(
            37.484491628178155,
            126.89623249778072
          ); //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        const infowindow = new kakao.maps.InfoWindow({
          position: iwPosition,
          content: iwContent,
          removable: iwRemoveable,
        });

        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        infowindow.open(map, marker);

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, "click", function () {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.open(map, marker);
        });

        // 마커에 마우스오버 이벤트를 등록합니다
        // kakao.maps.event.addListener(marker, "mouseover", function () {
        //   // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
        //   infowindow.open(map, marker);
        // });

        // // 마커에 마우스아웃 이벤트를 등록합니다
        // kakao.maps.event.addListener(marker, "mouseout", function () {
        //   // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        //   infowindow.close();
        // });
      });
    };
  }, []);

  return <KakaoMapPresenter />;
}
