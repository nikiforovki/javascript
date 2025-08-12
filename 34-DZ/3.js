/*
3. В классе Rectangle из примера добавь геттер perimeter, который вычисляет и возвращает периметр прямоугольника.
Добавь сеттер height. Он должен проверять, что устанавливаемое значение высоты height больше 0.
Если значение не положительное, то выводится сообщение об ошибке в консоль, а высота остается неизменной.*/


class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get area() {
        return this._width * this._height;
    }

    get perimeter() {
        return 2 * (this._width + this._height);
    }

    set width(value) {
        if (value <= 0) {
            console.error('Ширина должна быть положительным числом.');
        } else {
            this._width = value;
        }
    }

    get width() {
        return this._width;
    }

    set height(value) {
        if (value <= 0) {
            console.error('Высота должна быть положительным числом.');
        } else {
            this._height = value;
        }
    }

    get height() {
        return this._height;
    }
}

const myRect = new Rectangle(5, 10);

console.log(myRect.area);
console.log(myRect.perimeter);

myRect.width = -3;
myRect.height = 0;

console.log(myRect.width);
console.log(myRect.height);