import React from 'react'

export default function map_filter() {

  /* const classmates = [
    { name: '철수', age: "13" },
    { name: '영희', age: "10" },
    { name: '훈이', age: "11" },
  ]
  const aaa = classmates.map((el) => ({ name: el.name, age: el.age, school: '토끼초등학교' }))

  console.log(aaa) */

  const FRUITS = [
    { number: 1, title: "레드향" }, // <div>1 레드향</div>
    { number: 2, title: "샤인머스켓" }, // <div>2 샤인머스켓</div>
    { number: 3, title: "산청딸기" }, // <div>3 산청딸기</div>
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
  ];

  // const aaa = [<div>1 레드향</div>, <div>2 샤인머스켓</div>, <div>3 산청딸기</div>]

  // const bbb = FRUITS.map((el) => (
  //   <div><h1>{el.number}</h1> <h2>{el.title}</h2></div>
  // )
  // )

  const classmates = [
    { name: '철수', age: "13", school: "토끼초등학교" },
    { name: '영희', age: "10", school: "다람쥐초등학교" },
    { name: '훈이', age: "11", school: "토끼초등학교" },
  ]

  const school = classmates.filter((el) => el.school === "토끼초등학교")
  const age = classmates.filter((el) => el.age == 11)
  const named = classmates.filter((el) => el.name === "영희")

  console.log(school)
  console.log(age)
  console.log(named)

  const abc = classmates
    .filter((el) => (el.age >= 11))
    .map((el) => ({ name: el.name, age: el.age, school: "다람쥐초등학교" }))

  console.log(abc)

  return (
    <>
      {/* <div>{aaa}</div> */}
      {/* <div >{bbb}</div> */}
      {/* <div> {school}  </div> */}
      {/* <div> {age}  </div> */}
    </>
  )
}
