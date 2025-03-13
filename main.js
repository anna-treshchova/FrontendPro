//More checks (previous hw)

//6.1
// function removeCharacters(str, arrToDelete) {
//     if (typeof str !== "string") {
//         str = String(str);
//     }
//
//     for(let i = 0; i < arrToDelete.length; i++) {
//         arrToDelete[i] = String(arrToDelete[i])
//     }
//
//     let result = ""
//     for (let i = 0; i < str.length; i++) {
//         if (!arrToDelete.includes(str[i])) {
//             result += str[i]
//         }
//     }
//     return result
// }
//
// console.log(removeCharacters("hello world", ["l", "d"]));
// console.log(removeCharacters(45678, ["5", "8"]));
// console.log(removeCharacters(45678, [6, 8]));
//
//
// //6.2
// function average(arr) {
//     let result = 0;
//     let amount = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number" && !isNaN(arr[i])) {
//             result += arr[i];
//             amount += 1
//         }
//     }
//
//     return amount !== 0 ? result / amount : "No numbers found in the array";
// }
//
// console.log(average([10, 20, true, 30, "Anna", 40, 10, false]));


//6.3
// function removeElement(array, item) {
//
//     // Чи є переданий масив справді масивом:
//     if (!Array.isArray(array)) { //true / false
//         console.log("Please provide a valid array");
//         return;
//     }
//
//     //Чи не порожній масив:
//     if (array.length === 0) {
//         console.log("The array is empty");
//         return;
//     }
//
//     //Чи передано елемент для видалення:
//     if (item === undefined) {
//         console.log("Please provide an item to remove");
//         return;
//     }
//
//     const index = array.indexOf(item);
//
//     index !== -1 ?  array.splice(index, 1) : console.log(`The element ${item} is already missing from the list`);
// }
//
// const array = [1, 3, 4, 6, 2, 5, 7];
//
// removeElement(array, 4); // Видаляє 4
// removeElement(array, 10); // "The element 10 is already missing from the list"
// removeElement([], 4); // "The array is empty"
// removeElement("hello", 4); // "Please provide a valid array"
// removeElement(array); // "Please provide an item to remove"
//
// console.log(array);


//-------------------------------------------------------------------------

// Higher-order function (Функція вищого порядку) - це функція, яка може приймати інші функції як аргументи або повертати функції як результат.
///Ці функції часто використовуються в JS для роботи з асинхронним кодом

//Проста функція — це функція, яка виконує операції з даними і не взаємодіє з іншими функціями

//-------------------------------------------------------------------------

//Функція, яку ми передаємо як аргумент називається callback функція:

// higher-order function
// function doOperation(arg1, arg2, callback) { // (1, 4, add)
//     return callback(arg1, arg2); //викликаємо add function з двома аргументами - add(1, 4)
// }

// function add(x, y) { // add(1, 4)
//     return x + y; //5
// }
//
// function multiply(x, y) { // multiply(5, 4)
//     return x * y; //20
// }
//
// console.log(doOperation(6, 5, add)); //9
// console.log(doOperation(6, 5, multiply)); //20

//------------------------------------------------------

//                     fn - це callback
// function applyFunction(fn, value) { //Застосувати функцію
//     return fn(value); // викликаємо функцію double з аргументом - double(5)
// }
//
// function double(x) {
//     return x * 2;
// }
//
// console.log(applyFunction(double, 5)); // 10


//-------------------------------------------------------------------------

//Closure (замикання)

//Замикання дозволяє внутрішнім функціям мати доступ до змінних зовнішніх функцій, навіть після того, як зовнішня функція завершила виконання.

// function outer() {  //outer — це зовнішня функція, в якій є змінна counter
//     let counter = 0;
//
//     return function inner() { // inner — це внутрішня функція, яка звертається до змінної counter і збільшує її на 1 щоразу, коли викликається
//         counter++;
//         console.log(counter);
//     };
// }
//
// const increment = outer(); // Викликаємо outer, результатом outer (її return) є функція inner, тобто const increment = inner
// increment(); // 1 //increment() це inner() - виклик функції
// increment(); // 2
// increment(); // 3

