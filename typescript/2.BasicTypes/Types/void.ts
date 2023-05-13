`
아무것도 return 하지 않는 곳에서 리턴 타입으로 사용함.
undefined라는 타입이 이미 존재하지만 다른 언어에는 void라고 사용하기에 그냥 갖고온 것임.

void 타입을 리턴 받은 변수에 대해서는 아무 행위도 하지 않겠다는 것을 명시적으로 보여준다고 생각하면 됨. !!!
return 부분에 달아서 아무것도 하지 않겠다고 명시적으로 확인하고 이후의 사용을 막는 행위!!
`;

function returnVoid(message: string): void {
  console.log(message);
  return;
}

const r = returnVoid("리턴이 없다.");
