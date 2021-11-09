import { useRouter } from 'next/router'
import React from 'react'
import BoardWriteUI from './BoardWrite.presenter'

export default function BoardWrite() {
  const router = useRouter()

  const onClickMove1 = () => {
    router.push('/page/quiz/04-graphql')
  }
  const onClickMove2 = () => {
    router.push('/quiz/03-restapi')
  }
  const onClickMove3 = () => {
    router.push('/quiz/02-state-login')
  }

  return (
    <BoardWriteUI
      btn1={onClickMove1}
      btn2={onClickMove2}
      btn3={onClickMove3}
    />

  )
}
