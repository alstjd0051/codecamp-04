import { useMutation } from '@apollo/client'
import { useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { useRouter } from 'next/router'

export default function BoardWrite(props) {
  const router = useRouter()

  const [myQqq, setMyQqq] = useState(false)
  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContent, setMyContent] = useState("")

  const [createBoard] = useMutation(CREATE_BOARD)
  const [updateBoard] = useMutation(UPDATE_BOARD)


  function onChangeMyWriter(event) { //실무에서 많이쓰는 표현(onChange,Handler)
    setMyWriter(event.target.value)
    if (myWriter !== "" && myTitle !== "" && myContent !== "") {
      setMyQqq(true)
    } else {
      setMyQqq(false)
    }
  }

  function onChangeMyTitle(event) {
    setMyTitle(event.target.value)
    if (myWriter !== "" && myTitle !== "" && myContent !== "") {
      setMyQqq(true)
    } else {
      setMyQqq(false)
    }
  }

  function onChangeMyContents(event) {
    setMyContent(event.target.value)
    if (myWriter !== "" && myTitle !== "" && myContent !== "") {
      setMyQqq(true)
    } else {
      setMyQqq(false)
    }
  }

  // 등록하기
  async function zzz() {
    alert("등록되었습니다")
    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContent }
    })
    console.log(result)
    console.log(result.data.createBoard.message)
    router.push(`/08-06-board/${result.data.createBoard.number}`)
  }

  //수정하기
  async function xxx() {
    alert("수정되었습니다")
    const result = await updateBoard({
      variables: { number: Number(router.query.myNumber), writer: myWriter, title: myTitle, contents: myContent }
    })
    console.log(result)
    router.push(`/08-06-board/${router.query.myNumber}`)
  }



  return (
    <BoardWriteUI
      aaa={onChangeMyWriter}
      bbb={onChangeMyTitle}
      ccc={onChangeMyContents}
      zzz={zzz}
      qwe={myQqq}
      ggg={props.isEdit}
      xxx={xxx}
    />
  )

}