import { useState } from "react";

export default function index() {
  // const [qqq, setQqq] = useState("안녕하세요");
  // const [count, setCount] = useState(0);

  // function zzz() {
  //   setQqq("반갑습니다.");
  // }
  // function zero() {
  //   setCount(count++);
  // }
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");

  function testemail(event) {
    setEmail(event.target.value);
  }

  function testpassword(event) {
    setPassword(event.target.value);
  }

  function sign() {
    console.log(email);
    console.log(password);
    if (email.includes("") === false) {
      setEmailError("이메일을 다시 입력해주세요");
    }
  }

  return (
    //  <div>
    //   <button onClick={zzz}>{qqq} </button>
    //   <div> {count} </div>
    //   <button onClick={zero}>카운트 증가</button>
    // </div>

    <div>
      <div>이메일을 입력하세요</div>
      <div>
        <input
          type="text"
          placeholder="이메일을 입력하세요"
          onChange={testemail}
        />
      </div>
      <div style={{ color: "red" }}>{emailError} </div>
      <div>비밀번호를 입력하세요</div>
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        onChange={testpassword}
      />
      <button onClick={sign}>회원가입</button>
    </div>
  );
}
