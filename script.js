// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// const numberCube = (number) => number**3;
// console.log(numberCube(2) + numberCube(3));

// ***************************************

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// function userSalary() {
//     const salary = prompt('Введите сумму: ', 0);

//     if (isNaN(salary)) {
//         salert('Введены некорректные данные!');
//         userSalary();
//     } else {
//         const result = salary * 0.87
//         alert(`Размер Вашей заработной платы с вычетом налога равен ${result} $`);
//     }
// }
// userSalary();

// **********************************************

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// function maxNumber(number1, number2, number3) {
//     if(number1 >= number2 && number1 >= number3){
//         return number1;
//     } else if (number2 >= number1 && number2 >= number3){
//         return number2;
//     } else{
//         return number3;
//     }
// }
// let number1 = +prompt(`Введите первое число: `);
// let number2 = +prompt(`Введите второе число: `);
// let number3 = +prompt(`Введите третье число: `);
// alert(`Максимальное из трех введенных значений это число   ${maxNumber(number1, number2, number3)}`);
// ***************************************

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
const sum = (a, b) => a + b;
const Difference = (a, b) => a - b;
const Multiplication = (a, b) => a * b;
const Division = (a, b) => a / b;

let number1 = +prompt('Введите первое число: ');
let number2 = +prompt('Введите второе число: ');
console.log(`Сумма чисел равна = ${sum(number1, number2)}`);
console.log(`Разность чисел равна = ${Difference(number1, number2)}`);
console.log(`Произведение чисел равно = ${Multiplication(number1, number2)}`);
console.log(`Частное чисел равно = ${Division(number1, number2)}`);