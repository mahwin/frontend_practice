`
never타입은 모든 타입의 subtype이며, 모든 타입에 할당할 수 있음.
하지만 never에는 그 어떤 것도 할당할 수 없다.
any조차도 never에게 할당할 수 없음.
`;

function error(message: string): never {
  //never 타입 : 아무것도 리턴하지 않는다.

  throw new Error(message);
}

let onlyString: string = "b";
if (typeof onlyString != "string") {
  onlyString; //never 타입임. 잘못된 타입을 넣는 실수를 막을 수 있ㅇ므.
}

declare const a: string | number;

if (typeof a != "string") {
  a; // 이렇게 되면 number만 할당 가능함.
}

//조건부 타입
type Indexalbe<T> = T extends string ? T & { [index: string]: any } : never;

// const b : Indexalbe<{}> ='123';  Error 잘못된 타입을 넣는 실수를하면 never타입을 할당해서 타입을 잘 못 썻으니 사용못해라고 알려줄 때 사용가능!!!
