const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const nextNode = new ListNode(value);
    if(!this.tail){
      this.head = nextNode;
      this.tail = nextNode;
    } else {
      this.tail.next = nextNode;
      this.tail = nextNode;
    }
  }

  dequeue() {
    if(!this.head) return null;
    const removedVal = this.head.value;
    this.head = this.head.next;
    if(!this.head) this.tail = null;
    return removedVal;
  }
}

module.exports = {
  Queue
};
