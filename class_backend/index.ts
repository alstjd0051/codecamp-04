import { DateString } from "./../freeboard_frontend/src/components/units/boardComment/list/BoardCommentList.styles";
// console.log("Hello World");
import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.mysql";

const mytypeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String!
    age: Int
  }

  type ABC {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoards: [ABC]
  }

  type Mutation {
    # 주석처리 createBoard(writer: String, title: String, age: Int): String
    createBoard(createBoardInput: CreateBoardInput!): String
    deleteBoard(number: Int!): String
  }
`;

const myResolvers = {
  Query: {
    fetchBoards: async () => {
      // 어쩌구저쩌구 ( 데이터베이스에서 게시물 꺼내오기)
      const result = await Board.find({ where: { deletedAt: null } }); // {isDeleted: false} -> 소프트딜리트
      console.log(result);
      return result;
    },
  },

  Mutation: {
    // loginCheck: (parent: any, args: any) => {},
    deleteBoard: (_: any, args: any) => {
      Board.update({ number: args.number }, { deletedAt: new Date() }); // 왼쪽의 {number}는 조건
      return "게시물이 정상적으로 삭제되었습니다.";
    },

    createBoard: async (_: any, args: any) => {
      /////////// 1번째 방법 ///////////
      /*       //args: 인자
      // 어쩌구저쩌구 ( 데이터베이스에서 게시물 등록하기)
      await Board.insert({
        title: "주제",
        writer: "민성",
        age: 26,
      }); */
      /////////// 2번째 방법 ///////////
      /* await Board.insert({
        title: args.title,
        writer: args.writer,
        age: args.age,
      }); */
      /////////// 3번쨰 방법 ///////////
      /* await Board.insert({
        title: args.createBoardInput.title,
        writer: args.createBoardInput.writer,
        age: args.createBoardInput.age,
      }); */
      /////////// 3번째 방법 - spread ///////////
      await Board.insert({
        ...args.createBoardInput,
      });
      return "게시물 조회에 성공하였습니다.";
    },
  },
};

// 1. 아폴로 서버 설정
const server = new ApolloServer({
  typeDefs: mytypeDefs,
  resolvers: myResolvers,
});

createConnection({
  type: "mysql",
  database: "mysql",
  username: "root", // mysql에 접속할수있는 계정 번호
  password: "codecamp",
  host: "34.64.207.239",
  port: 3317,
  // @ts-ignore
  entities: [__dirname + "/*.mysql.ts"], // 테이블이 들어가는 위치
  logging: true,
  synchronize: true, //데이터베이스와 동기화
})
  // 2. 아폴로 백엔드 서버 오픈
  .then(() => {
    // 연결 성공시 실행하기
    console.log("연결성공");
    server.listen({ port: 2800 });
  })
  .catch((error) => {
    //연결 실패시 실행하기
    console.log("연결실패");
  });

//then일경우 연결애 성공
//catch할때는 연결에 실패
