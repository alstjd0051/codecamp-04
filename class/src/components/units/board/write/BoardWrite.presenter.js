import React from 'react'
import { MyButton, MyInput } from './BoardWrite.styles'

export default function BoardWriteUI(props) {

  return (
    <div>
      <div> 작성자: <MyInput type="text" onChange={props.aaa} /> </div>
      <div>제목 : <MyInput type="text" onChange={props.bbb} /> </div>
      <div>내용 : <MyInput type="text" onChange={props.ccc} /> </div>
      <MyButton onClick={props.abc} qqq={props.qwe}>게시물 등록하기</MyButton>
    </div >
  )
}