// Коли ми викликаємо outer(), вона повертає (return) функцію inner.
// Зовнішня функція (outer) завершила своє виконання, але внутрішня функція (inner) все ще має доступ до змінної counter.
// Тобто внутрішня функція «замкнула» змінну counter і може використовувати її навіть після завершення виконання зовнішньої функції.

//Функція inner має доступ до змінної counter і може її змінювати, але зовнішній код не має прямого доступу до цієї змінної.

//Функція inner має доступ до змінної counter, тому що вона зберігає посилання на лексичне оточення функції outer, де ця змінна була визначена.

//Коли функція створюється, вона «запам’ятовує» своє лексичне оточення.
//Це дозволяє внутрішній функції отримувати доступ до змінних зовнішньої функції, навіть якщо ця зовнішня функція вже завершила роботу.


//-------------------------------------------------------------------------

//Lexical Environment (Лексичне оточення)

//Лексичне оточення створюється під час оголошення функції — тобто коли функція записується у коді, вона вже "запам’ятовує", які змінні, функції та аргументи були доступні на той момент.
//
//Лексичне оточення функції включає в себе:
// 1. Local variables - локальні змінні функції (оголошені через let, const, var всередині цієї функції).
// 2. Function arguments - аргументи функції
// 3. inner functions - вкладені функції (функції, оголошені всередині функції)
// 4. Reference to the outer lexical environment - Посилання на зовнішні лексичні оточення — тобто на змінні, які були доступні в момент створення цієї функції. (не тільки в функції вищого порядку, але й в global scope).

//
// let globalVar = "I am global"; // Оголошення та ініціалізація змінної globalVar
//
// function outer(outerArg) {  // Оголошення функції outer з параметром outerArg
//     let outerVar = "I am outer";  // Оголошення та ініціалізація змінної outerVar
//
//     function inner(innerArg) {  // Оголошення функції inner з параметром innerArg
//         let innerVar = "I am inner";  // Оголошення та ініціалізація змінної innerVar
//
//         // Усі ці звернення до змінних та аргументів всередині функції inner працюють, оскільки inner має до них доступ
//         console.log(globalVar);  // Звернення до змінної з глобального лексичного оточення
//         console.log(outerVar);   // Звернення до змінної зовнішньої функції (outer)
//         console.log(outerArg);   // Звернення до аргументу зовнішньої функції (outer)
//         console.log(innerVar);   // Звернення до своєї локальної змінної (inner)
//         console.log(innerArg);   // Звернення до аргументу своєї функції (inner)
//     }
//
//     inner("I am innerArg");  // Виклик функції inner з передачею значення аргументу "I am innerArg"
// }
//
// outer("I am outerArg");  // Виклик функції outer з передачею значення аргументу "I am outerArg"


// Функція inner має доступ до globalVar через лексичне оточення, тому що:
//
//    1. На момент створення функції outer змінна globalVar вже існувала в глобальному просторі.
//    2. Функція inner створюється всередині outer — тому її лексичне оточення включає:
//        - Локальні змінні inner
//        - Аргументи inner
//        - Посилання на лексичне оточення функції outer (де є outerVar і outerArg)
//        - Посилання на глобальне лексичне оточення, де зберігається globalVar (НЕ ЧЕРЕЗ ФУНКЦІЮ outer!)
//        Функція inner має доступ до глобальної змінної напряму, тому що її лексичне оточення включає посилання на всю ієрархію лексичних оточень (inner → outer → global)

//Ланцюжок лексичних оточень виглядає так:   inner -> outer -> global

// Тобто коли виконується цей рядок:
// console.log(globalVar);

//JavaScript шукає змінну наступним чином:
//
// 1. Спочатку в лексичному оточенні inner — чи є там globalVar? Ні.
// 2. Далі шукає в лексичному оточенні outer — є там globalVar? Теж ні.
// 4. Нарешті, йде до глобального лексичного оточення — і ось там знаходить globalVar.
// Тобто це як сходи, по яких JavaScript піднімається вгору, поки не знайде змінну, або поки не дійде до самого верху (глобального контексту). Якщо не знаходить змінну — видає помилку ReferenceError.

