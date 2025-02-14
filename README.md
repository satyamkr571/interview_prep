# Interview preparation guide
This repo is mainly focused on Interview preparation.

## Data Structure concept

### 1. Stack (LIFO):
Normal Array in JS behaves like a stack only -> All js Array prototype methods push(), pop() behave likewise

### 2. Queue (FIFO):


###  3. Circular Queue:

The Circular queue is the efficient queue comparing to Array Queue.
Here the array size is fixed and it wont grow, the empty block created during dequeue operation is reused.
In order to implement circular queue few enhancement needs to be done on top of Array Queue implementation.

### 4. Linked List:

linked list is a linear collection of data elements whose order is not given by their physical placement in memory.
Node class to represent individual nodes in the linked list

### 5. Double Linked List:

Doubly linked list is a complex type of linked list in which a node contains a pointer to the previous as well as the next node in the sequence.
Therefore, in a doubly linked list, a node consists of three parts: node data, pointer to the next node in sequence(next pointer), pointer to the previous node(previous pointer).
Node class to represent individual nodes in the doubly linked list.

### 6.  Circular Linked List:

CircularLinkedList class to represent the circular linked list data structure
Node class to represent individual nodes in the circular linked list


## Design Pattern for JS web app

### 1. Module Pattern:
The Module Pattern is a widely used design pattern for encapsulating code and creating private and public variables and functions.
It promotes encapsulation, reducing the likelihood of variable and function name clashes.

### 2. Singleton Pattern:
The Singleton Pattern ensures that a class has only one instance and provides a global point of access to that instance.
This can be useful for managing global state or resources in front - end applications.

### 3. Observer Pattern:
The Observer Pattern is excellent for handling events and notifications.
It defines a one - to - many relationship between objects, where changes in one object trigger updates in multiple dependent objects.

### 4. Factory Pattern:
The Factory Pattern is useful for creating objects without specifying the exact class of object that will be created.
It provides a simple and flexible way to create instances.

