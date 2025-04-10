import { prettyPrint } from "./prettyPrint.js";
import { Tree } from "./binary_search_tree.js";


const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

// console.log(tree.insert(20000));

prettyPrint(tree.root);