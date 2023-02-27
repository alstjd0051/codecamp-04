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

export default function PagenationNextPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: 1 } });

  const { data: dataBoardsCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);
  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
    : 0;

  console.log(lastPage);
  function onClickPage(event: MouseEvent<HTMLLIElement>) {
    if (event.target instanceof Element)
      refetch({ page: Number(event.target.id) });
  }

  function onClickNextPage(event: MouseEvent<HTMLSpanElement>) {
    if (lastPage < startPage + 10) return;
    setStartPage((prev) => prev + 10);
  }
  function onClickPrevPage(event: MouseEvent<HTMLSpanElement>) {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  }

  return (
    <>
      <div>
        <h1>페이지네이션 연습</h1>
        <div>
          {data?.fetchBoards.map((el) => (
            <div key={el._id}>
              {el.title} {el.writer}
            </div>
          ))}
        </div>
      </div>
      <span onClick={onClickPrevPage}>이전</span>
      <ul>
        {new Array(10).fill(1).map(
          (_, index) =>
            startPage + index <= lastPage && (
              <li
                onClick={onClickPage}
                key={startPage + index}
                id={String(startPage + index)}
              >
                {startPage + index}
              </li>
            )
        )}
      </ul>
      <span onClick={onClickNextPage}>다음</span>
    </>
  );
}
