`
any 어떤 것이든 된다. any를 쓰게되면 전체적인 타입 시스템에 흠이될 수가 있음. 그래서 꼭 필요한 부분에만 사용을 해야한다!!!!

그래서 컴파일 옵션 중에서 any를 써야하는데 쓰지 않으면 오류를 뱉도록 함. noImplititAny

`;

function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toStringI(); //이런식으로 어떤 일이든 할 수 있게 됨. 최대한 사용하지 않는게 타입 시스템의 안정성을 높임. 꼭 필요한 경우멘 사용.

`
any는 계속해서 개체를 통해 전파됨. 결국 모든 편의는 타입 안정성을 잃는 대갓를 낳게된다. 꼭 필요하지 않은 경우엔 any를 절대 사용하지 말아야한다.
`;

let looselyTyped: any = {};
let d = looselyTyped.a.d.b.d.e.da; //이렇게 any라서 가능함.

// 아래 함수는 리턴 값도 any타입임..
function leakingAny(obj: any) {
  const a = obj.num;
  const b = a + 1;

  return b;
}

// 이렇게 타입 누수를 맞을 수 있다.
function notLeakingAny(obj: any) {
  const a: number = obj.num;
  const b = a + 1;

  return b;
}
