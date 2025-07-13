
// 1. Напиши рекурсивную функцию для вычисления суммы всех элементов в массиве;
function sumArray(arr, index = 0) {
    if (index === arr.length) {
        return 0;
    }
    return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([1, 2, 3, 4]));


// 2. Реализуй функцию для нахождения максимального элемента в массиве с использованием
// рекурсии;

function findMax(arr, index = 0, currentMax = -Infinity) {
    if (index === arr.length) {
        return currentMax;
    }
    return findMax(arr, index + 1, Math.max(currentMax, arr[index]));
}

console.log(findMax([3, 1, 7, 4, 2]));




// 4. А вот теперь нужно реализовать функцию для вычисления чисел Фибоначчи с кэшированием
// через рекурсию! Требования те же, что и в предыдущем уроке.

function fibonacci(n, cache = {}) {
    if (n in cache) {
        return cache[n];
    }
    if (n <= 1) {
        return n;
    }
    cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
    return cache[n];
}

console.log(fibonacci(10));
