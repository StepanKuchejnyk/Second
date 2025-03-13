
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}


function printList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(" -> "));
}


function removeFirstMultipleOf5(head) {
    if (!head) return null;
    
    if (head.value % 5 === 0) {
        return head.next;
    }

    let current = head;
    while (current.next) {
        if (current.next.value % 5 === 0) {
            current.next = current.next.next;
            break;
        }
        current = current.next;
    }
    return head;
}


function add44BeforeMultipleOf7(head) {
    if (!head) return null;

    let dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;

    while (current.next) {
        if (current.next.value % 7 === 0) {
            let newNode = new ListNode(44);
            newNode.next = current.next;
            current.next = newNode;
            current = newNode.next;
        } else {
            current = current.next;
        }
    }
    return dummy.next;
}


function generateRandomNumbers(size, min, max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}


let numbers = generateRandomNumbers(10, 1, 50);
let linkedList = createLinkedList(numbers);

console.log("Оригінальний список:");
printList(linkedList);


linkedList = removeFirstMultipleOf5(linkedList);
console.log("Після видалення першого кратного 5:");
printList(linkedList);


linkedList = add44BeforeMultipleOf7(linkedList);
console.log("Після додавання 44 перед кратними 7:");
printList(linkedList);
