`
any가 가져오는 타입 누수를 막기위해 나온 대체자.
응용 프로그램을 작성할 때는 모르는 변수의 타입을 묘사할 수도 있음. 
ex) api로 불러오는 동적 컨텐츠.

이 경우, 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원해 unknown 타입이 생김. !! 
`;

declare const maybe: unknown;

// const aNumber: number = maybe; Error가 나옴.

if (maybe === true) {
  const aBoolean: boolean = maybe;
}

if (typeof maybe === "string") {
  // 이러한 코드르 타입 가드라고 함.
  const aString = maybe; // 이렇게 타입을 할당도 해줌.
}

`
unknown ts 3.0부터 지원
any보다 type-safe한 타입
어떤 값이든 할당할 수 있지만 
사용하려면 타입을 추론할 수 있게끔 타입의 유형을 좁히거나 타입을 확정해줘야 사용할 수 있다.!!!!!
`;
