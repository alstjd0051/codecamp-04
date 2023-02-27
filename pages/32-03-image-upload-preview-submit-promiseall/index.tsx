import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

export default function ImageUploadPreViewSubmitPromiseAllPage() {
  const [myFiles, setMyFiles] = useState([]);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [imageUrl, setImageUrl] = useState("");

  function onChangeFile(e) {
    const file = e.target.files[0];
    console.log(file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImageUrl(data.target?.result);
      setMyFiles((prev) => [...prev, file]);
    };
  }

  async function onClickSubmit() {
    let myImageUrls = ["", "", ""];
    // 1. 파일업로드
    if (myFiles.length) {
      //  1. 각각올리기 테스트
      const start = performance.now();
      await uploadFile({ variables: { file: myFiles[0] } });
      await uploadFile({ variables: { file: myFiles[0] } });
      await uploadFile({ variables: { file: myFiles[0] } });
      await uploadFile({ variables: { file: myFiles[0] } });
      await uploadFile({ variables: { file: myFiles[0] } });
      const end = performance.now();
      console.log(end - start);

      // 2.동시 올리기 테스트
      // const start = performance.now();
      // Promise.all([...]) vs Promise.race([...])
      //                      먼저끝내는걸 캐치
      // const result = await Promise.all([
      //   uploadFile({ variables: { file: myFiles[0] } }),
      //   uploadFile({ variables: { file: myFiles[0] } }),
      //   uploadFile({ variables: { file: myFiles[0] } }),
      //   uploadFile({ variables: { file: myFiles[0] } }),
      //   uploadFile({ variables: { file: myFiles[0] } }),
      //   uploadFile({ variables: { file: myFiles[0] } }),
      //   uploadFile({ variables: { file: myFiles[0] } }),
      //   uploadFile({ variables: { file: myFiles[0] } }),
      //   uploadFile({ variables: { file: myFiles[0] } }),
      //   uploadFile({ variables: { file: myFiles[0] } }),
      // ]);
      // const end = performance.now();
      // console.log(end - start);

      // result = [result1, result2, result3, result4, result5, result6, result7, result8, result9, result10]
      //           => [url1, url2, url3, url4, url5, url6, url7, url8, url9, url10]
      // result.map((el) => el.data.uploadFile.url) ==> [url1, url2,...,url10]
      // myImageUrls = result.map((el) => el.data.uplo)
      // myImageUrls = result.map((el) => el.data?.uploadFile.url);

      /* const result1 = await uploadFile({
        variables: {
          file: myFiles[0],
        },
      });
      myImageUrls[0] = result1.data?.uploadFile.url || "";

      const result2 = await uploadFile({
        variables: {
          file: myFiles[1],
        },
      });
      myImageUrls[1] = result2.data?.uploadFile.url || "";

      const result3 = await uploadFile({
        variables: {
          file: myFiles[2],
        },
      });
      myImageUrls[2] = result3.data?.uploadFile.url || ""; */
    }

    // 2. 업로드파일로 게시물등록
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "민성",
          password: "1234",
          title: "안녕",
          contents: "이미지 업로드 연습중",
          images: [...myImageUrls],
        },
      },
    });
    // console.log(result2.data?.createBoard._id);
  }

  return (
    <>
      <h1>ImageUploadPreViewSubmitPage</h1>
      <input type="file" onChange={onChangeFile} multiple />
      <img src={imageUrl} alt="이미지출력창" width="50%" height="50%" />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
