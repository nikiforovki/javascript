/*
2. Создай класс Employee, наследующий Person. Класс должен добавлять свойство position и метод work,
который выводит строку "Я работаю на позиции (должность)". Переопредели метод introduce так,
чтобы он также включал информацию о должности;*/


class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        // console.log(`Привет, меня зовут ${this.name}`);
    }
}

const userName = new Person('Кирилл');
userName.introduce();

class Employee extends Person {
    constructor(name, position) {
        super(name);
        this.position = position;
    }

    work() {
        console.log(`Я работаю на позиции ${this.position}`);
    }

    introduce() {
        super.introduce();
        console.log(`Я работаю на позиции ${this.position}`);
    }
}

const emp = new Employee('Кирилл', 'разработчик');
// emp.introduce();

emp.work();