import { Node } from "./node.js";

class Tree {
  constructor(arr) {
    const uniqueSortedArr = this.sortAndRemoveDuplicates(arr);
    this.root = this.buildTree(uniqueSortedArr);
  }

  sortAndRemoveDuplicates(arr) {
    const uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => a - b);
    return uniqueArr;
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

  insert(value) {
    if (this.find(value)) {
      console.log(`${value} already exists in the tree`);
      return;
    }
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.data) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  deleteItem(value) {
    this.root = this.deleteRecur(this.root, value);
  }

  deleteRecur(node, value) {
    if (!node) {
      return null;
    }
    if (value < node.data) {
      node.left = this.deleteRecur(node.left, value);
    } else if (value > node.data) {
      node.right = this.deleteRecur(node.right, value);
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      const heir = this.findMin(node.right) 
      node.data = heir.data;
      node.right = this.deleteRecur(node.right, heir.data);
    }
    return node;
  }

  findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  find(value) {
    let current = this.root;
    while (current) {
      if (value === current.data) {
        return current;
      } 
      if (value < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  levelOrder(callback) {
    if (typeof callback !== 'function') {
      throw new Error('A callback function must be provided.');
    }
    if (!this.root) {
      return;
    }
    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      callback(current.data);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

}

export { Tree };
