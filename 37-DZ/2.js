/*
2. Создай объект с несколькими свойствами, где одно из них будет неперечисляемым (не должно выводиться в циклах).
Убедись, что свойство не отображается при выводе ключей объекта через цикл for...in.*/

const car = {
    brand: 'Toyota',
    year: 2022
};


Object.defineProperty(car, 'vin', {
    value: 'JT123456789012345',
    enumerable: false,
    writable: true,
    configurable: true
});

console.log("Вывод свойств через for...in:");
for (const key in car) {
    console.log(key);
}


console.log("\nObject.keys():", Object.keys(car));
console.log("Object.getOwnPropertyNames():", Object.getOwnPropertyNames(car));