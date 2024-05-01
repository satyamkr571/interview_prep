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

const myList = new LinkedList();

// Append elements to the list
myList.print();
myList.append(10);
myList.append(20);
myList.append(30);
myList.print();
