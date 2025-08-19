/*
1. Создай класс Car с конструктором, который принимает марку и модель автомобиля.
Добавь метод для вывода информации об автомобиле. Создай несколько экземпляров класса и выведи их информацию;*/
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    displayInfo() {
        return `Автомобиль: ${this.brand} ${this.model}`;
    }
}

const car1 = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic');
const car3 = new Car('Ford', 'Mustang');

console.log(car1.displayInfo());
console.log(car2.displayInfo());
console.log(car3.displayInfo());