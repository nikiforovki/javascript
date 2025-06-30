/*1. Напиши функцию, которая принимает строку и проверяет,
    является ли она палиндромом. Если да - функция возвращает true, если нет - false;*/

// function isPalindrome(str) {
//     const reversedStr = str.split("").reverse().join("")
//     return str === reversedStr
//
// }
//
// console.log(isPalindrome('aba'))
//
// console.log(isPalindrome('abb'))



/*2. Напиши функцию, которая принимает строку (предложение)
и находит первое самое короткое слово в ней и возвращает его;*/

// function getStr(str) {
//     return str.split(' ').reduce((shortest, current) =>
//         current.length < shortest.length ? current : shortest
//     );
// }
//
// console.log(getStr("lorem ipsum dolor sit amet"));




/*3. Напиши функцию, которая форматирует строку с цифрами в телефонный номер.
    Пример: createPhoneNumber(123456789) → 8 (123) 456-789;*/

// function removePhone(number) {
//     const numStr = number.toString();
//     if (numStr.length !== 9) {
//         return "Неправильный номер. Введите 9 цифр.";
//     }
//
//     const part1  = numStr.substring(0, 3)
//     const part2  = numStr.substring(3, 6)
//     const part3  = numStr.substring(6, 9)
//
//
//    return `8 (${part1}) ${part2}-${part3}`;
//
// }
//
// console.log(removePhone(123456789))



// 4. Напиши функцию, которая ищет минимальное и максимальное значение в массиве;
// function findMinMax(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//         return "Ошибка: передан пустой массивв или не массив";
//     }
//
//     for (const num of arr) {
//         if (typeof num !== 'number' || isNaN(num)) {
//             return "Ошибка: массив должен содержать только числа";
//         }
//     }
//
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//
//     return { min, max };
// }
//
// console.log(findMinMax([5, 2, 9, 1, 3, 10]));


/*
5. *Напиши функцию, которая на вход принимает массив, а на выходе возвращает новый,
    отсортированный в порядке возрастания, массив. Попробуй реализовать алгоритм сортировки самостоятельно.
    Если не получается - почитай про bubble sort и попробуй реализовать её.*/
function bubbleSortOptimized(arr) {
    const sortedArr = [...arr];
    let n = sortedArr.length;

    while (n > 1) {
        let newN = 0;
        for (let i = 0; i < n - 1; i++) {
            if (sortedArr[i] > sortedArr[i + 1]) {
                [sortedArr[i], sortedArr[i + 1]] = [sortedArr[i + 1], sortedArr[i]];
                newN = i + 1;
            }
        }
        n = newN;
    }

    return sortedArr;
}