import Head from 'next/head';
import Image from 'next/image'
import {request,gql} from 'graphql-request'

export default function markets(props) {
  return (
    <>
    <Head>
      <meta property="og:title" content={props.fetchUseditem.name} />
      {/* <meta property="og:url" content="http://miiinsseong.shop" /> */}
      <meta property="og:image" content={props.fetchUseditem.remarks} />
      <meta property="og:description" content="그대는 모나리자"/>
    </Head>
    <div>
        <h1>안녕하세요.상품페이지입니다.</h1>
        <Image src="https://i.pinimg.com/564x/8e/e1/80/8ee1800da1d41552b8c93e028482f5fa.jpg" />
    </div>
    </>
  )
}


const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!){
    fetchUseditem(useditemId: $useditemId){
        name
        remarks
        images
    }
  }
`

// getServerSideProps이름은 다르게 해줄수 없다.
export const getServerSideProps = async(context) => {
  const result = await request(
    "https://backend04.codebootcamp.co.kr/graphql",
    FETCH_USEDITEM,
    {useditemId: context.query.useditemId })

  
  return {
    props: {
      fetchUseditem: {
        name: result.fetchUseditem.name, 
        remarks: result.fetchUseditem.remarks, 
        images: result.fetchUseditem.images[0]
        }
      }
  }

}