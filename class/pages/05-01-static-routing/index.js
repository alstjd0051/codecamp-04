import React from 'react'
import { useRouter } from 'next/router'

export default function staticRoutingPage() {

  const router = useRouter()

  const onClickMove = () => {
    router.push('/05-02-static-routed')
  }

  return (
    <div>
      <button onClick={onClickMove}>staticRoutedPage 이동하기</button>
    </div>
  )
}
