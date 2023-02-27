import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
      createBoard(writer: $writer , title: $title, $contents: "옹"){
        _id
        number
        message
      }
    }
    
`

export default function GraphqlMutationBoard2Page() {
  const [createBoard] = useMutation(CREATE_BOARD)
event;

  const zzz = async () => {
    const result = await createBoard({
      variables: { writer: "456번", title: "이거 너무한거 아니냐고", content: "사람이 죽었잖아요" }
    })
    console.log(result)
    console.log(result.data.createBoard.message)

    setData(result.data.createBoard.message)
  }

  const [data, setData] = useState('Data')



  return (
    <>
      <div>
        <div> {data} </div>
        <button onClick={zzz}>GRAPHQL-API 요청하기</button>
      </div>
    </>
  )
}
