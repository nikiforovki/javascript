// Задание 1

// Пример 1:
const sum = 2 * 2 + 2;
console.log(sum)

// // Пример 2:

// Углы в градусах
const angle1 = 54;
const angle2 = 16;

// Преобразуем градусы в радианы
const radians1 = angle1 * Math.PI / 180;
const radians2 = angle2 * Math.PI / 180;

// Вычисляем sin и cos
const sinValue = Math.sin(radians1);
const cosValue = Math.cos(radians2);

// Умножаем и выводим результат
const result = sinValue * cosValue;
console.log(result); // ~0.777 (ответ округлён)



// Пример 3:

// Вычисляем выражение внутри корня
const insideSqrt = 13.2 * 71.90;

// Вычисляем квадратный корень
const sqrtValue = Math.sqrt(insideSqrt);

// Вычисляем числитель дроби (16 * корень)
const numerator = 16 * sqrtValue;

// Делим на 7
const fraction = numerator / 7;

// Вычисляем вторую часть в скобках (3 в степени корень из 49)
const sqrt49 = Math.sqrt(49); // 7
const powerPart = Math.pow(3, sqrt49); // 3^7

// Складываем две части в скобках
const sumInBrackets = fraction + powerPart;

// Вычисляем 2 в степени 7
const twoPower7 = Math.pow(2, 7); // 128

// Умножаем сумму на 2^7
const finalResult = sumInBrackets * twoPower7;

// Выводим результат
console.log("Результат:", finalResult);



// Задание 2

const a = 1;
const b = 2;
const c = 3;

const sum = a + b + c;
const result = (sum % 2 == 0);

console.log(result)



// Задание 3

const name = "";

if (name === "") {
    console.log("Hello, Guest!")

} else {
    console.log(`Hello, ${name}!`)
}





















