/*1. Напиши функцию `safeDivide`, которая принимает два числа и возвращает результат их
деления. Если второй аргумент равен нулю, функция должна бросать ошибку с сообщением
"Деление на ноль невозможно". Используй `try...catch` для обработки ошибок и выведи
сообщение об ошибке в консоль;*/

function safeDivide (a, b) {
    try {
        if (b === 0) {
            console.log("Деление на ноль невозможно");
        }

    return a / b;

    } catch (err) {
        console.log('Поймали ошибку! Вот она:', err.message);

    }
}

console.log(safeDivide(2, 2));
console.log(safeDivide(2, 0));

/*2. Напиши функцию `transfromJSON`, которая принимает строку в формате JSON и возвращает
объект. Используй `try...catch` для обработки возможных ошибок при парсинге JSON и
выведи сообщение об ошибке в консоль;*/

function transformJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Ошибка при парсинге JSON:', error.message);
    }
}

transformJSON()


/*
3. Напиши функцию `checkAccess`, которая принимает возраст пользователя. Если возраст
меньше 18, функция должна бросать ошибку с сообщением "Доступ запрещен". Используйте
`try...catch` для обработки ошибок и выведи сообщение об ошибке в консоль.*/

function checkAccess(age) {
    try {
        if (age < 18) {
            throw new Error("Доступ запрещен");
        }
        console.log("Доступ разрешен");
    } catch (error) {
        console.error(error.message);
    }
}

checkAccess(20); // Доступ разрешен > 18
checkAccess(15); // Доступ запрещен < 18