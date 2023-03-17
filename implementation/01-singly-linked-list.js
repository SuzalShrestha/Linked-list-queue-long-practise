// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Add node of val to head of linked list
    let node = new SinglyLinkedNode(val);
    if (this.head) {
      node.next = this.head;
      this.head = node;
      this.length++;
      return this;
    }
    this.head = node;
    this.length++;
    return this;
    // Write your hypothesis on the time complexity of this method here
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.length++;
    return this;
  }

  removeFromHead() {
    // Remove node at head
    if (this.head) {
      let headNode = this.head;
      this.head = this.head.next;
      this.length--;
      return headNode;
    }
    // Write your hypothesis on the time complexity of this method here
  }

  removeFromTail() {
    // Remove node at tail

    let current = this.head;
    if (current) {
      if (current.next == null) {
        let tail = current;
        this.head = null;
        this.length = 0;
        return tail;
      }

      while (current.next.next) {
        current = current.next;
      }
      let tailNode = current.next;
      current.next = null;
      this.length--;
      return tailNode;
    }
    // Write your hypothesis on the time complexity of this method here
  }

  peekAtHead() {
    // Return value of head node
    if (this.head) return this.head.value;
    // Write your hypothesis on the time complexity of this method here
  }

  print() {
    // Print out the linked list
    let current = this.head;
    while (current) {
      // process.stdout.write(`${current.value} -->`);
      console.log(current.value);
      current = current.next;
    }

    // console.log("Null");
    // Write your hypothesis on the time complexity of this method here
  }
}
module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
