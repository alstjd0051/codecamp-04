export default function TypescriptPage() {
  // 문자타입 - 타입추로
  let aaa = "안녕하세요";
  // aaa = 3;

  // 문자타입
  let bbb: string;
  bbb = "반갑습니다";
  // bbb = 123

  let ccc: number = 5;
  // ccc = 'asdf' //X =? ccc는 숫자

  // let ddd = [1, 2, 3, 4, 5, 6]; //숫자배열
  // ddd = ["asdasd","asdasd","ASD"]; //X 문자배열

  // 배열타입
  let ddd: number[] = [1, 2, 3, 4, 5, 6]; //숫자배열
  let eee: string[] = ["a", "b", "c", "d", "e"];
  let fff: number[] | string[] = [1, 2, 3, 4, 5]; // |(union_type) => 왼쪽과 오른쪽도 된다는 의미
  fff = ["a", "b", "c"];
  let ggg: (number | string)[] = [1, "b", 2, "c"];

  // 객체타입
  //관례..?
  interface IProfile {
    name: string;
    age: number | string;
    shcool: string;
  }

  let profile: IProfile = {
    name: "철수",
    age: 8,
    shcool: "다람쥐초등학교",
  };
  profile.age = "8살";
  // profile.shcool = 3; // interface에서 타입을 정해줬기때문에 숫자보단 문자열로 정해줘야한다.

  return <div>{profile}</div>;
}
