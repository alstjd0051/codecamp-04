import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  // 사용 하지 않는 파라미터는 지울 수 있으나 콤마를 꼭 넣어줘야한다.
  const [myImages, setMyImages] = useState<string[]>([]);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const myFile = event.target.files?.[0];
    console.log(myFile);

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setMyImages([result.data.uploadFile.url]);
  };

  const onClickMyImages = () => {
    fileRef.current?.click();
  };

  return (
    <>
      {myImages[0] ? (
        <div
          style={{
            width: "78px",
            height: "78px",
            backgroundColor: "lightgray",
            marginRight: "15px",
          }}
          onClick={onClickMyImages}
        >
          <img
            style={{ width: "78px", height: "78px" }}
            src={`https://storage.googleapis.com/${myImages[0]}`}
          />
        </div>
      ) : (
        <div
          style={{
            width: "78px",
            height: "78px",
            backgroundColor: "lightgray",
            marginRight: "15px",
          }}
          onClick={onClickMyImages}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              lineHeight: "70px",
            }}
          ></span>
        </div>
      )}
      <input
        ref={fileRef}
        style={{
          display: "none",
          width: "100px",
          height: "100px",
        }}
        type="file"
        onChange={onChangeFile}
      />
    </>
  );
}
