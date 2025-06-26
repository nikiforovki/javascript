// Задание 3 (Исправлено)
let n = 100;
outerLoop:
    for (let i = 2; i <= n; i++) {
        const maxDivisor = Math.sqrt(i);
        for (let j = 2; j <= maxDivisor; j++) {
            if (i % j === 0) {
                continue outerLoop;
            }
        }
        console.log(i);
    }