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
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}


class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  getUnderlyingList() {

    if (this.head.next) {
      return this.head
    } else {
      return null;
    }
  }

  enqueue(value) {
    function addNodeList(nodes) {
      if (nodes.next !== null) {
        addNodeList(nodes.next)
      } else {
        nodes.next = node;
      }
    }

    let node = new ListNode(value);
    if (this.head === null) {
      this.head = node;
      this.length++;
    } else {
      this.length++;
      addNodeList(this.head)
    }
  }
  dequeue() {
    let arg = this.head.value;
    this.head = this.head.next;
    this.length--;
    return arg
  }

}

module.exports = {
  Queue
};
