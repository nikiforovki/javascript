/*
1. Напиши функцию, которая использует `setTimeout`
для создания таймера обратного отсчета.
Таймер должен выводить оставшееся время
каждую секунду и остановиться, когда время истечет;*/

function startTimer(time) {
    const seconds = Math.floor(time / 1000);
    console.log(`Осталось: ${seconds} сек.`);
    time -= 1000;
    if (time >= 0) {
        setTimeout(() => {
            startTimer(time);
        }, 1000);
    } else {
        console.log("Время вышло!");
    }
}

startTimer(10000);


// 2. Напиши функцию, которая использует `setInterval`
// для вывода сообщения "Не забудь выпить воды!" каждые 30 минут;

function waterReminder() {
    setInterval(() => {
        console.log("Не забудь выпить воды!");
    },1000);
}

waterReminder()