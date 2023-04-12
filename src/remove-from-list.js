const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, value) {

  if (l.value === value) {
    l = l.next;
    removeNodeList(l.next, value, l)
  } else {
    if (l.next === null) {
      return;
    }
    removeNodeList(l.next, value, l);
  }



  function removeNodeList(nodes, vl, nodPrev) {
    if (!nodes || !nodes.next) {
      if (nodes.value === vl) {
        nodPrev.next = null
      }
      return;
    } else if (nodes.value === vl) {
      nodPrev.next = nodes.next;
    }
    if (nodPrev.next.value == vl) {
      removeNodeList(nodes.next, vl, nodPrev)

    } else {
      removeNodeList(nodes.next, vl, nodes)
    }
  }
  return l;
}

module.exports = {
  removeKFromList
};
