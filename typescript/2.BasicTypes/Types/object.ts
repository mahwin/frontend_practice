`
타입스크립트의 object는 실제 object와 다름
`;
const person1 = { name: "Mark", age: 39 }; // object literal
// person1은 object type은 아님 (타입스크립트 관점에서)
// {name: string;age: number;}라는 오브젝트 리터럴 타입을 가짐.

// create by Object.create
const person2 = Object.create({ name: "Mark", age: 39 });

`
타입으로의 object는 primitive type이 아닌 것을 의미함 => not number ,string, boolean, bigint, symbol, null, or undefined.
`;

let obj1: object = {};

obj1 = { name: "Mark" };
obj1 = []; // array도 오브젝트 타입임.
// obj=30 Error
// obj='Mark' Error
// obj=true Error
// obj=100n Error
// obj=Symbol() Error
// obj=null Error
// obj=undefined Error

declare function create(o: object | null): void;
create({ prop: 0 });
create(null);

// create(42); Error
// create('string'); Error
// create(true); Error
// create(undefined); Error

// 즉 프리미티 타입은 받지 않을거야 라는 말이 object 타입을 가지는 값만 할당할 수 있어와 같은 의미.!!!!!!
