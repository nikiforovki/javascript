
/*1. Напиши асинхронную функцию `delay`,
которая принимает один аргумент - количество миллисекунд,
и возвращает промис, который разрешается (резолвится) через
заданное количество времени. Используй `async/await`
для ожидания этого промиса и выведите сообщение "Задержка завершена"
после завершения ожидания;*/
function delay(ms) {
    return new Promise(res => setTimeout(res, ms));
}

async function run(ms){
    await  delay(ms)
    console.log(`Задержка завершена ${ms} мс`)
}

run(1000)


/*
2. Напиши асинхронную функцию `fetchUserData`,
которая делает запрос к фейковому API (любому) и
возвращает данные пользователя. Используй функцию fetch */
async function fetchUserDate() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await response.json();
    return data //Тут полностью можно вытаскивать любое свойство например data.address.street
}

fetchUserDate()
    .then(user => console.log(user));













