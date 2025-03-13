//Function expression (Функціональний вираз) - це спосіб створення функції, присвоюючи її змінній

// Вона не піднімається (hoisting), тому її можна використовувати тільки після оголошення.
// Часто використовується для анонімних функцій чи колбеків.

// let greet = function(name) { //можу бути анонімною функцією
//     console.log(`Hi, ${name}`);
// }
//
// greet("Anna");


//-----------------------------------------------------------------

//Arrow Functions (Стрілкові функції) - це різновид Function Expression, який з’явився в ES6 (ECMAScript — стандарт,
//на якому базується JavaScript) у 2015 році, разом з let і const.

//Ключові відмінності від function declaration:
//   1. Не запам'ятовують контекст виклику (не мають власної this)
//   2. Не мають псевдомасиву arguments (arguments – це об'єкт, схожий на масив (array-like object))
//   3. No hoisting (не піднімаються)
//   4. Не можуть бути використані як конструктори (?)

//--------------------------

//Без параметрів
// let greet = () => console.log("Hello!");
// greet(); //Hello!

//--------------------------

//Один параметр (без дужок)
// let square = x => x * x;
// console.log(square(4)); //16

//--------------------------

//Багато параметрів (обов’язково в дужках)
// let multiply = (a,b) => a * b;
// console.log(multiply(5, 3)); //15

//--------------------------

//Багаторядковий код (тоді потрібні {} і return)
// let divide = (a, b) => {
//     if (b === 0) {
//         return "Error: division by zero";
//     }
//     return a / b;
// };
// console.log(divide(10, 2)); // 5
// console.log(divide(10, 0)); // "Error: division by zero"

//--------------------------


// Особливості стрілкових функцій:

// 1. Коротший синтаксис (стрілкові функції - це просто легковісні аналоги function declaration)
// 2. Автоматичне повернення значення (Якщо тіло функції складається з одного виразу, return можна не писати).
// 3. Немає власного this (Вони використовують this із батьківського контексту).


//-----------------------------------------------------------------

//console.log(add(5, 4)); //ReferenceError: Cannot access 'add' before initialization (no hoisting)

// let add = (first, second) => {
//     return first + second;
// }
// console.log(add(6, 4));

//Коротший запис:
// let add = (first, second) => first + second; // (arguments) => return
// console.log(add(6, 4));


//-----------------------------------------------------------------

// Вбудовані в масив функції:


//FILTER
//Метод filter() приймає функцію, яка перевіряє кожен елемент масиву, якщо функція повертає true, елемент додається (push) до нового масиву.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// function arrFilter(value) {
//     return value % 2 === 0
// }
// console.log("Filtered with function declaration: ", numbers.filter(arrFilter)); //виконання фільтру за допомогою function declaration arrFilter
//
// //       ↓↓↓ замінюємо function declaration (arrFilter) на function expression ↓↓↓
//
// const filteredArr = numbers.filter(function(value) {
//     return value % 2 === 0
// });
// console.log("Filtered with function expression:", filteredArr);
//
// //       ↓↓↓ замінюємо function declaration (arrFilter) на function expression ↓↓↓
//
// const filteredArr2 = numbers.filter(value => value % 2 === 0);
// console.log("Filtered with arrow function:", filteredArr2);



//MAP
//Не змінює вихідний масив — створює новий масив.
//Завжди повертає масив однакової довжини, що й вихідний.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.map((number) => number * 2));   //[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]


//-----------------------------------------------------------------

//OBJECTS
//Об'єкт — це структура даних, що дозволяє зберігати пари ключ: значення.

//❗️Масиви та об'єкти створюються через const ❗️

// const person = {
//     key: "value" // property
// };

//Полями об'єкта можуть бути як примітивні типи даних (string, number, boolean, null, undefined, symbol, bigint),
//так і складні (масиви, об'єкти, функції).

// const user = {
//     age: 23,
//     name: "Anna",
//     isAdmin: true,
//     userData: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// };

// console.log(user.name); //Anna
// console.log(user.userData); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(user);
//
// user.name = "Jane Doe"; //Зміна значення
// console.log(user);
//
// user.subscription = true; // add a new property (додавання поля)
// console.log(user);


//-----------------------------------------------------------------

//REFERENCE TYPE (тип даних за посиланням)
//це тип даних у JavaScript, де значення зберігається не безпосередньо, а через посилання на область пам’яті.

//Копіювання reference type:
// const user = { //user - це не ім'я, а посилання об'єкту
//     age: 23,
//     name: "Anna",
//     isAdmin: true,
//     userData: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// };
//
// const userCopy = user; //Ми копіюємо не блок пам'яті в якій зберігається об'єкт user, а посилання на цей блок пам'яті
// userCopy.age = 18; //Тож зміни які ми вносимо тут також иідображаються в user
//
// console.log("Original:", user);
// console.log("Copy:", userCopy);


