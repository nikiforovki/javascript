/*
1. Напиши объект с несколькими свойствами и сделай все свойства неизменяемыми (с помощью Object.defineProperty).
Проверь, можно ли изменить их значения после этого;*/

const user = {};

Object.defineProperty(user, 'name', {
    value: 'Анна',
    writable: false,
    configurable: false
});

Object.defineProperty(user, 'age', {
    value: 28,
    writable: false,
    configurable: false
});

Object.defineProperty(user, 'role', {
    value: 'developer',
    writable: false,
    configurable: false
});


console.log("Исходные значения:");
console.log(user.name, user.age, user.role);

user.name = 'Мария';
user.age = 30;
user.role = 'manager';

console.log("\nПосле попытки изменения:");
console.log(user.name, user.age, user.role);

delete user.name;
Object.defineProperty(user, 'age', { value: 30 });

