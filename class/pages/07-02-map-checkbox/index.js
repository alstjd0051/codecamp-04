import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      createdAt
    }
  }
`;
const DELETS_BOARDS = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  width: 20%;
`;

export default function MapCheckboxPage() {
  const [deleteBoard] = useMutation(DELETS_BOARDS);
  const { data } = useQuery(FETCH_BOARDS);

  async function onClickDelete(event) {
    try {
      await deleteBoard({
        variables: { number: Number(event.target.id) },
        refetchQueries: [{ query: FETCH_BOARDS }]
      });
    } catch (error) {
      alert(error.message);
    }
    // refetchQueries: 'all'
  }
  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <Row key={JSON.stringify(el)}>
          {" "}
          {/* 객체여서 JSON.stringify를 써서 형식을 바꿔준다 */}
          <Column>
            <input type="checkbox" />
          </Column>
          <Column> {index + 1} </Column>
          <Column> {el.title} </Column>
          <Column> {el.writer} </Column>
          <Column> {el.createdAt} </Column>
          <Column>
            <button id={el.number} onClick={onClickDelete}>
              삭제하기
            </button>
          </Column>
        </Row>
      ))}
    </div>
  );
}
