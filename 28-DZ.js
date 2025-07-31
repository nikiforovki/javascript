// 1. Напиши функцию `getUserData`, которая возвращает
// промис с данными пользователя через 2 секунды. Затем
// создай цепочку промисов, которая обрабатывает эти данные
// и выводит результат в консоль;

function getUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = {
                name: 'Анна',
                age: 25,
                city: 'Москва'
            };
            resolve(user);
        }, 2000);
    });
}

getUserData()
    .then((user) => {
        const info = `Пользователь: ${user.name}, ${user.age} лет, город ${user.city}`;
        return info;
    })
    .then((userInfo) => {
        console.log(userInfo);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });



// 2. Напиши две функции, каждая из которых возвращает промис с данными
// через 3 и 5 секунд соответственно. Используй такой метод промисов,
// чтобы дождаться выполнения обоих промисов и вывести результаты в консоль;

function getDataFirst() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Данные из первой функции (3 сек)');
        }, 3000);
    });
}

function getDataSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Данные из второй функции (5 сек)');
        }, 5000);
    });
}

Promise.all([getDataFirst(), getDataSecond()])
    .then((results) => {
        console.log('Результаты:', results[0], '|', results[1]);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });



// 3. Напиши две функции, каждая из которых возвращает промис через случайное время
// (от 1 до 5 секунд). Используй такой метод промисов, чтобы вывести результат первого
// выполненного промиса в консоль.

function getDataA() {
    const delay = Math.floor(Math.random() * 5 + 1) * 1000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Функция A завершилась за ${delay / 1000} сек`);
        }, delay);
    });
}

function getDataB() {
    const delay = Math.floor(Math.random() * 5 + 1) * 1000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Функция B завершилась за ${delay / 1000} сек`);
        }, delay);
    });
}

Promise.race([getDataA(), getDataB()])
    .then((result) => {
        console.log('Первый результат:', result);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });



