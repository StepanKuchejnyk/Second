function calculateSequence(m) {
    if (m < 1 || !Number.isInteger(m)) {
        console.log("Помилка: введіть ціле число m ≥ 1");
        return;
    }

    console.log(`Перші ${m} членів послідовності:`);

    for (let n = 1; n <= m; n++) {
        let xn = (Math.log(5 * n) + 1) / (2 * n + 3);
        console.log(`x_${n} = ${xn.toFixed(5)}`);
    }
}


calculateSequence(5);
