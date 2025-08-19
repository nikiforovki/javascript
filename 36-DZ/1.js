/*
1. Создай класс Counter, который будет иметь приватное свойство count.
Напиши публичные методы для увеличения, уменьшения и отображения значения счетчика;*/

class Counter {
    #count = 0;
    increment() {
        this.#count++;
        return this.#count;
    }
    decrement() {
        if (this.#count > 0) this.#count--;
        return this.#count;
    }
    display() {
        return this.#count;
    }
}