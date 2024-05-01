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
class LinkList {
  constructor() {
    this.value = null;
    this.next = null;
  }
}
