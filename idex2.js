function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

let numbers = [8,1,5,3,9,0,10,15,14];
console.log(findMax(numbers)); 
