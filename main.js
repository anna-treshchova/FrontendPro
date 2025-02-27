// null "" 0 = false

// let x = null;
// let y = null;
//
// if(x) {
//   console.log(true);
// } else {
//     console.log(false);
// }
//
// //OR
//
// if(!y) {
//     console.log(false);
// } else {
//     console.log(true);
// }


// // Конкатенація
// // Якщо проводиться операція додавання між двома оперантами один з яких є рядком, другий оперант JS також намагається привести до рядка.
// console.log("5" + 2); //52
// console.log("Hello" + " World!"); // Hello World!

// console.log("5" - 2); //3    JS намагається рядок привести до числа якщо виконуються будь-які математичні операції (- / * ** %  -) окрім +
// console.log("5tvn" - 3); //NaN  Якщо JS не може привести рядок до числа - отримуємо NaN (Not a Number)
// //Будь-яка операція між NaN та числом видасть NaN
//
// console.log(5 + 2 + "2")//72
// console.log(5 + 2 - "2")//5


// _________________________________________________________________________________________

// Iterations  (Цикли)  while   do while   for

// console.log(1 ** 2);
// console.log(2 ** 2);
// console.log(3 ** 2);

// let number = 1;
// while(number <= 5) {
//     console.log(number ** 2);
//     number++
// }


// let number = 2;
//
// while(number <= 10) {
//     console.log(number);
//     number += 2;
// }


// let number = 0; //ініціалізація
// while(number !== 7){
//     number = +prompt("Please guess the number") //дія
// }
// console.log('The End');


// 1-n
// let number = 1; //ініціалізація
// let sum = 0;
//
// let n =+prompt("Enter your number");
//
// while (number <= n) { // умова
// sum += number;
// number++ //інкремент OR крок
// }
//
// console.log("Sum - ", sum); // 21


// let n = +prompt("Enter your number"), sum = 0, number = 1;
// while (number <= n) sum += number++;
// console.log("Sum -", sum);


// break  continue  - ключові слова


//break

// let number = 1;
// let sum = 0;
// while (number <= 100) {
//     if (number === 10) {
//         console.log("stopped with", number);
//         break;
//
//     }
//     console.log("Calculating for", number);
//     sum += number++;
//     console.log("Sum after action -", sum,"Number after action", number);
//
// }
// console.log(sum);


//continue
//
// let number = 1;
// while (number <= 100) {
//     number++
//     if (number % 2 === 0) {
//         continue;
//     }
//     console.log(number);
// }

//OR

// let number2 = 1
// while (number2 <= 100) {
//     if (number2 % 2 !== 0) {
//         console.log(number2);
//     }
//     number2++;
// }


// do while    Цикл do while навідміну від while виконається хоча б один раз
// let i = 10;
// do {
//     console.log(i); //10
//     i++
// } while (i < 5)

// let j = 10;
// while (j < 5) {
//     console.log(j); //Рядок не вивівся, бо отримав false
//     j++
// }

// while - цикл з передумовою
// do while - цикл з постумовою


//FOR

// for (ініціалізація; умова; інкремент (оновлення)) {
//     (тіло)
// }

// let number = 1;
// while (number < 5) {
//     console.log("Value from While - ", number);
//     number++;
// }
// console.log("------------------------")
//
// for(let i= 1; i < 5; i++){
//     console.log("Value from For - ", i);
// }


// let n = 10;
// let sum = 0;
//
// for(let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log(sum);


// let n = 10;
// let sum = 0;
//
// let i = 1;
// for(;;) {
//     sum += i;
//     if (i >= n) {
//         break;
//     }
//     i++
// }
// console.log(sum);


// !! нескінченний цикл   glitch
// while(true) {
//     console.log("while true");
// }


//Коли початкове значення змінної ми не знаємо
// let n = 10;
// let sum = 0;
//
// let i = 1;
// for(; i <= n; i++) {
//     sum += i;
// }
// console.log(sum);


// let n = 10;
// let sum = 0;
// for(let i = 1; i <= n; i++){
//     if(i === 5){
//         break;
//     }
//     sum += i;
// }
// console.log(sum)


//Вкладені цикли
// for(let i = 1; i < 5; i++) {
//  console.log("Value from first loop - ", i)
//     for(let j = 1; j < 5; j++) {
//         console.log("Value from second loop - ", j)
//     }
// }

// Таблиця множення
// for(let i = 1; i <= 9; i++){
//     console.log("Table for:", i);
//     for(let j = 1; j <= 9; j++){
//          console.log(`${i} * ${j} = ${i * j}`);
//     }
// }


// Пів ялинки
// for(let i = 1; i <= 4; i++){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += "*";
//     }
//     console.log(row);
// }


// Ялинка
// for (let i = 0; i <= 5; i++) {
//     let row = "";
//
//     for (let k = 0; k < 5 - i; k++) {
//         row += " ";
//     }
//
//     for (let j = 0; j <= i * 2; j++) {
//         row += "*";
//     }
//
//     console.log(row);
// }


//     *
//    ***
//   *****
//  *******
// *********
//***********


//Practice
// let result = "";
// for(let i = 10; i <= 20; i++){
//    result += i;
//    if(i < 20) {
//        result += ", ";
//    }
// }
// console.log(result);


// let result = "";
// let i = 10;
// while (i <= 20) {
//     result += i ** 2;
//     result += (i < 20) ? ", " : ".";
//     i++;
// }
// console.log(result);


// let sum = 0
// for(let i = 1; i <= 15; i++) {
//     sum += i;
// }
// console.log("Сума всіх цілих чисел від 1 до 15:", sum);

// let number = 1;
// let result = 1;
// while (number <= 4) {
//     result *= number++
// }
// console.log("Добуток всіх цілих чисел від 1 до 4 складає " + result);


// let result = 0;
// count = 0;
// for (let i = 1; i <= 500; i++) {
//     result += i;
//     count++;
// }
// console.log("Cереднє арифметичне всіх цілих чисел від 1 до 500 дорівнює", result / count);


// let sum = 0;
// let i = 30;
// while (i <= 80) {
//     sum += i;
//     i += 2;
// }
// console.log(sum);

//OR

// let sum = 0;
// let i = 30;
// while (i <= 80) {
//     if(i % 2 === 0) {
//         sum += i;
//     }
//     i ++;
//
// }
// console.log("Cума парних чисел у діапазоні від 30 до 80 =",sum);


// let result = "";
// for (let i = 100; i <= 200; i++) {
//     if (i % 3 === 0) {
//         result += i + " ";
//     }
// }
// console.log(result);


// for(let i = 2;i <= 10; i++){
//     console.log("Таблиця множення для:", i);
//     console.log();
//
//     for(let j = 1;j <= 10; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
//     console.log();
// }

//Ялинка
// for(let i = 0; i <= 6; i++){
//     let row = "";
//
//     for(let k = 0; k <= 6 - i; k++){
//         row += " ";
//     }
//     for(let j = 0; j <= i * 2; j++){
//         row += "*";
//     }
//     console.log(row);
// }


// let number = +prompt("Enter a number");
//
// if (number && number > 1 && Number.isInteger(number)) {
//     let i = 2;
//     while (i <= number) {
//         if (number % i === 0) {
//             console.log(`The first divisor of ${number} is ${i}`);
//             break;
//         }
//         i++
//     }
// } else {
//     console.log("Invalid input. Please enter an integer greater than 1.");
// }