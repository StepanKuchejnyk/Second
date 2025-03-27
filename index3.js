class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Додавання елемента в кінець списку
    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    // Видалення останнього елемента, який менший за 15
    deleteLastLessThan15() {
        let current = this.tail;
        while (current) {
            if (current.data < 15) {
                if (current.prev) {
                    current.prev.next = current.next;
                }
                if (current.next) {
                    current.next.prev = current.prev;
                }
                if (current === this.head) {
                    this.head = current.next;
                }
                if (current === this.tail) {
                    this.tail = current.prev;
                }
                return;
            }
            current = current.prev;
        }
    }

    // Виведення списку в консоль
    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " <-> ";
            current = current.next;
        }
        console.log(result + "null");
    }
}

// Тестування
let dll = new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.append(5);
dll.append(25);
dll.append(12);

console.log("Список до видалення:");
dll.printList();

dll.deleteLastLessThan15();

console.log("Список після видалення:");
dll.printList();
