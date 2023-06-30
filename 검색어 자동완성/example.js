const rowData = require("./data.json");
const Trie = require("./trie.js");

const data = JSON.parse(rowData.data);

const trie = new Trie();

for (const info of data.category.react.level["1"]) {
  trie.push(info);
}

console.log(trie.autoComplete("react"));
console.log(trie.autoComplete("a"));
console.log(trie.autoComplete("b"));
console.log(trie.autoComplete("c"));
console.log(trie.autoComplete("d"));
