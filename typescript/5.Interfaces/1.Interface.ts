// => interface는 컴파일 단계에서만 필요하고 실제로 js 파일에는 없음
interface Person1 {
  name: string;
  age: number;
}

function hello1(person: Person1): void {
  console.log(`안녕하세요, ${person.name} 입니다.`);
}

const p1: Person1 = { name: "Mark", age: 39 };

hello1(p1);

// 옵셔널 property 프로퍼티 뒤에 ?를 붙이면 그 프로퍼티가 있어도 되고 없어도 된다

interface Person2 {
  name: string;
  age?: number;
}

function hello2(person: Person2): void {
  console.log(`안녕하세요, ${person.name} 입니다.`);
}

const p2: Person2 = { name: "Mark" };

hello2(p2);

// 인덱서블 타이핑.

interface Person3 {
  name: string;
  age?: number;
  [index: string]: any; // 이렇게 하면 어떤 프로퍼티도 들어올 수 있게 됨. 어떤 프로퍼티든 괜찮아!!.
}

function hello3(person: Person3): void {
  console.log(`안녕하세요, ${person.name} 입니다.`);
}

const p3: Person3 = { name: "Mark", brothers: ["Sung", "Chan"] };
const p31: Person3 = { name: "Mark", a: 3, b: 4 };

hello3(p3);
