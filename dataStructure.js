// Data Structure concept

// 1. Stack (LIFO)

//Normal Array in JS behaves like a stack only -> All js Array prototype methods push(), pop() behave likewise

class Stack {
  constructor() {
    this.items = []; // Array to hold stack items
  }
  // Method to add an item to the stack
  push(item) {
    this.items.push(item);
  }
  // Method to remove the top item from the stack and return it
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow"); // Avoid popping from an empty stack
    }
    return this.items.pop();
  }
  // Method to look at the top item of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items[this.items.length - 1];
  }
  // Method to check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
  // Method to get the number of elements in the stack
  size() {
    return this.items.length;
  }
  // Method to clear the stack
  clear() {
    this.items = [];
  }
}

// 2. Queue (FIFO):

class Queue {
  constructor() {
    this.items = []; // Array to store the queue elements
  }
  // Method to add an element to the queue
  enqueue(element) {
    this.items.push(element);
  }
  // Method to remove an element from the front of the queue and return it
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue underflow"); // Avoid dequeueing from an empty queue
    }
    return this.items.shift();
  }
  // Method to view the element at the front of the queue without removing it
  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items[0];
  }
  // Method to check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
  // Method to get the number of elements in the queue
  size() {
    return this.items.length;
  }
  // Method to clear the queue
  clear() {
    this.items = [];
  }
}

//  3. Circular Queue

// The Circular queue is the efficient queue comparing to Array Queue.
// Here the array size is fixed and it wont grow, the empty block created during dequeue operation is reused.
// In order to implement circular queue few enhancement needs to be done on top of Array Queue implementation.

class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity; // Maximum capacity of the queue
    this.queue = new Array(capacity); // Array to store queue elements
    this.front = 0; // Index of the front element
    this.rear = 0; // Index of the rear element
    this.size = 0; // Current number of elements in the queue
  }
  // Method to enqueue an element into the circular queue
  enqueue(element) {
    if (this.isFull()) {
      throw new Error("Queue overflow"); // Avoid enqueueing when the queue is full
    }
    this.queue[this.rear] = element;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
  }

  // Method to dequeue an element from the circular queue
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue underflow"); // Avoid dequeueing when the queue is empty
    }
    const element = this.queue[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return element;
  }
  // Method to check if the circular queue is empty
  isEmpty() {
    return this.size === 0;
  }
  // Method to check if the circular queue is full
  isFull() {
    return this.size === this.capacity;
  }
  // Method to get the front element of the circular queue without removing it
  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.queue[this.front];
  }
  // Method to get the number of elements in the circular queue
  getSize() {
    return this.size;
  }
  // Method to clear the circular queue
  clear() {
    this.queue = new Array(this.capacity);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }
}

// 4. Link list
//  linked list is a linear collection of data elements whose order is not given by their physical placement in memory.

// Node class to represent individual nodes in the linked list
class LinkListNode {
  constructor(data) {
    this.data = data; // Data stored in the node
    this.next = null; // Pointer to the next node in the list
  }
}

// LinkedList class to represent the linked list data structure
class LinkedList {
  constructor() {
    this.head = null; // Pointer to the first node in the list
    this.size = 0; // Number of nodes in the list
  }
  // Method to add a new node to the end of the list
  append(data) {
    const newNode = new LinkListNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
    console.log(newNode);
  }
  // Method to insert a new node at a specified position in the list
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      throw new Error("Invalid index");
    }
    const newNode = new LinkListNode(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let prev = null;
      let currentIndex = 0;
      while (currentIndex < index) {
        prev = current;
        current = current.next;
        currentIndex++;
      }
      newNode.next = current;
      prev.next = newNode;
    }
    this.size++;
  }
  // Method to remove a node at a specified position from the list
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Invalid index");
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let prev = null;
      let currentIndex = 0;
      while (currentIndex < index) {
        prev = current;
        current = current.next;
        currentIndex++;
      }
      prev.next = current.next;
    }
    this.size--;
  }
  // Method to get the element at a specified position in the list
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Invalid index");
    }
    let current = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }
    return current.data;
  }
  // Method to clear the list
  clear() {
    this.head = null;
    this.size = 0;
  }
  // Method to check if the list is empty
  isEmpty() {
    return this.size === 0;
  }
  // Method to get the size of the list
  getSize() {
    return this.size;
  }
  // Method to print the elements of the list
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + (current.next ? " -> " : "");
      current = current.next;
    }
    console.log(result);
  }
}

