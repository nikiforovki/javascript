/*
3. Напиши пример использования полиморфизма, создав несколько классов, наследующих общий базовый класс,
    и вызывая общий метод для всех объектов.*/

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return `${this.name} издает неопознанный звук`;
    }
}

class Dog extends Animal {
    makeSound() {
        return `${this.name} говорит Гав!`;
    }
}

class Cat extends Animal {
    makeSound() {
        return `${this.name} говорит Мяу!`;
    }
}

class Cow extends Animal {
    makeSound() {
        return `${this.name} говорит Мууу!`;
    }
}

const animals = [
    new Dog("Шарик"),
    new Cat("Мурка"),
    new Cow("Зорька"),
    new Animal("Странное существо")
];

animals.forEach(animal => {
    console.log(animal.makeSound());
});
