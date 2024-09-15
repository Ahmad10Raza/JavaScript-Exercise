// Node class to represent each element in the linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList class to manage the linked list
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Method to insert a node at the beginning
    insertAtBeginning(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Method to insert a node at the end
    insertAtEnd(value) {
        const newNode = new Node(value);
        // If the list is empty, then the new node will be the head
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
    }

    // Method to insert a node at a specific position
    insertAtPosition(value, position) {
        if (position < 0 || position > this.size) {
            throw new Error("Invalid position");
        }
        const newNode = new Node(value);
        if (position === 0) {
            this.insertAtBeginning(value);
        } else {
            let current = this.head;
            let previous = null;
            let index = 0;
            while (index < position) {
                previous = current;
                current = current.next;
                index++;
            }
            newNode.next = current;
            previous.next = newNode;
            this.size++;
        }
    }

    // Method to delete a node from a given position
    deleteFromPosition(position) {
        if (position < 0 || position >= this.size) {
            throw new Error("Invalid position");
        }
        let current = this.head;
        if (position === 0) {
            this.head = current.next;
        } else {
            let previous = null;
            let index = 0;
            while (index < position) {
                previous = current;
                current = current.next;
                index++;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    // Method to print the linked list
    printList() {
        let current = this.head;
        let list = [];
        while (current) {
            list.push(current.value);
            current = current.next;
        }
        console.log(list.join(" -> "));
    }
}

// Example usage:
const list = new LinkedList();
list.insertAtBeginning(10);
list.insertAtEnd(20);
list.insertAtPosition(15, 1);
list.printList(); // Output: 10 -> 15 -> 20
list.deleteFromPosition(1);
list.printList(); // Output: 10 -> 20