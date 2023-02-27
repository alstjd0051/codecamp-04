import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationProductPage() {
  const router = useRouter()
  const [createProduct] = useMutation(CREATE_PRODUCT)

  async function zzz() {
    try {
      const result = await createProduct({
        variables: {
          seller: "철수",
          createProductInput: {
            name: "리모콘",
            detail: "TV리모콘",
            price: 1000
          }
        }
      })
      console.log(result)
      // router.push('/05-08-dynamic-product-read/' + result.data.createProduct._id) // 가장기초
      router.push(`'/05-08-dynamic-product-read/'${result.data.createProduct._id}`) // 템플릿 리터럴
      // router.push('/05-08-dynamic-product-read/result.data.createProduct._id') // 잘못된표기
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      판매자: <input type="text" /><br />
      상품명: <input type="text" /><br />
      상품내용: <input type="text" /><br />
      상품가격: <input type="text" /><br />
      <button onClick={zzz}>상품 등록하기!!!</button>
    </>
  )
}