// const obj1 = {x: 10}; //obj1 та obj2 - це посилання на 2 різні блоки пам'яті, тож вони не однакові
// const obj2 = {x: 10};
// const obj3 = obj1; // obj3 та obj1 - це посилання на один й той самий блок в пам'яті
// console.log(obj1 === obj2); //false
// console.log(obj1 === obj3); //true


//-----------------------------------------------------------------

// КОНТЕКСТ (this) (стосується об'єктів і функцій)
// У JavaScript ключове слово this вказує на контекст, в якому була викликана функція (саме викликана, а не створена).

// Якщо функція викликається як метод об'єкта (через посилання на об'єкт та крапку(dot натацію), то this буде вказувати на цей об'єкт
// Отже, коли ви викликаєте user.showName(), функція showName має доступ до всіх властивостей (полей) об'єкта user через this.

// Dot notation (dot нотація) - це виклик через крапку


//--------------------------

//❗️Кожна функція в JS виконується в рамках якогось об'єкту ❗️

// 1. Контекст в глобальній області видимості
// Коли ти викликаєш функцію в global scope (не в об'єкті), контекст за замовчуванням — це глобальний об'єкт (в браузерах це window).

// window — це глобальний об'єкт в рамках якого запускається наш JavaScript і будь які функції в JS запускаються в рамках
// window, або  врамках об'єктів, які ми створюємо. І ось ці об'єкти в рамках яких викликається функція і є контекст виконання.
// Тобто this це просто вказівних об'єкту в якому викликається функція

// function showContext() {
//     console.log(this)
// }
// showContext(); //Window {...}

// 2. Контекст всередині об'єкта
// Якщо функція є методом об'єкта, то контекст вказує на сам об'єкт.


//--------------------------

// function showContext() {
//     console.log(this)
// }
// showContext(); //Window {...} - бо функція showContext була ВИКЛИКАНА в рамках глобального об'єкту window
//
//
// const user = {
//     age: 23,
//     name: "Anna",
//     isAdmin: true,
//     userData: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     showName: showContext //посилання на функцію
// };
//
// user.showName(); //тіло об'єкту user - бо функція була викликана через dot notation,тобто в рамках об'єкту user


//-----------------------------------------------------------------

//ВТРАТА КОНТЕКСТУ

//Example 1: Виклик функції як звичайної функції (не як метод)
// const person = {
//     name: "Kate",
//     greet: function() {
//         console.log(this.name); // this посилається на об'єкт person
//     }
// };
//
// const greetFunc = person.greet; // копіюємо посилання на функцію — тепер greetFunc це просто функція, яка вже не прив'язана до об'єкта person.
// // This тепер вказує на глобальний контекст
// // greetFunc(); // викликаємо функцію - undefined, оскільки this тепер вказує на глобальний об'єкт (ФУНКЦІЯ ВИКЛИКАЄТЬСЯ НЕ ЯК МЕТОД)
//
// //Перевірка глобального контексту:
// window.name = "Jane";
//
// greetFunc(); //Jane

//--------------------------

//Example 2: Arrow functions
// //this в стрілковій функції не змінюється під час виклику і вказує на глобальний контекст, а не на об'єкт person.
// const person = {
//     name: "Kate",
//     greet: () => console.log(this.name) // `this` вказує на глобальний об'єкт
// };
//
// person.greet(); // Виведе undefined, тому що стрілкова функція не змінює контекст


//-----------------------------------------------------------------

// const user = {
//     age: 23,
//     name: 'Anna',
//     isAdmin: true,
//     userData: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     showName: function(){
//         console.log(`Hello! My name is ${this.name}. I'm ${this.age} years old.`);
//
//     },
//     showAlsoName: () => console.log(`Hello! My name is ${this.name}. I'm ${this.age} years old.`)
// }
// user.showName() //Hello! My name is Anna. I'm 23 years old.
// user.showAlsoName(); //Hello! My name is . I'm undefined years old.

// Стрілкові функції не мають власного this. Вони успадковують this від зовнішньої функції або контексту, де були створені.

// Тобто стрілкова функція ігнорує об'єкт, у якому вона записана, і не прив'язує this до цього об'єкта. Вона дивиться вище,
// на контекст, де цей об'єкт був створений.

//   1. Стрілкова функція не має власного this
//   2. Вона шукає this в контексті створення об'єкта user
//   3. Об'єкт user створений у глобальному контексті
//   4. this у глобальному контексті — це window у браузері (або global у Node.js)
//   5. window.showAlsoName — немає такої змінної, тому undefined


//-----------------------------------------------------------------

//ПІДМІНА КОНТЕКСТУ

