// 1. Создай функцию, которая принимает произвольное количество чисел и возвращает их среднее значение;
// function average  (...numbers) {
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     return sum / numbers.length;
// }
// console.log(average(1, 2, 4, 1))

/*2. Создай функцию, которая принимает объект с информацией о пользователе (имя, возраст, страна)
и возвращает строку с этой информацией, используя деструктуризацию;*/
// const user = {
//     name:'Kirill',
//     age: 31,
//     country: 'Russia'
// };
//
// function getUser ({name, age, country})  {
//     return `${name} ${age} ${country}`
// }
// console.log(getUser(user))


// /*3. Создай объект с вложенными объектами и массивами. Используй деструктуризацию, чтобы извлечь
// несколько значений на разных уровнях вложенности;*/
//
// const user = {
//     name: {
//         firstName: 'Kirill',
//         lastName: 'Nikiforov'
//     },
//     age:[ 25, 32, 31]
// };
//
//
// function getUser({name: {firstName, lastName}, age}) {
//     return `${firstName} ${lastName} ${age[2]}`
// }
//
// console.log(getUser(user))



/*
4. Используй оператор `spread` для создания нового массива, который включает все элементы исходного
массива и добавляет несколько новых элементов в начале и в конце;
*/


// const arr = [1, 2, 3, 4, 5]
// const newArr = [8, 8, 8, ...arr, 8, 8, 8];
// console.log(newArr)



/*
5. Используй оператор `rest` для создания функции, которая принимает объект с параметрами и возвращает
новый объект без одного указанного параметра.*/

// const obj = {
//     name: 'Kirill',
//     counter: 'Rus',
//     region: 799
// }
//
// function removeProperty(obj, counter) {
//     const { [counter]: deleteCounter, ...newobj} = obj;
//     return newobj
// }
//
//
// console.log(obj)
//
// console.log(removeProperty(obj, 'counter'))








