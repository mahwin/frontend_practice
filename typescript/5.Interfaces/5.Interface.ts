// 함수를 타이핑 하는 방법.

interface HelloPerson {
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string, age?: number): void {
  console.log(`안녕하세요! ${name} 입니다.`);
};

helloPerson("1asd", 34);
