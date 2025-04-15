import { prettyPrint } from "./prettyPrint.js";
import { Tree } from "./binary_search_tree.js";

function randomArrayOfNums(length){
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
}

// 1
const array = randomArrayOfNums(10);
const tree = new Tree(array);
console.log('Random array of numbers: ', array);
prettyPrint(tree.root);

// 2
console.log('Is balanced? ', tree.isBalanced());

//3
const levelOCol = [];
tree.levelOrder(value => { levelOCol.push(value)});
console.log('Level-order: ', levelOCol);

const preOCol = [];
tree.preOrder(value => {preOCol.push(value)});
console.log('Pre-order: ', preOCol);

const postOCol = [];
tree.postOrder(value => {postOCol.push(value)});
console.log('Post-order: ', postOCol);

const inOCol = [];
tree.inOrder(value => {inOCol.push(value)});
console.log('In-order: ', inOCol);

// 4
tree.insert(101);
tree.insert(2001);
tree.insert(555);
prettyPrint(tree.root);

// 5
console.log(tree.isBalanced());

// 6
tree.rebalance();
prettyPrint(tree.root);

// 7
console.log(tree.isBalanced());

// 8
const levelOCol2 = [];
tree.levelOrder(value => { levelOCol2.push(value)});
console.log('Level-order: ', levelOCol2);

const preOCol2 = [];
tree.preOrder(value => {preOCol2.push(value)});
console.log('Pre-order: ', preOCol2);

const postOCol2 = [];
tree.postOrder(value => {postOCol2.push(value)});
console.log('Post-order: ', postOCol2);

const inOCol2 = [];
tree.inOrder(value => {inOCol2.push(value)});
console.log('In-order: ', inOCol2);