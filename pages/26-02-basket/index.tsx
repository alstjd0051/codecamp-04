import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

// 순서:  게시글 목록을 10개 불러온다음 선택한 목록을 가져온다.
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;
export default function index() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardArgs>(
    FETCH_BOARDS
  );

  const onClickBasket = (el) => () => {
    console.log(el);

    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    // 이미 담았는지 체크
    let isExists = false;
    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담으셨습니다");
      return;
    }

    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    /* REST파라미터 안썼을때.
    const newEl = { ...el };
    delete newEl.__typename;
    baskets.push(newEl); */

    localStorage.setItem("basket", JSON.stringify(baskets));
  };

  /* function onClickBasket (el) {
    const asdfasdf = "aasdfasdf"
      return function 이름상관없음(e){
      console.log(el)
    }
  }; */

  function onClickLogin() {
    alert("로그인에 성공하였습니다.");
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    if (baskets.length) {
      const result = confirm(
        "장바구니에 담으신 상품이 있습니다.! 장바구니 페이지로 이동할까요?."
      );
      if (result) router.push("26-03-basket-logged-in");
    }
  }

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span>{index + 1} </span>
          <span>{el.writer} </span>
          <span>{el.title} </span>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
