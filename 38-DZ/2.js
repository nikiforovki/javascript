/*
2. Создай класс ElectricCar, который наследует класс Car и добавь дополнительное свойство для емкости батареи.
Переопредели метод вывода информации, чтобы включить информацию о батарее;*/

class ElectricCar extends Car {
    constructor(brand, model, batteryCapacity) {
        super(brand, model);
        this.batteryCapacity = batteryCapacity;
    }
    displayInfo() {
        return `${super.displayInfo()} | Батарея: ${this.batteryCapacity} kWh`;
    }
}