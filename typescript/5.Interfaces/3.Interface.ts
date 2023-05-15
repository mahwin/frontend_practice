interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

// implements를 사용하면 interface의 내용을 바탕으로 Person이란 클래스를 만들어 낼 수 있다.
// 클래스도 마치 타입처럼 사용할 수 있음.
class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요! 저는 ${this.name}입니다.`);
  }
}

// 인터페이스를 implements한 클래스로 생성한 p는 정확히 IPerson1 타입을 가진다.
const p = new Person("Mark");
