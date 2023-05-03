const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let n, rowLen, colLen, P, rabbitInfo; // n 명령 수, rowLen,colLen 격자 크기, P 토끼 수 rabbitInfo 토끼 정보
let rabbits = []; // 토끼들 정보 저장. // r,c,점프 수,고유번호
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  solution();
  process.exit();
});

const getRabbit = () => {
  //점프 수 낮은 토끼
  for (const rabbit of rabbits) {
  }
};

const solution = () => {
  n = input[0];
  while(n--){
    
  }
};
