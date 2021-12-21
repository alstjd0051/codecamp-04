import Head from 'next/head';
import Image from 'next/image'

export default function BoardsPage() {
  return (
    <>
    <Head>
      <meta property="og:title" content="miiinsseongshop"/>
      <meta property="og:url" content="http://miiinsseong.shop" />
      <meta property="image" content="https://i.pinimg.com/564x/cf/0f/ad/cf0fad61a28c989c327aa56905538240.jpg"/>
      <meta property="og:description" content="그대는 모나리자"/>
    </Head>
    <div>
        <h1>안녕하세요 게시판입니다.</h1>
        <Image src="https://i.pinimg.com/564x/8e/e1/80/8ee1800da1d41552b8c93e028482f5fa.jpg" />
    </div>
    </>
  )
}
