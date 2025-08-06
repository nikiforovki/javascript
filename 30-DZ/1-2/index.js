// 1. Создаем обработчики для вложенных элементов
document.getElementById('div1').addEventListener('click', () => {
    console.log('Первый div');
});

document.getElementById('div2').addEventListener('click', () => {
    console.log('Второй div');
});

document.getElementById('div3').addEventListener('click', () => {
    console.log('Третий div');
});

// Задание 2: остановка всплытия на div2

document.getElementById('div1').addEventListener('click', () => {
    console.log('Первый div');
});

document.getElementById('div2').addEventListener('click', (event) => {
    console.log('Второй div');
    event.stopPropagation();
});

document.getElementById('div3').addEventListener('click', () => {
    console.log('Третий div');
});


