class TrieNode {
  constructor(value = "") {
    this.value = value;
    this.end = false;
    this.cnt = 0;
    this.child = {};
    this.infos = [];
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.words = [];
  }
  push(info) {
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

  sort(len) {
    if (this.words.length === 0) return [];

    return this.words
      .sort((a, b) => {
        if (a.frequency == b.frequency) return a.word.length - b.word.length;
        else return b.frequency - a.frequency;
      })
      .slice(0, len);
  }

  autoComplete(chars, len) {
    this.words = [];
    let currentNode = this.root;
    for (let i = 0; i < chars.length; i++) {
      let currentChar = chars[i];
      if (currentNode.child[currentChar]) {
        currentNode = currentNode.child[currentChar];
      } else {
        return [];
      }
    }
    if (currentNode.end) {
      this.words.push(...currentNode.infos);
    }
    const nodes = Object.values(currentNode.child);

    while (nodes.length) {
      const node = nodes.pop();
      if (node.end) {
        this.words.push(...node.infos);
      } else {
        nodes.push(...Object.values(node.child));
      }
    }

    return this.sort(len);
  }
}

export default Trie;