//ВАЖЛИВО ПАМ'ЯТАТИ:
// Лексичне оточення визначається на момент створення функції, а не під час виклику.
// Тобто inner "запам’ятала", яке було оточення під час створення — включно з глобальним контекстом, де вже була globalVar.
// Якщо пізніше змінити globalVar, inner побачить вже оновлене значення, бо вона тримає посилання на змінну, а не копію її значення.


//-------------------------------------------------------------------------

// function outer() {
//     function inner() {
//         console.log("hello!")
//     }
//     return inner; // повертає посилання на функцію inner, а не результат функції inner, бо ми не викликаємо inner - inner()
// }
//
// let myFunc = outer(); //myFunc = inner (оголошуємо змінну й викликаємо функцію outer, результат outer - це посилання на функцію inner. (функція inner ще жодного разу не була викликана)).
// myFunc(); //hello! // myFunc() = inner()
//
// outer(); //Якщо ми викличемо outer(), то нічого не побачимо в консолі, бо outer повертає лише посилання на функцію inner, але не викликає її


// ✔ return inner означає: "outer повертає inner", а не себе
// ✔ myFunc містить не outer, а саме результат його return, тобто inner


//-------------------------------------------------------------------------
//
// function outer() {
//     let message = "Hello!"
//
//     function inner() {
//         console.log(message);
//     }
//     return inner;
// }
// let myFunc = outer();
//
// myFunc();


// Факт створення замикання — це автоматичний процес, коли функція оголошується всередині іншої функції.
// Факт використання змінних зовнішньої функції — це вже наслідок, але не обов’язкова умова для самого замикання.

//Ідентифікатор — це ім'я, яке дається змінній чи функції. Наприклад, в let x = 5;, ідентифікатором є x.


//-------------------------------------------------------------------------

//Counter

// function makeCounter() {
//     let count = 0;
//
//     return function () { // замість function inner(){} return inner
//         count++;
//         console.log(count);
//     }
// }
//
// let usersCounter = makeCounter();
// usersCounter(); //1
// usersCounter(); //2
// usersCounter(); //3
// let usersCounter2 = makeCounter();
// usersCounter2(); //1
// usersCounter2(); //2
// usersCounter2(); //3

// 1. let usersCounter = makeCounter(); — створюється перший лічильник з власною змінною count, яка починається з 0
// 2. usersCounter() — викликається тричі, і кожен раз збільшується count для першого лічильника
// 3. let usersCounter2 = makeCounter(); — створюється другий лічильник з окремою змінною count
// 4. usersCounter2() — викликається тричі, і кожен раз збільшується count для другого лічильника

// Змінні count для usersCounter та usersCounter2 є незалежними, оскільки кожен виклик makeCounter() створює
// нове лексичне оточення, і кожен лічильник має своє окреме посилання на різні змінні count (let count = 0;), кожна з яких зберігає
// свій стан через замикання в окремих лексичних оточеннях.

// Змінна count стає приватною для кожного з лічильників, створених за допомогою виклику функції makeCounter().
// (Кожен виклик makeCounter() створює нове лексичне оточення, де змінна count є локальною змінною цього оточення)


// Якщо у нас є функція, яка повертається з іншої функції, при цьому внутрішня функція використовує значення
// ідентифікатора, який був створений всередині головної функції, то цей ідентифікатор (його локальна па'ять) не
// видаляється, тому що JS запам'ятовує що внутрішня функція використовує це значення


//-------------------------------------------------------------------------

//Це теж замикання функції, але з аргументом

// function makeCounter(count) {
//     return function () { // замість function inner(){} return inner
//         count++;
//         console.log(count);
//     }
// }
//
// let usersCounter = makeCounter(5);
// usersCounter(); //1
// usersCounter(); //2
// usersCounter(); //3
// let usersCounter2 = makeCounter(8);
// usersCounter2(); //1
// usersCounter2(); //2
// usersCounter2(); //3


//Масиви та об'єкти - це reference type (тип даних за посиланням)


//-------------------------------------------------------------------------

//У цьому випадку змінна x є глобальною (вона оголошена за межами функції).
// Це означає, що вона зберігає своє значення між викликами функції.