// 5. Double Link List
//Doubly linked list is a complex type of linked list in which a node contains a pointer to the previous as well as the next node in the sequence.
// Therefore, in a doubly linked list, a node consists of three parts: node data, pointer to the next node in sequence(next pointer), pointer to the previous node(previous pointer).

// Node class to represent individual nodes in the doubly linked list
class DoublyLinkedListNode {
  constructor(data) {
    this.data = data; // Data stored in the node
    this.prev = null; // Pointer to the previous node in the list
    this.next = null; // Pointer to the next node in the list
  }
}

// DoublyLinkedList class to represent the doubly linked list data structure
class DoublyLinkedList {
  constructor() {
    this.head = null; // Pointer to the first node in the list
    this.tail = null; // Pointer to the last node in the list
    this.size = 0; // Number of nodes in the list
  }
  // Method to add a new node to the end of the list
  append(data) {
    const newNode = new DoublyLinkedListNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.size++;
  }
  // Method to insert a new node at a specified position in the list
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      throw new Error("Invalid index");
    }
    const newNode = new DoublyLinkedListNode(data);
    if (index === 0) {
      newNode.next = this.head;
      if (this.head) {
        this.head.prev = newNode;
      } else {
        this.tail = newNode;
      }
      this.head = newNode;
    } else if (index === this.size) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      let current = this.head;
      let currentIndex = 0;
      while (currentIndex < index - 1) {
        current = current.next;
        currentIndex++;
      }
      newNode.next = current.next;
      newNode.prev = current;
      current.next.prev = newNode;
      current.next = newNode;
    }
    this.size++;
  }
  // Method to remove a node at a specified position from the list
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Invalid index");
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (index === this.size - 1) {
      removedNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let current = this.head;
      let currentIndex = 0;
      while (currentIndex < index) {
        current = current.next;
        currentIndex++;
      }
      removedNode = current;
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    this.size--;
    return removedNode.data;
  }
  // Method to get the element at a specified position in the list
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Invalid index");
    }
    let current = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }
    return current.data;
  }
  // Method to clear the list
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  // Method to check if the list is empty
  isEmpty() {
    return this.size === 0;
  }
  // Method to get the size of the list
  getSize() {
    return this.size;
  }
  // Method to print the elements of the list
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + (current.next ? " <-> " : "");
      current = current.next;
    }
    console.log(result);
  }
}

// 6.

// Node class to represent individual nodes in the circular linked list
class CircularLinkedListNode {
  constructor(data) {
    this.data = data; // Data stored in the node
    this.next = null; // Pointer to the next node in the list
  }
}

// CircularLinkedList class to represent the circular linked list data structure
class CircularLinkedList {
  constructor() {
    this.head = null; // Pointer to the first node in the list
    this.size = 0; // Number of nodes in the list
  }
  // Method to add a new node to the end of the list
  append(data) {
    const newNode = new CircularLinkedListNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
    }
    newNode.next = this.head; // Connect the last node to the head to form a circle
    this.size++;
  }
  // Method to insert a new node at a specified position in the list
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      throw new Error("Invalid index");
    }
    const newNode = new CircularLinkedListNode(data);
    if (index === 0) {
      if (!this.head) {
        newNode.next = newNode; // Point the new node to itself if the list is empty
      } else {
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head;
      }
      this.head = newNode;
    } else {
      let current = this.head;
      let currentIndex = 0;
      while (currentIndex < index - 1) {
        current = current.next;
        currentIndex++;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
    this.size++;
  }
  // Method to remove a node at a specified position from the list
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Invalid index");
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      if (this.size === 1) {
        this.head = null;
      } else {
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = this.head.next;
        this.head = this.head.next;
      }
    } else {
      let current = this.head;
      let currentIndex = 0;
      while (currentIndex < index - 1) {
        current = current.next;
        currentIndex++;
      }
      removedNode = current.next;
      current.next = current.next.next;
    }
    this.size--;
    return removedNode.data;
  }
  // Method to get the element at a specified position in the list
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Invalid index");
    }
    let current = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }
    return current.data;
  }
  // Method to clear the list
  clear() {
    this.head = null;
    this.size = 0;
  }
  // Method to check if the list is empty
  isEmpty() {
    return this.size === 0;
  }
  // Method to get the size of the list
  getSize() {
    return this.size;
  }
  // Method to print the elements of the list
  print() {
    if (!this.head) {
      console.log("(empty)");
      return;
    }
    let current = this.head;
    let result = "";
    do {
      result += current.data + (current.next !== this.head ? " -> " : "");
      current = current.next;
    } while (current !== this.head);
    console.log(result);
  }
}
