/*1. Напиши класс Book, который имеет поля title, author и pages.
    Добавь метод для вывода краткой информации о книге;*/

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getInfo() {
        return `${this.title} — ${this.author} ${this.pages} стр.`;
    }
}

const book1 = new Book("Мастер и Маргарита", "М. Булгаков", 480);

console.log(book1.getInfo())