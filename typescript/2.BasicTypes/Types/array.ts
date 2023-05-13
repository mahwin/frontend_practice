`
*원래 자바스크립트에서 array는 객체임.

타입할당 하는 법.
Array<타입>
타입[]

`;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let list3: (number | string)[] = [1, 2, 3, "4"];
let list4: Array<number | string> = [1, 2, 3, "4"];
