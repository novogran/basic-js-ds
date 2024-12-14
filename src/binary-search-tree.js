const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this._root) {
      this._root = newNode;
      return this;
    }
    let current = this._root;
    while (true) {
      if (data === current.data) return null;
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    let current = this._root;
    while (current) {
      if (data === current.data) return true;
      current = (data < current.data) ? current.left : current.right;
    }
    return false;
  }

  find(data) {
    let current = this._root;
    while (current) {
      if (data === current.data) return current;
      current = (data < current.data) ? current.left : current.right;
    }
    return null;
  }

  remove(data) {
    this._root = this.removeNode(this._root, data);
  }

  removeNode(node, data) {
    if (!node) return null;
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      const aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
    }
    return node;
  }

  findMinNode(node) {
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }

  min() {
    const minNode = this.findMinNode(this._root);
    return minNode ? minNode.data : null;
  }

  max() {
    let current = this._root;
    if (!current) return null;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};