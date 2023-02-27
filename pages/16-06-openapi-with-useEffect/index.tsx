import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    async function fetchDog() {
      const result: any = await axios.get(
        "https://dog.ceo/api/breed/malamute/images/random"
      );
      console.log(result);
      setDogUrl(result.data.message);
    }
    fetchDog();
  }, []);

  return (
    <>
      <div>오픈API연습</div>
      <img src={dogUrl} />
    </>
  );
}
