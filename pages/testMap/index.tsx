import Head from "next/head";
import { useEffect } from "react";

export default function MapUI() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=4c33ef03752164bbd0f08a2dfcc871f3&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementById("map");
        const option = {
          center: new kakao.maps.LatLng(37.486592, 126.8973568),
          level: 3,
        };
        const map = new kakao.maps.Map(container, option);
      });
    };
  }, []);
  return (
    <>
      <Head></Head>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
