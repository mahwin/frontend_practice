// Readonly interface Properties

interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: "Mark",
  gender: "male",
};

// p81.gender = 3; Error !! 바뀌지 않는 프로펄티의 경우 readonly를 붙여서 변경 불가능한 값으로 만들어야함..
// 그래야 다른 사람들이 볼 때도 바뀌지 않는 값이구나 하고 알 수 있게 됨!!!!!
