import { gql, useQuery } from "@apollo/client";
import { useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PaginationBasicPage() {
  const [startPage, setStartPage] = useState(21);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const { data: dataBoadsCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);
  const lastPage = dataBoadsCount
    ? Math.ceil(dataBoadsCount?.fetchBoardsCount / 10)
    : 0;

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    if (event.target instanceof Element)
      refetch({ page: Number(event?.target.id) });
  }
  function onClickPrevPage() {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }

  /*   let myPage = "";
  for (let i = 0; i < 10; i++) {
    myPage += (
      <span
        key={startPage + i}
        onClick={onClickPage}
        id={String(startPage + i)}
        style={{ margin: "10px", cursor: "pointer" }}
      >
        {startPage + i}
      </span>
    );
  } */

  return (
    <>
      <h1>페이지네이션 연습</h1>
      <div>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id}>
            {el.title} {el.writer}
          </div>
        ))}
      </div>
      <span
        onClick={onClickPrevPage}
        style={{ margin: "10px", cursor: "pointer" }}
      >
        이전페이지
      </span>
      {new Array(10).fill(1).map(
        (_, index) =>
          startPage + index <= lastPage && (
            <span
              key={startPage + index}
              onClick={onClickPage}
              id={String(startPage + index)}
              style={{ margin: "10px", cursor: "pointer" }}
            >
              {startPage + index}
            </span>
          )
      )}
      <span
        onClick={onClickNextPage}
        style={{ margin: "10px", cursor: "pointer" }}
      >
        다음페이지
      </span>
    </>
  );
}
