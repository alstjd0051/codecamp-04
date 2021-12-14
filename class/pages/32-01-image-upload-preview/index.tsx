import { useState } from "react";

export default function ImageUploadPreViewPage() {
  const [imageUrl, setImageUrl] = useState("");

  function onChangeFile(e) {
    const myFile = e.target.files[0];
    console.log(myFile);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(myFile);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImageUrl(data.target.result);
    };
  }

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} alt="이미지출력창" width="100%" height="100%" />
    </div>
  );
}
