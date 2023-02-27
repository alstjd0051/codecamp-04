import React, { useState } from 'react'

export default function SignupStatePage() {

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("")

  function aaa(event) {
    // event.target // 이메일 입력: <input type="text" onChange={aaa} />> 태그전채를 가져옴


    setEmail(event.target.value)
  }

  function bbb(event) {
    setPassword(event.target.value)
  }

  function ccc() {
    console.log('email:', email)
    console.log('password', password)

    if (email.includes('@') === false) {
      // alert('이메일을 다시 입력해주세요')
      setEmailError('이메일을 다시 입력해주세요')
    }
  }

  return (
    <>
      <div>
        이메일 입력: <input type="text" onChange={aaa} />
      </div>
      <div style={{ color: "red" }}>{emailError}</div>
      <div>
        비밀번호 입력: <input type="password" onChange={bbb} />
      </div>
      <button onClick={ccc}>회원가입</button>
    </>
  )
}
