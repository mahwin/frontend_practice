`
  Tuple
`;

let x: [string, number]; //튜플이란 타입임. 타입도 맞아야하고 길이도 맞아야함.

x = ["a", 5];

// x = [10,'a'] Error

// x[3] = "world"; 길이가 '2'인 튜플 형식 '[string, number]'의 인덱스 '3'에 요소가 없습니다.

const person: [string, number] = ["Mark", 39];

// const [first, second, third] = person; (분해 할당) 길이가 '2'인 튜플 형식 '[string, number]'의 인덱스 '2'에 요소가 없습니다.
