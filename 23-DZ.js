/*
1. Напиши функцию, которая создает и возвращает другую функцию.
    Внутренняя функция должна иметь доступ к переменной, объявленной
во внешней функции, даже после завершения внешней функции;*/


function createCounter() {
    let count = 0;

    return function inner() {
        count ++;
        return count;
    }
}


const counterOne = createCounter();
console.log(counterOne()); // 1
console.log(counterOne()); // 2
console.log(counterOne()); // 3

const counterTwo = createCounter();
console.log(counterTwo()); // 1



// 2. Реализуй пример с несколькими вложенными функциями, где каждая
// функция использует переменные из своего собственного и внешних лексических
// окружений;

function getName() {
    const houseNumber = 31;

    function getCity() {
        const city = 'Moscow';
        console.log(city, street, houseNumber);
    }

    return getCity;

}


const street = 'Oktyabrskaya';
const cityFunc = getName();
cityFunc()


// 3*. Тебе нужно написать функцию для вычисления чисел Фибоначчи с
// использованием цикла и кэширования.

const fibonacci = (function() {
    const cache = {0: 0, 1: 1};

    return function(num) {
        if (cache[num] !== undefined) return cache[num];

        let a = cache[0], b = cache[1];
        for (let i = 2; i <= num; i++) {
            [a, b] = [b, a + b];
            cache[i] = b;
        }

        return cache[num];
    }
})();

console.log(fibonacci(5)); // Вычисляет и кэширует
console.log(fibonacci(20));  // Берёт из кэша




















