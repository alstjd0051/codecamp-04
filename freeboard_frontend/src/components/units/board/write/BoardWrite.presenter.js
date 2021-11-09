import React from 'react'
import { Button1, Button2, Button3 } from './BoardWrite.styles'

export default function BoardWriteUI(props) {
  return (
    <div>
      <Button1 onClick={props.onClickMove1}>1번 게시글로 이동하기</Button1>
      <Button2 onClick={props.onClickMove2}>2번 게시글로 이동하기</Button2>
      <Button3 onClick={props.onClickMove3}>3번 게시글로 이동하기</Button3>
    </div>
  )
}
