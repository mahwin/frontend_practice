const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
const fileObj = {}; // 확장자 수 카운팅
let keys = []; // 확장자 이름 사전순 정렬

rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  solution();
  process.exit();
});

const solution = () => {
  const n = Number(input[0]);
  for (let i = 1; i <= n; i++) {
    const ex = input[i].split(".")[1];
    fileObj[ex] = fileObj[ex] ? fileObj[ex] + 1 : 1;
  }

  keys = Object.keys(fileObj).sort();
  printFile();
};

const printFile = () => {
  let result = "";
  for (const key of keys) {
    result += [key, fileObj[key]].join(" ") + "\n";
  }
  console.log(result.trim()); //마지막 \n 제외
};
