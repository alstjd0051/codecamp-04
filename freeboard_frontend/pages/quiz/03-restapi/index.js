import React, { useState } from 'react'
import axios from 'axios'

export default function REST_GRAPHQL_API() {

  const [rest, setRest] = useState("Check")

  async function req() {
    const result = await axios.get('https://koreanjson.com/users');
    console.log(result)



    setRest(result.data)
  }

  return (
    <>
      <div> {req} </div>
      <button onClick={req}>REST-API 요청하기</button>
    </>
  )
}
