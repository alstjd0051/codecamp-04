import {} from "./CovidList.styles";
import axios from "axios";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CovidListUI() {
  // ================================
  //          누적 및 전체 통계
  // ================================
  // 전체 인구
  const [covidPopulation, setCovidPopulation] = useState("");
  // 확진자
  const [covidConfirmed, setCovidConfirmed] = useState("");
  // 사망자
  const [covidDeaths, setCovidDeaths] = useState("");
  // 업데이트 날짜
  const [covidUpdated, setCovidUpdated] = useState("");
  //  도시
  const [capitalCity, setCapitalCity] = useState("");

  useEffect(() => {
    async function fetchCovid() {
      const result: any = await axios.get(
        "https://covid-api.mmediagroup.fr/v1/cases?country=Korea, South"
      );
      //   console.log("<<<<<<<<<<< CovidList >>>>>>>>>>>");
      //   console.log(result.data.All);
      setCovidConfirmed(result.data.All.confirmed);
      setCovidDeaths(result.data.All.deaths);
      setCovidPopulation(result.data.All.population);
      setCovidUpdated(result.data.All.updated);
      setCapitalCity(result.data.All.capital_city);
    }
    fetchCovid();
  });

  return (
    <div>
      <div>This is Covid -19 Infomation Page</div>
      <div>전체 인구 : {covidPopulation}</div>
      <div>도시 : {capitalCity}</div>
      <div>누적 확진자 : {covidConfirmed}</div>
      <div>누적 사망자 : {covidDeaths}</div>
      <div>
        업데이트 날짜 : {covidUpdated.replaceAll("/", ".").split(" ")[0]}
      </div>
    </div>
  );
}
