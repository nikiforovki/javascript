// 4. Попробуй удалить встроенное свойство объекта (например, метод toString у объекта) в строгом режиме.
// Объясни, почему это не работает, и что нужно сделать, чтобы избежать подобных ошибок.

"use strict";

// Наследуемый toString удалить нельзя — delete вернёт true, но метод останется из прототипа.
const obj = {};
console.log(obj.hasOwnProperty("toString")); // false
console.log(typeof obj.toString);            // "function"
console.log(delete obj.toString);            // true (но ничего не изменилось)
console.log(typeof obj.toString);            // "function"

// Демонстрация strict: удаление неконфигурируемого собственного свойства — ошибка.
const o = {};
Object.defineProperty(o, "x", { value: 1, configurable: false });
// В строгом режиме это бросит TypeError:
delete o.x;
