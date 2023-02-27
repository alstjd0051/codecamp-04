// 클로저(함수선언식) - 기초
function firstFunction(arg1: string) {
  return function secondFuc(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}
const resultClosure1 = firstFunction("영희")(26);

// 클로저(함수선언식) - 기초(any)
function firstFunction2(arg1: string) {
  return function secondFuc(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}

const resultClosure2 = firstFunction2("영희")(27);

//
//
//
// 클로저(함수선언식) - 기초(generic)
function firstFunction3<T>(arg1: T) {
  return function secondFuc<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const resultClosure3 = firstFunction3("영희")(27);

//
//
//
// 클로저(화살표함수)
// prettier-ignore
const firstArrow = <T>(arg1: T) => <U>(arg2: U):[T,U] => {
  return [arg1, arg2];
};

const resultClosure4 = firstArrow("영희")(20);

//
//
//
// 클로저(화살표함수)
// prettier-ignore
// C=component , P = props
const firstArrow2 = <C,P extends { aaa: string}>(component: C) => (props: P) => {
  return [component, props];
};

const resultClosure5 = firstArrow2("Component")({ aaa: "철수" });
