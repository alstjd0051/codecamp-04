import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";

import { firebaseApp } from "../_app";

export default function FirebasePage() {
  async function onClickSubmit() {
    /* getFirestore(firebaseApp);

    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: "이름",
      title: "제목",
      content: "내용",
    });
    getFirestore(firebaseApp); */

    const product = collection(getFirestore(firebaseApp), "product");
    await addDoc(product, {
      writer: "민성",
      title: "아름다운것",
      content: "너의 모든것",
    });
  }
  async function onClickFetch() {
    const board = collection(getFirestore(firebaseApp), "board");
    const Productboard = collection(getFirestore(firebaseApp), "fetch");
    const result = await getDocs(board);
    const productResult = await getDocs(Productboard);
    const docs = result.docs.map((el) => el.data());
    const Productdocs = productResult.docs.map((el) => el.data());
    console.log(docs);
    console.log(Productdocs);
  }
  return (
    <>
      <div>firebase연습 페이지입니다.</div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>불러오기</button>
    </>
  );
}
