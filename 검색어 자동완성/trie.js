class TrieNode {
  constructor(value = "") {
    this.value = value;
    this.end = false;
    this.cnt = 0;
    this.child = {};
    this.infos = [];
  }
}

module.exports = class Trie {
  constructor() {
    this.root = new TrieNode();
    this.words = [];
  }
  push(info) {
    console.log("info", info);
    const chars = info.word;
    let currentNode = this.root;
    for (let i = 0; i < chars.length; i++) {
      const currentChar = chars[i];

      if (currentNode.child[currentChar] === undefined) {
        currentNode.child[currentChar] = new TrieNode(
          currentNode.value + currentChar
        );
      }
      currentNode = currentNode.child[currentChar];
      currentNode.infos.push(info);
    }
    currentNode.cnt++;
    currentNode.end = true;
  }

  sort() {
    // this.words
    //   .sort((a, b) => {
    //     console.log(a, b);
    //     if (a.frequency == b.frequency) return a.word.length - b.word.length;
    //     else return b.frequency - a.frequency;
    //   })
    //   .slice(0, 5);
    return this.words;
  }

  autoComplete(chars) {
    this.words = [];
    let currentNode = this.root;
    for (let i = 0; i < chars.length; i++) {
      let currentChar = chars[i];
      if (currentNode.child[currentChar]) {
        currentNode = currentNode.child[currentChar];
      } else {
        return false;
      }
    }
    if (currentNode.end) {
      this.words.push(currentNode.infos);
    }
    const nodes = Object.values(currentNode.child);

    while (nodes.length) {
      const node = nodes.pop();
      if (node.end) {
        this.words.push(node.infos);
      } else {
        nodes.push(...Object.values(node.child));
      }
    }
    return this.words.length > 5 ? this.sort() : this.words;
  }
};
