import { gql, useApolloClient, useLazyQuery, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

function LoginSuccess() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN); // 페이지 시작하자마자 요청 (모든게 자동)

  // LazyQuery =요청시 기다린다.
  // const [fetchUser, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN); // 원하는곳에서 실행

  // const client = useApolloClient();
  // const result = client.query({}); // 원하는 곳에서 실행,원하는 변수에 담기

  return (
    <>
      <div>로그인 성공하였습니다.</div>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다. </div>
    </>
  );
}

export default withAuth(LoginSuccess);
