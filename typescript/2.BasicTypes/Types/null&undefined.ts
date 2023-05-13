`
undefined와 null은 각깍 undefined와,null 타입을 가진다.
값도 undefined와,null만 가질 수 있다.
void와 마찬가지로, 그 자체로는 유용하지 않음.

`;
let u: undefined = undefined;
let n: null = null;

`
아무런 ts.config에 설정을 건드리지 않으면 undefined & null는 모든 타입들의 서브 타입으로 존재한다.
=> number타입이라도 null이나 undefined를 할당할 수 있다는 것을 의미함.

--strictNullChecks를 사용하면 null과 undefined, void는 자기 자신들에게만 할당할 수 있다.

특정한 경우에 null과 undefined를 할당할 수 있게 하려면 union type을 사용해야 한다.
`;

// let MyName: string = null; => type null is not assignable to type 'string'
let v: void = undefined; // void타입은 undefinded만 넣을 수 있다.

let union: string | null = null;
union = "Mark";

`
null in javascript
null이라는 값으로 할당된 것을 null 타입이라고 함.
무언가가 있는데, 사용할 준비가 덜 된 상태.
null이라는 타입은 null 이라는 값만 가질 수 있다.
런타임에서 typeof 연산자를 이용해서 알아내면, object임.

`;
