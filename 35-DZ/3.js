/*
3. Создай объектное наследование без использования классов. Создай объект Vehicle с методом move.
Создай объект Car, который наследует от Vehicle, добавив свой метод drive.
 Используй Object.create для наследования.*/

const Vehicle = {
    move() {
        console.log('Транспорт движется');
    }
};

const Car = Object.create(Vehicle);

Car.drive = function() {
    console.log('Машина едет');
};

Vehicle.move();
Car.move();
Car.drive();


const myCar = Object.create(Car);
myCar.drive();
myCar.move();