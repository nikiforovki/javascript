/*
2. Создай класс EmailValidator со статическим методом isValid(email),
который будет проверять, является ли строка корректным email (достаточно простой проверки на наличие символа @);*

 */
class EmailValidator {
    static isValid(email) {
        return typeof email === 'string' && email.includes('@');
    }
}