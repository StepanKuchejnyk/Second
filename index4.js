function calculateFunctionSequential(x, a, b) {
    let result;

    if (x >= -2 && x <= 4) {
        if (Math.cos(x) === 0) {
            console.log("Помилка: ділення на нуль у виразі cos(x) / sqrt(ax + b)");
            return;
        }
        if (a * x + b < 0) {
            console.log("Помилка: підкореневий вираз від'ємний");
            return;
        }
        result = Math.cos(x) / Math.sqrt(a * x + b);
    } else if (x > 4 && x < 9) {
        result = Math.pow(x, 3) - b * x + 3;
    } else if (x === 9) {
        console.log("Помилка: функція не визначена в точці x = 9");
        return;
    } else {
        console.log("Помилка: x поза допустимим діапазоном");
        return;
    }

    console.log(`f(${x}) = ${result}`);
}


calculateFunctionSequential(3, 2, 1);
