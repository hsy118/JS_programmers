/**  Singly Linked List Performing  */

class Node {
  // Node 생성기
  contructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  // 시작 head와 끝 tail
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(newValue) {
    let newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }
  }
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.tail = newNode;
  }

  find(value) {
    let currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode;
  }

  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    let currNode = this.head;
    let displayString = "[";
    while (currNode !== null) {
      displayString += `${currNode.value}, `
      currNode = currNode.next
    }
    displayString = displayString.substr(0, displayString.length - 2)
    displayString += "]"
    console.log(displayString)
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(5)
console.log(linkedList)
// linkedList.display();
