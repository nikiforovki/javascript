/*
1. Создай объект со свойствами и методом, который использует `this` для
доступа к этим свойствам. Затем присвой этот метод другой переменной и
вызовите её. Объясни своими словами, что произошло;*/


// const obj = {
//     name: "Kirill",
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
//
// // obj.greet();
//
// // Создаем новую функцию, где this всегда будет ссылаться на объкт obj
// const greetFunc = obj.greet.bind(obj);
// greetFunc()


/*2. Объясни, почему в примере ниже в первом случае выводится имя, а
во втором - undefined. Как сделать так, чтобы в методе delayedGreet
тоже выводилось имя (без использования call, apply или bind)?*/
//
// const student = {
//     name: 'Alice',
//
//     greet: function() {
//
//         console.log(`Hello, ${this.name}!`);
//
//     },
//
//     delayedGreet: function() {
//
//         setTimeout(this.greet, 1000);
//
//     }
//
// };
//
// student.greet() // Hello, Alice
// student.delayedGreet() // Hello, undefined

/*
Во втором примере мы не получаем имя потому-что не обращаемся к свойстыц объекта.
Идет потеря контекста*/


// 3. Напиши функцию и вызови её с разными контекстами, используя `call`, `apply` и `bind`;
// метод call
// const user = {
//     name: "Kirill"
// }
//
// function printName(text) {
//     console.log(text + this.name);
//
// }
//
// printName.call(user, 'Привет ')

// метод apply

// const user = {
//     name: "Kirill"
// }
//
// function printName(text, text2, text3) {
//     console.log(text + text2 + text3 + this.name);
//
// }
//
// printName.apply(user, ['Привет ', 'Параметр 1 ', 'Параметр 2 '] )


// // метод bind
//
// const user = {
//     name: "Kirill"
// }
//
// function printName(text, text2) {
//     console.log(text + text2 + this.name);
//
// }
//
// let foo = printName.bind(user, 'Привет ', 'Параметр 1 ')
//
// foo();



// /*4. Что будет в консоли в результате выполнения функций sayHelloToAdmin() и sayHelloToUser()?
//     Объясни, почему так произошло. Как это можно изменить?*/
//
// const admin = {
//     name: 'Bob'
// };
//
// const user = {
//     name: 'John'
// };
//
//     function sayHello() {
//         console.log('Hello, ' + this.name)
//     }
//
// const sayHelloToAdmin = sayHello.bind(admin)
//
// sayHelloToAdmin()
//
//
// // const sayHelloToUser = sayHelloToAdmin.bind(user)
// //
// // sayHelloToUser()
//
//
// const sayHelloToUser = sayHello.bind(user)
//
// sayHelloToUser()
//
// Проблема была в том, что мы присваивали переменной sayHelloToUser
// значение переменной sayHelloToAdmin, которая ссылалась на объект admin и его свойство
// name. Из-за этого выводилось имя Bob вместо нужного John.
// Убрал что бы переменная брыла имя со свойства user котОРая находится в объекте admin
// а обращалась к объкту user
//
//
// Было так
//
// const sayHelloToUser = sayHelloToAdmin.bind(user)
//
// стало
//
// const sayHelloToUser = sayHello.bind(user)
