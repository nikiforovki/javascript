document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM полностью загружен");

    const container = document.getElementById('box-task');
    console.log("Контейнер:", container);

    // Диагностика стилей контейнера
    if (container) {
        console.log("Проверка видимости контейнера:");
        console.log("display:", getComputedStyle(container).display);
        console.log("height:", getComputedStyle(container).height);

        // Временно делаем контейнер видимым
        container.style.border = "2px solid red";
        container.style.padding = "10px";
    } else {
        console.error("Элемент #box-task не найден!");
    }

    console.log("Начало выполнения запроса...");

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            // console.log('Статус HTTP:', response.status);
            // console.log('Заголовки:', [...response.headers.entries()]);
            return response.json();
        })
        .then(data => {
            console.log('Получено записей:', data.length);
            console.log('Пример данных:', data[0]);

            if (!container) {
                console.error("Контейнер пропал после запроса!");
                return;
            }

            if (!data || !Array.isArray(data) || data.length === 0) {
                console.warn("Нет данных для отображения");
                container.innerHTML = "<p>Нет задач для отображения</p>";
                return;
            }

            container.innerHTML = ''; // Очищаем только если данные есть

            data.forEach(todo => {
                const taskElement = document.createElement('div');
                taskElement.className = 'task';

                // Временно добавляем видимые границы
                taskElement.style.border = "1px solid blue";
                taskElement.style.margin = "5px";
                taskElement.style.padding = "5px";

                taskElement.innerHTML = `
                <h3>${todo.title}</h3>
<!--                <p>Статус: ${todo.completed ? '✓ Выполнено' : '✗ Не выполнено'}</p>-->
            `;
                container.appendChild(taskElement);
            });

            console.log("Задачи добавлены в DOM");
        })
        .catch(error => {
            console.error('Ошибка:', error);
            // Отображаем ошибку на самом видном месте
            alert(`Ошибка загрузки данных: ${error.message}`);
        });
});


// document.addEventListener('DOMContentLoaded', () => {
//     console.log("DOM полностью загружен");
//
//     const container = document.getElementById('box-task');
//     console.log("Контейнер:", container);
//
//     // Диагностика стилей контейнера
//     if (container) {
//         console.log("Проверка видимости контейнера:");
//         console.log("display:", getComputedStyle(container).display);
//         console.log("height:", getComputedStyle(container).height);
//
//         // Временно делаем контейнер видимым
//         container.style.border = "2px solid red";
//         container.style.padding = "10px";
//     } else {
//         console.error("Элемент #box-task не найден!");
//     }
//
//     console.log("Начало выполнения запроса...");
//
//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(response => {
//             // console.log('Статус HTTP:', response.status);
//             // console.log('Заголовки:', [...response.headers.entries()]);
//             return response.json();
//         })
//         .then(data => {
//             console.log('Получено записей:', data.length);
//             console.log('Пример данных:', data[0]);
//
//             if (!container) {
//                 console.error("Контейнер пропал после запроса!");
//                 return;
//             }
//
//             if (!data || !Array.isArray(data) || data.length === 0) {
//                 console.warn("Нет данных для отображения");
//                 container.innerHTML = "<p>Нет задач для отображения</p>";
//                 return;
//             }
//
//             container.innerHTML = ''; // Очищаем только если данные есть
//
//             data.forEach(todo => {
//                 const taskElement = document.createElement('div');
//                 taskElement.className = 'task';
//
//                 // Временно добавляем видимые границы
//                 taskElement.style.border = "1px solid blue";
//                 taskElement.style.margin = "5px";
//                 taskElement.style.padding = "5px";
//
//                 taskElement.innerHTML = `
//                 <h3>${todo.title}</h3>
// <!--                <p>Статус: ${todo.completed ? '✓ Выполнено' : '✗ Не выполнено'}</p>-->
//             `;
//                 container.appendChild(taskElement);
//             });
//
//             console.log("Задачи добавлены в DOM");
//         })
//         .catch(error => {
//             console.error('Ошибка:', error);
//             // Отображаем ошибку на самом видном месте
//             alert(`Ошибка загрузки данных: ${error.message}`);
//         });
// });