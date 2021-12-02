import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import styled from "@emotion/styled";

interface IMyButtonProps {
  isValid: boolean;
}

const MyButton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "skyblue" : "gray"};
`;

const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("반드시 입력해야하는 필수사항입니다."),

  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15글자까지 입니다.")
    .required("비밀번호는 반드시 입력해주세요"),
}); // yup의 변수명은 주로 schema로 사용한다.

interface FormValues {
  myEmail: string;
  myPassword: string;
}

export default function ReactHookFormPage() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickLogin(data: FormValues) {
    // LoginUser API 요청하기
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onClickLogin)}>
        이메일: <input type="text" {...register("myEmail")} />
        <div style={{ color: "red" }}>{formState.errors.myEmail?.message} </div>
        비밀번호: <input type="password" {...register("myPassword")} />
        <div style={{ color: "red" }}>
          {formState.errors.myPassword?.message}{" "}
        </div>
        <MyButton isValid={formState.isValid}>로그인하기</MyButton>
      </form>
    </>
  );
}
