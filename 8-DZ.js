
// Задание 1

// const arr = [2, 4, 6];
// const newArr = arr.map(num => num ** 2);
//
// console.log(newArr)

// Задание 2

// const arr = [1, 2, 2, 3, 4, 5, 5, 5, 6];
// console.log(arr)
//
// const newArr = [...new Set(arr)]
// console.log(newArr)

// Задание 3

// const arr = [1, 2, 3, 9];
// const newArr=arr.reduce((a, b) => {
//     return a + b
// }, 0)
//
// console.log(newArr)

// Задание 4

// const arr = [1, 2, 3, 9];
//
// const newArr = arr.reduce((acc, item) => [item, ...acc], [])
// console.log(newArr)


// Задание 5
/*При объявление через let
let позволяет перезаписывать значения*/

// let str = 'Kirill' // Создаём переменную str с начальным значением
//     str='Андрей' // Перезаписываем значение
// console.log(str) // Выводим: "Андрей"
//
// // const создает неперезаписываемую переменную
// const str = 'Kirill'
//     str='Андрей'
// console.log(str)


let arrayLet = [1, 2, 3];
const arrayConst = [4, 5, 6];


// arrayLet.push(10) //Можем добавлять в конец массива
// arrayConst.push(20) //const запрещает перезапись переменной, но не изменение содержимого объекта/массива.

// arrayLet.pop(10) // Удаляет последний элемент в массиве
// arrayConst.pop(20) // Удаляет последний элемент в массиве

// arrayLet = ['a', 'b'];  // Полностью перезаписываем массив

// arrayConst = ['x', 'y']; // При объявление через const не сработает перезапись массива


console.log(arrayLet)
console.log(arrayConst)