//По суті це виклик певної функції в рамках іншого об'єкту

// function showContext () {
//     console.log(this);
// }
//
//  const user = {
//      age: 23,
//      name: 'Anna',
//      isAdmin: true,
//      userData: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//      showName: showContext
//  }

// showContext(); //window
// user.showName(); // object user


//CALL()  BIND()  APPLY()
// call, bind, apply - це методи в JS, які дозволяють змінювати контекст виклику функції (значення this усередині функції).

//Вони або викликають нашу функцію на якомусь з об'єктів, або прив'язують функцію до якогось об'єкта.

//--------------------------

//call() - викликає функцію одразу на різних об'єктах, передаючи їй конкретний контекст (this) та аргументи
//Підмінює контекст виклику функції
//
// const user2 = {}; //
// showContext.call(user2); //object user2
//
// showContext.call(user); //object user
//
// const userData = {
//     city: "Kharkiv",
//     address: "Address"
// }
// showContext.call(userData); //object userData
//
// //--------------------------
//
// //apply() - подібний до call(), але аргументи передаються масивом
// showContext.apply(user); //object user
//
// //--------------------------
//
// //bind() - не викликає функцію одразу, а створює нову функцію з прив'язаним контекстом
// // Прив'язую нашу функцію до якогось конкретноо об'єкта
//
// const boundedFunction = showContext.bind(userData);
// boundedFunction(); //object userData


//❗️В дійсності КОНТЕКСТ НЕ МОЖЕ БУТИ ВТРАЧЕНИЙ АБО ПІДМІНЕНИЙ, ми просто викликаємо функцію в рамках різних об'єктів ❗️


//-----------------------------------------------------------------

//КОПІЮВАННЯ ОБ'ЄКТІВ

// const user = {
//     age: 23,
//     name: 'John',
//     email: 'john@example.com',
//     data: {
//         city: 'New York',
//         country: 'United States'
//     }
// }
//
// console.log(user)
//
// //Для того щоб скопіювати об'єкт можна використати декілька методів:
//
// //  1. Викликати з конструктора об'єктів функцію assign - ПОВЕРХНЕВЕ КОПІЮВАННЯ
//
// //Через глобальний конструктор об'єктів (Object) викликаємо функцію assign, в яку треба передати target (об'єкт) і той
// //з якого ми хочемо скопіювати) - Тобто на основі пустого об'єкту я хочу створити я хочу створити копію об'єкту user.
//
// const userCopy = Object.assign({}, user);
//
// user.age = 18;
//
// console.log(userCopy);


//-----------------------------------------------------------------

//ЛАНЦЮЖКОВІ ВИКЛИКИ

//Ланцюжкові виклики (method chaining) — це техніка в JavaScript, в якій кожен метод повертає сам об'єкт, що дозволяє викликати методи підряд без проміжних змінних

//❗Щоб ланцюжкові виклики працювали, кожен метод повинен повертати сам об'єкт через return this ❗


// const ladder = {
//     step: 0, // Початкове значення кроку
//     up: function () {  //метод up()
//         this.step++;
//         return this; //повертаємо сам об'єкт - ladder
//         //після першого виклику методу up() наш ланцюжковий виклик виглядає - ladder.up().down().showStep();
//         //після другого виклику методу up() - ladder.down().showStep();
//     },
//     down: function () {  //метод down()
//         this.step--;
//         return this; ////повертаємо сам об'єкт - ladder
//         //після першого виклику методу up() ланцюжковий виклик виглядає - ladder.showStep();
//     },
//     showStep: function () {  //метод showStep()
//         console.log(this.step);
//         return this; ////повертаємо сам об'єкт - ladder
//     }
// };
//
//
// ladder.up().up().down().showStep();  //ladder.showStep() - останній виклик методу


//Метод — це функція, яка є властивістю об'єкта.

//Викликаються вони через крапку:
//user.setName('Alice'); // метод   (об'єкт.метод(аргумент)  Властивість — це пара: ключ та значення.

//Ключ — це ім'я властивості об'єкта. У випадку методу це ім'я функції

// const person = {
//     name: 'Alice',  // властивість
//     age: 30,        // властивість
//     greet() {       // метод
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };
//
// person.greet();  // Викликаємо метод greet через


//-----------------------------------------------------------------

//Task 1: Лічильник
// const counter = {
//     count: 0,
//     increment: function () {
//         this.count++
//         return this
//     },
//     decrement: function () {
//         this.count--
//         return this
//     },
//     reset: function () {
//         this.count = 0
//         return this
//     },
//     showValue: function () {
//         console.log(this.count)
//         return this
//     }
// }
//
// counter.increment().increment().decrement().showValue(); //1
// counter.reset().increment().showValue(); //1











