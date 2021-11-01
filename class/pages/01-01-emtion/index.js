import React from 'react'
import { Brr, MyDiv, MyEmail, MyPassword} from '../../styles/emotion'


export default function EmotionPage() {

  return (
    <>
      <MyDiv>
        로그인
      </MyDiv>
      이메일 : 
      <MyEmail type="text" placeholder="아이디를 입력" />
      비밀번호 : 
      <MyPassword type="password" placeholder="비밀번호를 입력"/>
      나의이미지 : <img src="/images/lotto.png"  />
    </>
  )
}
