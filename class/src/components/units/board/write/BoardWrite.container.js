import { useMutation } from '@apollo/client'
import { useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'


export default function BoardWrite() {

  const [myQqq, setMyQqq] = useState(false)
  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContent, setMyContent] = useState("")

  const [createBoard] = useMutation(CREATE_BOARD)


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

  async function zzz() {
    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContent }
    })
    console.log(result)
    console.log(result.data.createBoard.message)
  }



  return (
    <BoardWriteUI
      aaa={onChangeMyWriter}
      bbb={onChangeMyTitle}
      ccc={onChangeMyContents}
      abc={zzz}
      qwe={myQqq}

    />
  )

}