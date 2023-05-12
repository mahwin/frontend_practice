`
Symbol
ECMA 2015d에 추가됨.
new Symbol로 사용할 수 없고 Symbol을 함수로 사용해서 symbol 타입을 만들어낼 수 있다.

같은 원시 값을 넣어서 심볼을 만들어도 다르다고 나옴..
즉 심볼은 고유하고 수정 불가능한 값을 만들어줌.
그래서 주로 접근을 제어하는데 쓰는 경우가 많다.

그냥 문자열로 접근 못하고 꼭 심볼을 얻어야만 접근을 할 수 있게 됨.
`;

console.log(Symbol("foo") === Symbol("foo"));
// false가 나옴.

const sym = Symbol(); //sym는 고유한 형태의 값임. 그래서 이 sym을 통해서만 접근할 수 있는 오브젝트의 프로퍼티를 만들 때 많이 사용

const obj = {
  [sym]: "value",
};

// 이렇게하면 sym을 직접 알지 못하면 obj에 sym 프로퍼티에 접근할 수 없다.
// obj['sym']이 아니라 obj[sym]을 통해 접근 해야함.
