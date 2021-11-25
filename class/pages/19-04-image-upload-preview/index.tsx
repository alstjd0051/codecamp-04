import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
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
  const [myImges, setMyImges] = useState<string[]>([]);

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const myFile = event.target.files?.[0];
    console.log(myFile);

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setMyImges([result.data.uploadFile.url]);
    console.log(myImges);
  }
  function onClickMyImage() {
    fileRef.current?.click();
  }
  return (
    <>
      <IMG onClick={onClickMyImage}>이미지 선택</IMG>
      <Imges src={`https://storage.googleapis.com/${myImges[0]}`} />
      <Input type="file" onChange={onChangeFile} ref={fileRef} />
    </>
  );
}

const IMG = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
`;

const Input = styled.input`
  display: none;
`;
const Imges = styled.img``;
