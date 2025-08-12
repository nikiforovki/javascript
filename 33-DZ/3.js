// 3. Напиши код, в котором функция выводит значение this в консоль.
// Включи строгий режим и проанализируй, как изменилось значение this;


"use strict";

function showThis() {
    console.log(this);
}

showThis();  // undefined в строгом режиме