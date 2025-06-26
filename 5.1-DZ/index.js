// Задание 1 (Исправлено)

const number = 2;
if (number > 0) {
    console.log("Положительное число");
} else if (number === 0) {
    console.log("Ноль");
} else {
    console.log("Отрицательное число");
}

// // Задание 2 (Исправлено)

// const height = Number(prompt('Введите ваш рост (в см)'));
// const weight = Number(prompt('Введите ваш вес (в кг)'))
//
// if (height === null || weight === null || isNaN(height) || isNaN(weight)) {
//     alert("Нужно ввести числа!");
// } else {
//     const heightInMeters = Number(height) / 100;
//     const bmi = (Number(weight) / (heightInMeters * heightInMeters)).toFixed(2);
//
//     alert(`Ваш ИМТ: ${bmi}`);
// }


// // Задание 3
// const monthNumber = Number(prompt('Введите номер месяца (1-12):'));
// let monthName;
//
// switch (monthNumber) {
//     case 1:
//         monthName = 'Январь';
//         break;
//     case 2:
//         monthName = 'Февраль';
//         break;
//     case 3:
//         monthName = 'Март';
//         break;
//     case 4:
//         monthName = 'Апрель';
//         break;
//     case 5:
//         monthName = 'Май';
//         break;
//     case 6:
//         monthName = 'Июнь';
//         break;
//     case 7:
//         monthName = 'Июль';
//         break;
//     case 8:
//         monthName = 'Август';
//         break;
//     case 9:
//         monthName = 'Сентябрь';
//         break;
//     case 10:
//         monthName = 'Октябрь';
//         break;
//     case 11:
//         monthName = 'Ноябрь';
//         break;
//     case 12:
//         monthName = 'Декабрь';
//         break;
//     default:
//         monthName = 'Неверный номер месяца';
// }
// alert(monthName);
// console.log(monthName);


//Задание 4

// const monthNumber = Number(prompt('Введите номер месяца (1-12):'));
// let season;
//
// switch (monthNumber) {
//     case 12:
//     case 1:
//     case 2:
//         season = 'Зима';
//         break;
//     case 3:
//     case 4:
//     case 5:
//         season = 'Весна';
//         break;
//     case 6:
//     case 7:
//     case 8:
//         season = 'Лето';
//         break;
//     case 9:
//     case 10:
//     case 11:
//         season = 'Осень';
//         break;
//     default:
//         season = 'Неверный номер! Введите 1-12';
// }
//
// alert(`Месяц ${monthNumber} — это ${season}!`);

