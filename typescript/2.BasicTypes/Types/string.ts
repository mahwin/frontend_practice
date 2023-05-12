let myName: string = "Mark";
myName = "Anna";

let age: number = 39;
let sentence: string = `Hello, My name is ${myName}
I'll be ${age + 1} years old next month.`;

console.log(sentence);

//npx tsc 해서 string.js만들고
//node 로 실행하면
// Hello, My name is Anna
// I'll be 40 years old next month.
