# 날씨가 부쩍 추워진 12월 모두 감기 조심하고 건강하세요!

# 권한분기와 관리자

> 권한을 나눈다.
> 크게 관리자와 사용자로 나눈다. 그 사이에서 모두 같은 입장이라면 권한분리는 필요가없다. 그래서 권한 분기를하여 각각의 페이지를 따로 따로 나누어 주어야한다.

# 클로저

> 함수와그 함수가 선언되었을때 렉시컬 환경(Lexical Environment)의 조합이다.

> #### 클래스 방식
>
> ```jsx
> const Earth = require("earth");
> const Society = require("society");
> // An ES6 class!
> class Bourgeoisie {
>   constructor(land, capital) {
>     this.land = land;
>     this.capital = capital;
>   }
>   exploitForProfit(proletariat) {
>     const labor = proletariat.employ();
>     const goods = this.capital.produce(labor);
>     return goods.sellTo(proletariat) + this.land.rentTo(proletariat);
>   }
> }
> // Usage
> function initClassStruggle() {
>   const land = Earth.getLand();
>   const capital = Society.industrialize();
>   const bourgeoisie = new Bourgeoisie(land, capital);
>   Society.on("workday", () => {
>     bourgeoisie.exploitForProfit(Society.getProletariat());
>   });
> }
> initClassStruggle();
> ```

> #### 클로저 방식
>
> ```js
> const Earth = require("earth");
> const Society = require("society");
> // A closure.
> function Bourgeoisie(land, capital) {
>   function exploitForProfit(proletariat) {
>     const labor = proletariat.employ();
>     const goods = capital.produce(labor);
>     return goods.sellTo(proletariat) + land.rentTo(proletariat);
>   }
>   return {
>     exploitForProfit: exploitForProfit,
>   };
> }
> // Usage
> function initClassStruggle() {
>   const land = Earth.getLand();
>   const capital = Society.industrialize();
>   const bourgeoisie = Bourgeoisie(land, capital);
>   Society.on("workday", () => {
>     bourgeoisie.exploitForProfit(Society.getProletariat());
>   });
> }
> ```

# HOC

> `Higer Order Component` 상위 컴포넌트
> 로그인이 필요한 모든 페이지를 처리해야한다고 가정할때 페이지가 하나가 아닌 여러개의 페이지라면 혹은 몇백개의 페이지라면 복붙(복사 붙여넣기)를 할 수 없으미 HOC를 하나로 만들어 이문제를 해결해야 속 편하다.

### HOC 특징

> 1. 데이터를 클로저 함수의 특징을 이용해 손실없이 전달할 수 있습니다.
>    e.target.id 등을 이용하지 않고도 바로 ㅇ함ㅅ구에서 전달받은 index값을 전달하여 출력할 있었습니다.
> 2. id를 남용하지 않아도 되며 id남용으로 오류를 방지할 수 있다.

### HOC사용방법

> 사용하려는 페이지에서
>
> ```tsx
> import { withAuth } from "hocs/withAuth";
> const HocPage = () => {
>   return <div>HOC 연습 페이지</div>;
> };
> export default withAuth(HocPage);
> ```

> #### HOC페이지
>
> ```tsx
> import { useRouter } from "next/router";
> import { useContext, useEffect } from "react";
> import { GlobalContext } from "../pages/_app";
> export const withAuth = (Computer) => (props) => {
>   const router = useRouter();
>   const { accessToken } = useContext(GlobalContext);
>   useEffect(() => {
>     if (!accessToken) {
>       alert("로그인이 필요합니다");
>       router.push("/");
>     }
>   }, []);
>   return <Component {...props} />;
> };
> ```
>
> - withAuth함수는 화살표 함수로서 무명의 클로저 함수가 하낟 ㅓ있다고 보면된다.
>   자바스크립트의 클로저 함수의 스코프 특성을이용하여 데이터 손실없이 전달하기 위해서입니다.

```tsx
import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  if (!accessToken) {
    alert("로그인 한 사람만 입장 가능합니다. 로그인을 먼저 해주세요");
    router.push("/22-01-login");
  }

  return <Component {...props} />;
};
```

```js
function aaa() {
  return function bbb() {
    console.log("안녕하세요");
  };
}
aaa()(
  // bbb() {console.log("안녕하세요")}

  aaa()
)(); // 안녕하세요

aaa()(); // 안녕하세요
```

#### `aaa는 외부함수 bbb는 내부함수`

```js
function aaa(qwer) {
  const asdf = "asdfghjkl";

  return function bbb(zxcv) {
    console.log('안녕하세요')
    console.log('qwe은',qwer)
    console.log('zxcv는',zxcv)
    console.log('asdf는',asdf')
  }
}
aaa(123) /*  function bbb(zxcv) {
    console.log('안녕하세요')
    console.log('qwe은',qwer)
    console.log('zxcv는',zxcv)
    console.log('asdf는',asdf') */

aaa(123)(666)
/*안녕하세요
qwe은 123
zxcv는 666
asdf는 */


```

hoc를 만들때 주로 with를 쓴다.

```js
withAuth.tsx; // 로그인을 검증하는 컴포넌트(인증을 하는것이기때문에 페이지 컴포넌트에만 넣어두면 될것같다
```

![](https://images.velog.io/images/alstjd0051/post/fe4d11c7-7ccf-4003-90c7-1148afbcf5c4/image.png)

# HOF

#### HOF 는 함수를 인자로 받아 새로운 함수를 반환하는 함수

`함수부분에 리턴을 JSX형식으로 한다면 HOC라고하고`
`함수부분에 리턴을 JSX형식으로 하지않으면 HOF라고 한다.`

브라우저가 FE와 연결을 하고 Br가 그리면서 FE와 비교(diffing)를 한다.
그리고 최종적으로 비교(Hydration)한다.
