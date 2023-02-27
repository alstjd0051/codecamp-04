import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); // ReactQuill을 임포트해주는데 ssr(서버)에는 승인하지 않는다.

export default function index() {
  function handleChange(value: string) {
    console.log(value);
  }

  /* if (process.browser) {
    console.log("나는 브라우저다");
  } else {
    console.log("나는 서버다");
  } */

  return (
    <>
      작성자 : <input type="text" />
      <br />
      비밀번호 : <input type="password" />
      <br />
      제목 : <input type="text" />
      <br />
      내용: <ReactQuill onChange={handleChange} />
      <br />
      <button>등록하기</button>
    </>
  );
}
