import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
  mutation{
      createBoard(writer: "깐부", title: "우린깐부잖아", contents: "옹") {
        _id
        number
        message
      }
    }
`

export default function GraphqlMutationBoard1Page() {
  const [createBoard] = useMutation(CREATE_BOARD)

  const zzz = async () => {
    const result = await createBoard()
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
