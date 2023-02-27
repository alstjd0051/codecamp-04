import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [myImges, setMyImges] = useState<string[]>([]);

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const myFile = event.target.files?.[0];
    console.log(myFile);

    if (!myFile?.size) {
      alert("파일이 없습니다.");
      return;
    }

    if (myFile.size > 5 * 1024 * 1024) {
      alert("파일용량이 너무 큽니다(제한 5MB)");
      return;
    }

    if (!myFile.type.includes("jpgeg") || !myFile.type.includes("png")) {
      alert("jpeg 또는 png만 업로드 가능합니다");
      return;
    }
    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setMyImges([result.data.uploadFile.url]);
    console.log(myImges);
  }
  return (
    <>
      <input type="file" onChange={onChangeFile} />
    </>
  );
}
