class NumberQueue {
    constructor() {
        this.items = [];
    }

   
    enqueue(number) {
        this.items.push(number);
    }

    
    countNegatives() {
        let count = 0;
        for (let num of this.items) {
            if (num < 0) {
                count++;
            }
        }
        return count;
    }

    show() {
        return this.items.join(" ");
    }
}


let queue = new NumberQueue();
function getRandomNumber() {
    return (parseInt(Math.random() * 21) - 10);
}

for (let i = 0; i < 10; i++) {  
    queue.enqueue(getRandomNumber());
}

console.log("Черга: " + queue.show());
console.log("Кількість від’ємних чисел: " + queue.countNegatives());