//Кожен виклик myFunk() змінює значення x. Після кожного виклику значення x зберігається,
// тому наступний виклик функції бере поточне значення x й збільшує його.

// let x = 0;
// function myFunc () {
//     x++
//     console.log(x)
// }
// myFunc(); //1
// myFunc(); //2
// myFunc(); //3
//
// //-------------------------------------------------------------------------
//
//
// function myFunction () {
//     let y = 0;
//     y++
//     console.log(y)
// }
// myFunction(); //1
// myFunction(); //1
// myFunction(); //1


// У цьому випадку змінна Y ініціалізується заново щоразу при виклику функції myFunction().
//
// При кожному виклику функції myFunction - myFunction()
//
//    1. Оголошується нова змінна Y всередині myFunction() і їй присвоюється значення 0
//    2. Значення y збільшується на 1 (y++).
//    3. Виводиться Y, що дає 1
//    4. Функція завершується, і змінна Y видаляється з пам’яті

// ❗ Значення Y не зберігається між змінними тому що Y є локальною змінною в myFunction().
// Кожен виклик функції створює нову змінну Y, яка існує тільки під час виконання функції, а потім зникає

//-------------------------------------------------------------------------

// ECMAScript (скорочено ES) — це стандарт, на основі якого створено мову JavaScript.
// Тобто ECMAScript — це "правила та інструкції", що визначають, як має працювати мова програмування, а JavaScript — це його реалізація.

//ECMAScript — European Computer Manufacturers Association Script

//-------------------------------------------------------------------------


// Замикання - це поведінка JS, при якому у нас є функція, яка повертає іншу функцію і ця внутрішня використовує якесь значення,
// вона його запам'ятовує й з ним пов'язана


//-------------------------------------------------------------------------

//Карування (currying)

// Каррінг (currying) — це техніка функціонального програмування, коли функція з кількома аргументами (1st function)
// трансформується у послідовність функцій (2nd function) , кожна з яких приймає один аргумент

//1st function:

// function add (a, b, c) {
//     return a + b + c;
// }
//
// console.log(add(4, 5, 6)); //15

// ↓ ↓ ↓

//2nd function:

// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }
//
// console.log(add(4)(5)(6)); //  три послідовні виклики функцій


//-------------------------------------------------------------------------

//Arguments (по дефолту у функцій є псевдомасив (прихований масив аргументів))

// У JavaScript усередині звичайних функцій (не стрілкових!) є спеціальний об'єкт arguments. Це псевдомасив, який містить
// усі аргументи, передані до функції. Він виглядає схожим на масив, але насправді ним не є — у нього немає методів масиву


// Об'єкт arguments не є справжнім масивом — це псевдомасив. Це означає, що він має властивість .length та індекси (як масив),
// але не успадковує методи масивів із Array.prototype.
//
// 1. Доступ до аргументів: через arguments[index].
// 2. Довжина: через arguments.length.
// 3. Не є справжнім масивом: немає методів масивів.

//Архітектурно в JavaScript у кожній функції створеній через function declaration (тобто окрім стрілкових) є додатковий параметр,
//який називається arguments, цей параметр спеціально створений для того щоб містити і запам'ятовувати всі аргументи. які ми передаємо в функції

// function multiply() {
//     console.log(arguments);
// }
// console.log(multiply(2, 4, 6, 8, 1, 2)); //отримуємо перелік усіх аргументів та їх індексів  // 0: 2   1: 4   2: 6   3: 8   4: 1   5: 2    length: 6

// function multiply() {
//     console.log(arguments[3]); //8
// }
// console.log(multiply(2, 4, 6, 8, 1, 2));


//Ми все одно можемо керувати псевдомасивом, присвоївши його значення новому масиву:
// function multiply() {
//     let arr = []
//     for (let i = 0; i < arguments.length; i++) {
//         arr.push(arguments[i]);
//     }
//     console.log(arr.join(""));
// }
// multiply(2, 4, 6, 8, 1, 2);

//Коли в нас з'явиться rest оператор (оператор залишкових параметрів) то це можна буде скоротити до:
// function multiply(...arg) {
//     console.log(arg);
// }
// multiply(2, 4, 6, 8, 1, 2);


