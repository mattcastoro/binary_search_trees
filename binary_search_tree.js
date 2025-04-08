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

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};


const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
// console.log(tree.root);
prettyPrint(tree.root);
