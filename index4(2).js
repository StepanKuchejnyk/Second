function calculateFunctionNested(x, a, b) {
    let result;
    let errorMessage = "";

    if (x >= -2 && x <= 4) {
        if (Math.cos(x) === 0) {
            errorMessage = "Помилка: ділення на нуль у виразі cos(x) / sqrt(ax + b)";
        } else if (a * x + b < 0) {
            errorMessage = "Помилка: підкореневий вираз від'ємний";
        } else {
            result = Math.cos(x) / Math.sqrt(a * x + b);
        }
    } else if (x > 4 && x < 9) {
        result = Math.pow(x, 3) - b * x + 3;
    } else if (x === 9) {
        errorMessage = "Помилка: функція не визначена в точці x = 9";
    } else {
        errorMessage = "Помилка: x поза допустимим діапазоном";
    }

    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(`f(${x}) = ${result}`);
    }
}


calculateFunctionNested(3, 2, 1);
