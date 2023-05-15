// type alias vs interface 비교

// function은 어떻게 표현해
type EatType = (food: string) => void;

interface IEat {
  (food: string): void;
}

//array는 어떻게 표현해
type PersonList = string[];

interface IPersonList {
  [index: number]: string; // 인덱서블 타잎을 사용해야함..
}

// intersection은 어떻게 표현해?

interface ErrorHandling {
  succes: boolean;
  error?: { message: string };
}

interface ArtistsData {
  artists: { name: string }[];
}

// type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;

// interface
interface IArtistsResponse extends ArtistsData, ErrorHandling {}

// union Types

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

// type alias
type PetType = Bird | Fish;
// interface에선 어려워서 type alias로 해결
// 아래와 같이 상속할수도 없음
// interface IPet extends PetType {} Error !
// class Pet Implements PetType {}   Error !

// Declaration Merging - only interface

interface MergingInterface {
  a: string;
}

interface MergingInterface {
  b: string;
}

let mi: MergingInterface;
// mi. 하면 a도 나오고 b도 나옴 똑같은 이름으로 interface를 만들면 자동으로 머징해줌!!!

`
type alias는 타입의 이름을 부르는 것에 많이 쓰고
interface는 새로운 타입을 만드는 것에 가까움!!
`;
