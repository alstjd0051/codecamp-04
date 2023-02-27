import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { v4 as uuid4 } from "uuid";
import _ from "lodash";

const FETCH_BOARD = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function SearchPaginationDebouncePage() {
  // const [mySearch, setMySearch] = useState("");
  const [myKeyword, setMyKerword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARD);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setMyKerword(data);
  }, 500);

  function onChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    getDebounce(e.target.value);
    // setMySearch(e.target.value);
  }

  /* function onClickSearch() {
    // mySearch 키워드로 fetchBoard 요청하기
    refetch({ search: mySearch, page: 1 });
    setMyKerword(mySearch);
  } */

  function onClickPage(e: MouseEvent<HTMLSpanElement>) {
    if (e.target instanceof Element)
      refetch({ search: myKeyword, page: Number(e.target.id) });
  }
  return (
    <>
      <h1>검색페이지</h1>
      검색어 입력 :{" "}
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        onChange={onChangeSearch}
      />
      {/* <button onClick={onClickSearch}>검색</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ paddingRight: "50px" }}>{el.writer}</span>
          <span style={{ paddingRight: "50px" }}>{el.title} </span>
          <span style={{ paddingRight: "50px" }}>{el.createdAt} </span>
        </div>
      ))}
      <div>
        {new Array(10).fill(1).map((_, index) => (
          <span key={uuid4()} onClick={onClickPage} id={String(index + 1)}>
            {index + 1}
          </span>
        ))}
      </div>
    </>
  );
}
