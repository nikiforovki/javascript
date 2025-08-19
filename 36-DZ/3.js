/*
3. Создай класс Order с приватным методом #calculateTotal(),
который будет рассчитывать общую стоимость заказа. Сделай публичный метод,
который возвращает результат этого расчета, и вызывай его через созданный экземпляр класса.*/

class Order {
    #items = [];
    constructor(items) {
        this.#items = items;
    }

    #calculateTotal() {
        return this.#items.reduce((total, item) => total + item.price, 0);
    }

    getTotal() {
        return this.#calculateTotal();
    }
}