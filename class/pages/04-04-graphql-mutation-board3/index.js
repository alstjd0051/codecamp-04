import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
      createBoard(writer: $writer , title: $title, contents: $contents){
        _id
        number
        message
      }
    }
    
`

export default function GraphqlMutationBoard3Page() {
  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContent, setMyContent] = useState("")

  const [createBoard] = useMutation(CREATE_BOARD)

  function onChangeMyWriter(event) { //실무에서 많이쓰는 표현(onChange,Handler)
    setMyWriter(event.target.value)
  }

  function onChangeMyTitle(event) {
    setMyTitle(event.target.value)
  }

  function onChangeMyContents(event) {
    setMyContent(event.target.value)

  }
  const [data, setData] = useState('Data')

  const zzz = async () => {
    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContent }
    })
    console.log(result)
    console.log(result.data.createBoard.message)
    setData(result.data.createBoard.message)
  }




  return (
    <>
      <div>
        작성자: <input type="text" onChange={onChangeMyWriter} />
        제목 : <input type="text" onChange={onChangeMyTitle} />
        내용 : <input type="text" onChange={onChangeMyContents} />
      </div>
      <button onClick={zzz}>계시물 등록하기</button>
      {/* <div onChange={ }></div> */}
    </>
  )
}
