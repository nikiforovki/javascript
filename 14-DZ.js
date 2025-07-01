
// Задание 1
/* Создай объект, ключи в котором будут описывать тебя. Например, твое имя, возраст, увлечения и т.д.
   Обязательно используй разные типы данных: имя - строка, возраст - число, хобби - массив и  т.д.
   Затем выведи все свои свойства/свойства объекта в консоль(разными способами!);*/


    // const aboutMe = {
    //     name: 'Kirill',
    //     age: 31,
    //     hobby: [
    //         'frontend',
    //         'programming',
    //         'games'
    //     ]
    // }

// console.log(aboutMe)
// console.log(Object.values(aboutMe));
// console.log(JSON.stringify(aboutMe));

// Можно так сделать
// console.log(JSON.stringify(aboutMe, null, 2));


// Задание 2
/*В объект из предыдущего пункта:

    - добавь новое свойство;

- измени значение существующего свойства;
- удали любое свойство.
    И снова выведи все свойства объекта в консоль разными способами!*/


const aboutMe = {
    name: 'Kirill',
    age: 31,
    hobby: [
        'frontend',
        'programming',
        'games'
    ]
}

console.log(aboutMe)

    aboutMe.city= 'Moscow';
    aboutMe.age = 32;
    console.log(aboutMe)
    delete aboutMe.age;

console.log(aboutMe)
console.log(Object.values(aboutMe));
console.log(JSON.stringify(aboutMe, null, 2));
