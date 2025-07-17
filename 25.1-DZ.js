// 1
function safeDivide(a, b) {
    try {
        if (b === 0) {

            throw new Error("Деление на ноль невозможно");
        }
        return a / b;
    } catch (err) {
        console.log('Поймали ошибку:', err.message);

        return null;
    }
}

console.log(safeDivide(2, 2));
console.log(safeDivide(2, 0));

// 2
function transformJSON(jsonString) {
    try {

        if (jsonString === undefined) {
            throw new Error("Не передана JSON-строка");
        }
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Ошибка при парсинге JSON:', error.message);

        return null;
    }
}

console.log(transformJSON('{"name": "John"}')); // {name: "John"}
console.log(transformJSON()); // Ошибка: Не передана JSON-строка
console.log(transformJSON('invalid')); // Ошибка парсинга

// 3
function checkAccess(age) {
    try {
        if (age < 18) {
            throw new Error("Доступ запрещен");
        }
        console.log("Доступ разрешен");
        return true;
    } catch (error) {
        console.error(error.message);

        return false;
    }
}

console.log(checkAccess(20));
console.log(checkAccess(15));