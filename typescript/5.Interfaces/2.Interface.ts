interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: "Mark",
  age: 39,
  hello: function (): void {
    console.log(`안녕하세요. ${this.name} 입니다`);
  },
};

//이렇게 디스가 뭔지 확실하게 적어도 잘 돌아감.
const p42: Person4 = {
  name: "Mark",
  age: 39,
  hello(this: Person4): void {
    console.log(`안녕하세요. ${this.name} 입니다`);
  },
};

// arrow function의 경우 this를 사용할 수 없음. 사용한다 하더라도 상위의 개체를 가르키지 않음.
// 지금은 global를 가르킴.
// const p43: Person4 = {
//   name: "Mark",
//   age: 39,
//   hello: (): void => {
//     console.log(`안녕하세요. ${this.name} 입니다`);
//   },
// };