//Задача на масиву лише з чисел:
// function average() {
//     let arr = []
//     for (let i = 0; i < arguments.length; i++) {
//         if(typeof arguments[i] === "number" && !isNaN(arguments[i])) {
//             arr.push(arguments[i])
//         }
//
//     }
//     console.log(arr)
// }
// average(2, false, 4, 6, "Anna", 8, 1, 2);


//-------------------------------------------------------------------------

//⁉️IIFE (Immediately Invoked Function Expression) — це функціональний вираз, який викликається одразу після оголошення

// (function () {
//     console.log("This is IIFE");
// })();


//-------------------------------------------------------------------------

//ТРЕБА ВИКЛЮЧИТИ:     null (cancel)     NaN (text)    " " ((рядок з пробілами  —  +" " → 0)    "" (порожній рядок  —  +"" → 0)

// function askForNumber() {
//     let userInput = prompt("Enter a number greater than 100")?.trim(); // ВИКЛЮЧАЄМО " " - порожній рядок з пробілами
//     if (!userInput || isNaN(+userInput)) { //
//         console.log("Operation was canceled or invalid input.");
//         return;
//     }
//     userInput = +userInput;
//     if (userInput > 100) {
//         console.log(`Success! Your number ${userInput} is greater than 100.`);
//         return
//     }
//     for (let i = 1; i <= 9; i++) {
//         userInput = prompt("Please, try again: Enter a number greater than 100")?.trim();
//         if (!userInput || isNaN(+userInput)) {
//             console.log("Operation was canceled or invalid input.");
//             return
//         }
//
//         userInput = +userInput;
//
//         if (userInput > 100) {
//             console.log(`Success! Your number ${userInput} is greater than 100.`);
//             return
//         }
//     }
//
//     console.log(`You've reached the limit of attempts. Your last entered number is ${userInput}.`);
// }
//
// askForNumber();


//-------------------------------------------------------------------------

//Task 1: Guess the number

// function guessNumber(number) {
//     let attempts = 7;
//
//     while (attempts > 0) {
//         let userInput = prompt(`Guess the number from 1 to 50\n\nYou have ${attempts} attempts left`);
//
//         if (userInput === null) {
//             alert("Operation was canceled\n\nRestart the page to try again");
//             return;
//         }
//
//         userInput = userInput.trim();
//
//         if (userInput === "" || isNaN(+userInput)) {
//             alert("Invalid input. Please enter a number.");
//             continue;
//         }
//
//         userInput = +userInput;
//
//         if (userInput === number) {
//             alert(`You guessed it! It's the number ${number}`);
//             return;
//         }
//
//         attempts--;
//
//         if (userInput < number) {
//             alert(`Wrong! The number is greater than ${userInput}`);
//         } else {
//             alert(`Wrong! The number is lower than ${userInput}`);
//         }
//     }
//
//     alert("Unfortunately, you ran out of attempts\n\nRestart the page to try again");
// }
//
// guessNumber(28);


//-------------------------------------------------------------------------

//Task 2: Number in range

// function askForNumberInRange(min, max) {
//     let attempts = 10;
//
//     while (attempts > 0) {
//         let userInput = prompt(`Enter a number between ${min} and ${max}\n\nYou have ${attempts} attempts left`)
//
//         if (userInput === null) {
//             alert("The operation was canceled. Restart the page to try again.");
//             return;
//         }
//
//         attempts--;
//
//         userInput = userInput.trim()
//
//         if (userInput === "" || isNaN(+userInput)) {
//             alert("Invalid input. Please enter a number.");
//             continue;
//         }
//
//         userInput = +userInput
//
//         if (min <= userInput && userInput <= max) {
//             alert(`Success! The number ${userInput} is in the range between ${min} and ${max}`)
//             return;
//         } else {
//             alert(`The number ${userInput} is out of the range\n\nPlease try again`)
//         }
//     }
//
//     alert("You have reached the limit of attempts\n\nRestart the page to try again");
// }
//
// askForNumberInRange(10, 30);


//-------------------------------------------------------------------------









