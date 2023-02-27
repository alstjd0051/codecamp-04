import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_PRODUCT = gql`
  mutation createProduct($seller:String,$createProductInput:CreateProductInput!) {
      createProduct(seller: $seller,createProductInput: $createProductInput ){
        _id
        number
        message
      }
    }
    
`

export default function GraphqlMutationBoardProductPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT)
  const [mySeller, setMySeller] = useState("")
  const [myName, setMyName] = useState("")
  const [myDetail, setMyDetail] = useState("")
  const [myPrice, setMyPrice] = useState("")


  function onChangeSeller(event) {
    setMySeller(event.target.value)
  }
  function onChangeName(event) {
    setMyName(event.target.value)
  }
  function onChangeDetail(event) {
    setMyDetail(event.target.value)
  }
  function onChangePrice(event) {
    setMyPrice(event.target.value)
  }

  const zzz = async () => {
    const result = await createProduct({
      variables: {
        seller: mySeller,
        createProductInput: {
          name: myName,
          detail: myDetail,
          price: Number(myPrice)
        }
      }
    })
    console.log(result)
  }




  return (
    <>
      <div>
        판매자: <input type="text" onChange={onChangeSeller} />
        상품명 : <input type="text" onChange={onChangeName} />
        상품내용 : <input type="text" onChange={onChangeDetail} />
        상품가격 : <input type="number" onChange={onChangePrice} />
      </div>
      <button onClick={zzz}>상품등록하기</button>
    </>
  )
}
