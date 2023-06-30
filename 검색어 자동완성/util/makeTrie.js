import rowData from "../assets/data.json" assert { type: "json" };
import Trie from "./trie.js";

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
  return trie;
}

const data = JSON.parse(rowData.data);

export default makeTrie(data);
