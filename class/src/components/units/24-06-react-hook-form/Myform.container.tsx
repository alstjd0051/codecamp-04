import MyformUI from "./Myform.presenter";
import { FormValues } from "./Myform.types";

export default function Myform() {
  function onClickLogin(data: FormValues) {
    // LoginUser API 요청하기
    console.log(data);
  }

  return <MyformUI onClickLogin={onClickLogin} />;
}
