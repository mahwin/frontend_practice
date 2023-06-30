const rowData = require("../assets/data.json");
const Trie = require("./trie.js");

function makeTrie(data) {
  const trie = new Trie();
  for (const key of Object.keys(data.category)) {
    for (const level of Object.keys(data.category[key].level)) {
      const infos = data.category[key].level[level];
      for (const info of infos) {
        info.category = key;
        info.level = level;
        trie.push(info);
      }
    }
  }
}

const data = JSON.parse(rowData.data);
exports.modules = makeTrie(data);
