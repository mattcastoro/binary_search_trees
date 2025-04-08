import { Node } from "./node.js";

class Tree {
  constructor(arr) {
    const uniqueSortedArr = this.sortAndRemoveDuplicates(arr);
    this.root = this.buildTree(uniqueSortedArr);
  }

  buildTree(arr) {
    if (arr.length === 0) {
      return null;
    }

    const mid = Math.floor(arr.length / 2);
    const root = new Node(arr[mid]);

    root.left = this.buildTree(arr.slice(0, mid));
    root.right = this.buildTree(arr.slice(mid + 1));

    return root;
  }

  sortAndRemoveDuplicates(arr) {
    const uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => a - b);
    return uniqueArr;
  }

}

export { Tree };
