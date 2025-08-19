/*
1. Создай класс Person и класс-наследник Student .
Класс Person должен иметь свойства name и метод introduce, который выводит строку вида "Привет, меня зовут (имя)".
Класс Student должен наследовать Person и добавлять свойство course и переопределенный метод introduce,
который выводит строку вида "Привет, меня зовут (имя), и я учусь на (курсе) курсе".
Используй console.log(Student.prototype) и исследуй, как JavaScript создает цепочку прототипов;*/


class Person {
    constructor(name) {
        this.name = name;

    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name}`);
    }
}

const userName = new Person('Кирилл');

userName.introduce();


class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name}, и я учусь на ${this.course} курсе`);

    }
}


const student = new Student('Кирилл', 4);
student.introduce();



console.log('Прототип Student:');
console.log(Student.prototype);

console.log('Цепочка прототипов:');
console.log('Student.prototype.__proto__ === Person.prototype:', Student.prototype.__proto__ === Person.prototype);  // true
console.log('Object.getPrototypeOf(Student.prototype) === Person.prototype:', Object.getPrototypeOf(Student.prototype) === Person.prototype);  // true

// Ещё глубже: цепочка до Object.prototype
console.log('Person.prototype.__proto__ === Object.prototype:', Person.prototype.__proto__ === Object.prototype);  // true