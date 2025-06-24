// Задание 1

const myString = 'abc'
const myNumber = 10
const myBoolean = true
const myNull = null
let myUndefined
const myObject = {}
const myArray = []

console.log(typeof myString)
console.log(typeof myNumber)
console.log(typeof myBoolean)
console.log(typeof myNull)
console.log(typeof myUndefined)
console.log(typeof myArray)
console.log(typeof myObject)


// Задание 2

/*1. По ссылке (объекты, массивы)

Хранятся и сравниваются по ссылке. При этом при сравнении будет учитываться именно факт того,
    что две переменные ссылаются на один и тот же объект.
    Даже если два объекта содержат идентичные значения это ни на что не повлияет.*/

/*2. По значению (числа, булевы и строки)

Хранятся и сравниваются по значению. Можно безопасно менять значение переменной и не
бояться, что изменится что-то ещё.*/
