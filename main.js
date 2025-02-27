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







// hw5.1
// let result = ""
// for (let i= 20; i <= 30; i += 0.5) {
//     result += i + " ";
// }
// console.log(result);

// hw5.2
// for (let i = 10; i <= 100; i +=10) {
//     console.log(`$${i} = ${i * 26} UAH`);
// }

// hw5.3
// let n = prompt("Enter a number");
// let i = 1;
// while (i <= 100) {
//    if(i ** 2 <= n) {
//        console.log(`${i} (${i}² = ${i ** 2} <= ${n})`);
//    }
//     i++
// }

// hw5.4
// let n = Number(prompt("Enter your number"));
//
// let isPrime = true;
//
// if (n && Number.isInteger(n) && n >= 2) {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             console.log(`Your number ${n} is a composite number because it's divisible by ${i}`);
//             isPrime = false;
//             break;
//         }
//     }
//
//     if (isPrime) {
//         console.log(`Your number ${n} is a prime number.`);
//     }
// } else {
//     console.log("Invalid input. Please enter an integer greater than or equal to 2.");
// }



//Practice
// let result = "";
// for(let i = 10; i <= 20; i++){
//    result += i;
//    if(i < 20) {
//        result += ", ";
//    }
// }
// console.log(result);


