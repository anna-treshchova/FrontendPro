// ПІДМІНА КОНТЕКСТУ
//
// По суті це виклик певної функції в рамках іншого об'єкта
//
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
//
// showContext(); //window
// user.showName(); // object user
//
//
// CALL()  BIND()  APPLY()
// call, bind, apply - це методи в JS, які дозволяють змінювати контекст виклику функції (значення this усередині функції).
//
// Вони або викликають нашу функцію на якомусь з об'єктів, або прив'язують функцію до якогось об'єкта.
//
// --------------------------
//
// call() - викликає функцію одразу на різних об'єктах, передаючи їй конкретний контекст (this) та аргументи
// (підмінює контекст виклику функції)
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

//--------------------------

//apply() - подібний до call(), але аргументи передаються масивом
// showContext.apply(user); //object user
//
//--------------------------
//
//bind() - не викликає функцію одразу, а створює нову функцію з прив'язаним контекстом
//Прив'язую нашу функцію до якогось конкретного об'єкта
//
// const boundedFunction = showContext.bind(userData);
// boundedFunction(); //object userData    (boundedFunction - зв'язана функція)
//
//
// ❗️В дійсності КОНТЕКСТ НЕ МОЖЕ БУТИ ВТРАЧЕНИЙ АБО ПІДМІНЕНИЙ, ми просто викликаємо функцію в рамках різних об'єктів ❗️
//

//-----------------------------------------------------------------


//Кожна функція маж свій контекст виконання й загалом цей контекст - це об'єкт.
// Отже функції завжди виконуються в рамках якогось об'єкту. Або глобального об'єкту, який залежить від середовища
// виконання нашого джаваскріпта (в браузері по стандарту все в JS крутиться в об'єкті window), або об'єкту створеного нами.

//Об'єкт window - це уявлення браузера про нашу вкладку, тобто там зберігаються всі допоміжні функції, весь допоміжний API, html.


//-----------------------------------------------------------------

//CALL APPLY

// function greet() {
//     console.log(`Hello, ${this.name}`)
// }
//
// const user = {
//     name: 'Alex',
//     age: 25
// }
//
// const newUser = {
//     name: 'John',
//     age: 18,
//     city: "New York"
// }
//
// greet.call(user); //Hello, Alex
// greet.call(newUser); //Hello, John
//
// greet.apply(user); //Hello, Alex
// greet.apply(newUser); //Hello, John


//В методах call і apply також можна передавати аргументи

// function greet(greeting, punctuation) {
//     console.log(`${greeting}, ${this.name}${punctuation}`)
// }
//
// const user = {
//     name: 'Alex',
//     age: 25
// }
//
// const newUser = {
//     name: 'John',
//     age: 18,
//     city: "New York"
// }
//
// //        object   arg    arg
// greet.call(user, "Hello", "!"); //Hello, Alex!
// greet.call(newUser, "Hi", "."); //Hi, John.
//
// greet.apply(user, ["Hello", "!"]); //Hello, Alex!
// greet.apply(newUser, ["Hi", "."]); //Hi, John.

//❗Основна відмінність call і apply: У call аргументи передаються через кому, а у apply масивом.❗


// --------------------------

//BIND

//bind() виконує три основні кроки:
//
//   1. Створює нову функцію (копію оригінальної функції).
//   2. Прив’язує this у цій новій функції до переданого об’єкта.
//   3. Повертає нову функцію, яку ми можемо зберегти у змінну, щоб викликати пізніше

// const boundedGreet = greet.bind(user, "Hello","!");
// boundedGreet();


//----------------------------------------------------------------------------------------------------------------------


//CONSTRUCTOR FUNCTIONS (функції-конструктори)

//Функції-конструктори — це спеціальні функції, які використовуються для створення однотипних об'єктів з однаковою
//структурою, але різними даними.

//Структура об'єкта (які в нього є поля та методи) визначається всередині конструктора, а дані (значення цих полів)
//передаються через аргументи під час виклику через new.

//--------------------------

//ПРИКЛАДИ:

//1. Користувачі в системі (веб-застосунок із реєстрацією користувачів)

//За допомогою функції-конструктора ми легко можемо створювати скільки завгодно користувачів, код для створення об'єктів не дублюється,
//у кожного користувача свої унікальні дані, але структура об'єкта однакова.

// function User(name, email) { //Оголошуємо функцію-конструктор, яка приймає два параметри
//     // Описуємо як має виклядати майбутній об'єкт який ми створимо
//     this.name = name; // Додаємо властивості до майбутнього об'єкта через this. Але об'єкта ще нема, бо ми не викликали функцію через new.
//     this.email = email;
//     this.sayHello = function () { //Додаємо метод (Метод — це просто функція, яка стає властивістю об'єкта) та також прив'язуємо його до майбутнього об'єкта
//         console.log(`Hello, my name is ${this.name}. You can contact me at ${this.email}.`);
//     }
// } // Поки це звичайна функція

// const user1 = new User ('Alice', 'alice@example.com'); //Викликаємо функцію через new
// const user2 = new User ('Anna', 'anna@example.com');

//  1. new User('Alice', 'alice@example.com') викликає функцію-конструктор через new.
//  2. Коли функція викликається через new, вона автоматично створює новий порожній об'єкт.
//  3. Тепер this всередині функції вказує на цей новий об'єкт.
//  4. this.name та this.email заповнюються значеннями, переданими в параметри.
//  5. В кінці виклику конструктора, новостворений об'єкт з усіма своїми властивостями і методами зберігається у змінній.
//
//  Зберігання новоствореного об'єкта у змінній необхідне, щоб мати можливість звертатися до цього об'єкта, використовувати
//  його властивості та методи після того, як об'єкт буде створений.

//Викликаємо функцію sayHello як метод об'єкта user1 та метод об'єкта user2
// user1.sayHello();  //Hello, my name is Alice. You can contact me at alice@example.com.
// user2.sayHello();  //Hello, my name is Anna. You can contact me at anna@example.com.
//user1 — це об'єкт, створений за допомогою конструктора User з параметрами 'Alice' і 'alice@example.com'


//--------------------------

//Конструктор - це спеціальна функція, яка використовується для створення об'єктів з однавковою структурою
//Вона дає нам можливість уникати дублювання оголошень одних й тих самих об'єктів

//Функції, які дозволяють нам будувати нові об'єкти за якимось шаблоном називаються функції-конструктори, вони використовуються з оператором new
//Оператор new створює новий пустий об'єкт й функція-конструктор виконується на цьому об'єкті


// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = function() {
//         console.log(`Hello, my name is ${this.name}.`);
//     }
// }
//
// const user1 = new User('John', "32"); //По суті це User.call({}), де {} - це пустий об'єкт, сворений через new
// const user2 = new User('Anna', "23");
//
// user1.sayHello(); //Hello, my name is John.
//
// console.log(user1); //User { name: 'John', age: '32' }
// console.log(user2); //User { name: 'Anna', age: '23' }
//Преставка User явно вказує на основі якої функції-конструктору був створений наш об'єкт, тобто User - це прототип нашого об'єкту


//Оператор new замінює нам:
// function createUser(name, age) {
//     let temp = {}
//     temp.name = name;
//     temp.age = age;
//
//     return temp;
// }
//
// const user1 = createUser("John", "22");
// console.log(user1); //{ name: 'John', age: '22' } - Прототипом цього об'єкту є об'єкт, а не функція конструктор


//----------------------------------------------------------------------------------------------------------------------

//ВБУДОВАНІ КОНСТРУКТОРИ (Built-in constructors)

//Вбудовані конструктори — це функції, які вже вбудовані в мову й дозволяють створювати стандартні об'єкти.
//Вони викликаються за допомогою ключового слова new і використовуються для створення об'єктів різних типів, таких як
//числа, рядки, масиви, об'єкти тощо..

//Але їх рідко використовують — замість них майже завжди пишуть літерали, бо це простіше й швидше.

//--------------------------

// 1. Object — створює об'єкт:

// const obj = new Object();
// obj.name = "Alice";
// obj.age = 32;
// console.log(obj); // { name: 'Alice', age: 32 }

//Рівнозначно:
// const obj = { name: "Alice"}; // літерал

//--------------------------

// 2. Array — створює масив:
// const arr = new Array(1, 2, 3);
// console.log(arr); // [1, 2, 3]

//Рівнозначно:
// const arr = [1, 2, 3]; // літерал

//--------------------------

// 3. String — створює ОБ'ЄКТ-РЯДОК:
// const str = new String("hello");
// console.log(str); // [String: "hello"]

//Рівнозначно:
// const str = "hello"; // літерал

//--------------------------

// 4. Number — створює ОБ'ЄКТ-ЧИСЛО:
// const num = new Number(42);
// console.log(num); //[Number: 42]

//Рівнозначно:
// const num = 42; // літерал

//--------------------------

// 4. Boolean — створює ОБ'ЄКТ-ЛОГІЧНЕ ЗНАЧЕННЯ:
// const bool = new Boolean(false;
// console.log(bool); // [Boolean: false]

//Рівнозначно:
// const bool = false; // літерал

//--------------------------


//В JavaScript є два типи рядків:

// 1. Примітивні рядки — це звичайні рядки, які ми пишемо в лапках:
// const str = "Hello";
// console.log(typeof str); // "string"
//
// // 2. Об'єкти-рядки — це рядки, створені через конструктор String:
// const strObj = new String("Hello");
// console.log(typeof strObj); //"object"
// console.log(strObj);

//String створює об'єкт, який "обгортає" рядок, щоб додати до нього додаткові можливості.


//❗Вбудований конструктор створює об'єкт, який "обгортає" примітивне значення (number, string, boolean), щоб додати до
// нього методи та властивості


//СКЛАДНІ ТИПИ ДАНИХ (REFERENCE TYPE):

//Object і Array — це теж вбудовані конструктори, але вони не обгортають примітиви, бо об'єкти та масиви уже є складними
//(reference) типами даних:

//String, Number, Boolean — створюють тимчасові об'єкти-обгортки для примітивів.
//Object, Array — одразу створюють повноцінні об'єкти (немає що "обгортати").


//❗Масив в JavaScript є об'єктом, але з особливими властивостями ❗
// Масиви є підтипом об'єкта і мають додаткові методи та властивості для роботи з елементами за індексами:

// У JavaScript, масиви — це спеціалізовані об'єкти, де:

//     1. Масиви мають індекси (як числові ключі), за допомогою яких можна звертатися до елементів.
//     2. Масиви мають додаткові методи для роботи з елементами (наприклад, push(), pop(), shift(), unshift() та інші).
//     3. Вони мають властивість length, яка визначає кількість елементів у масиві.


// ПРИМІТИВНІ ТИПИ ДАНИХ:
//
//     * String — обгортає рядок і додає методи, як-от toUpperCase().
//     * Number — обгортає число, дає доступ до методів, наприклад, toFixed().
//     * Boolean — обгортає true/false, додає методи, як-от valueOf().

// Це тимчасова "обгортка", яка створюється в момент доступу до методу або властивості примітива і зникає одразу після
// виконання цього методу:

// const str = "Hello";
// console.log(str.toUpperCase()); //HELLO

// 1. Рядок str — це примітив.
// 2. Коли викликається str.toUpperCase(), JavaScript:
//     - Створює тимчасовий об'єкт-обгортку String.
//     - Цей об'єкт отримує метод .toUpperCase().
// 3. Метод виконується й повертає новий рядок "HELLO".
// 4. Обгортка зникає, і str залишається примітивом.

//❗Методи об'єктів, масивів, рядків тощо працюють і для літералів, бо JavaScript під капотом тимчасово створює об'єкти для них ❗


//----------------------------------------------------------------------------------------------------------------------

//ЛІТЕРАЛИ

//Літерали в JavaScript — це значення, які безпосередньо записуються в коді, і не потребують додаткових операцій чи
//викликів для їх створення. Тобто, це значення, яке ми використовуємо, прямо вказуючи його у коді без допомоги функцій
//чи конструкцій.

// Простими словами, літерал — це просто значення, яке є частиною нашого коду.


//Приклади літералів у JavaScript:

//  1. Числовий літерал: Число, яке безпосередньо записано у коді:
//      let x = 42;  // 42 — це числовий літерал

//  2. Рядковий літерал: Рядок (текст), який записаний у лапках:
//      let name = "John";  // "John" — це рядковий літерал

//  3. Булевий літерал: Літерали для значень true або false:
//      let isActive = true;  // true — булевий літерал

//  4. Масивний літерал: Масив, створений без виклику конструктора:
//      let numbers = [1, 2, 3];  // [1, 2, 3] — масивний літерал

//  5. Об'єктний літерал: Об'єкт, визначений без допомоги класу або конструктора:
//      let person = { name: "Alice", age: 25 };  // { name: "Alice", age: 25 } — об'єктний літерал

//  6. Літерал null: Спеціальне значення, яке означає відсутність значення:
//      let nothing = null;  // null — це літерал

//  7. Літерал undefined: Значення, яке автоматично присвоюється змінній, коли їй не задано значення:
//      let notAssigned;  // значення змінної — undefined

//----------------------------------------------------------------------------------------------------------------------

//❗КОНСТРУКТОРИ ОБ'ЄКТІВ існували в JavaScript з самого початку, а ЛІТЕРАЛИ ОБ'ЄКТІВ стали доступні пізніше як ❗
//  спрощений спосіб створення об'єктів. Літерали стали набагато популярнішими через свою простоту та зручність.

//----------------------------------------------------------------------------------------------------------------------

// const newObj = new Object();
// console.log(newObj);
//
//
// const newArr = new Array(5); //пустий масив з 5 елементами

// const newArr = new Array(1, 2, 3, 4, 5);
// console.log(newArr); //масив [ 1, 2, 3, 4, 5 ]


// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = function () {
//         console.log(`Hello, my name i ${this.name}!`);
//     }
// }
//
// const user1 = new User("Alex", 45);
// const user2 = new User("Alice", 22);
//
// // user1.sayHello();
// // user2.sayHello();
//
// console.log(user1);
// console.log(user2);
//
// user1.data = {
//     city: "Kharkiv"
// }


//МЕТОДИ Object:

//--------------------------

// 1. Object.assign (використовується для копіювання об'єктів, АЛЕ ПОВЕРХНЕВОГО)

//Створюється реальна копія об'єкту user1 в пам'яті й тепер user1Copy посилається на новий об'єкт, а не на попередній
//const user1Copy = user1; не копія посилання на одне й те ж саме тіло об'єкта
//
// копіювати                            куди     звідки
// const user1Copy = Object.assign({}, user1); //target, sources
// console.log(user1Copy)


//Поверхневе копіювання (shallow copy):
//   * Примітиви (числа, рядки, булеві значення) копіюються "за значенням".
//   * Об'єкти, масиви, функції — "за посиланням", тобто обидві змінні вказують на той самий об'єкт у пам'яті.


//Example:
// const obj1 = {
//     name: "Anna",
//     age: 23,
//     address: {
//         city: "Lviv"
//     }
// };

//                                                target  sources
// const obj2 = Object.assign({}, obj1); //Створюється поверхнева копія obj1
//
// obj2.name = "Kate";
// //Коли ми змінюємо obj2.name, це не змінює name в obj1, бо assign може створювати незалежну копію примітивних властивостей
// obj2.address.city = "Kyiv";
// //Коли ми змінюємо obj2.address.city, це також змінює місто в obj1, бо обидва об'єкти вказують на один і той самий вкладений об'єкт
//
// console.log(obj1.name); //Anna - Примітивна властивість name ("Anna") скопіювалася за значенням — це незалежна копія
//
// console.log(obj1.address.city); //Kyiv - Об'єкт address копіюється за посиланням (а не створюється новий об'єкт)


//--------------------------

// 2. Object.keys (повертає масив ключів переданого об'єкту)
// const obj = {key: value, key: value}

// console.log(Object.keys(obj1)); //[ 'name', 'age', 'address' ]


//--------------------------

// 3. Object.values (повертає масив значень (value) переданого об'єкту)
// const obj = {key: value, key: value}

// console.log(Object.values(obj1)); //[ 'Anna', 23, { city: 'Kyiv' } ]


//--------------------------

// 4. Object.entries (повертає масив підмасивів, де кожен вкладений масив містить пару ключ-значення з об'єкта)

// console.log(Object.entries(obj1)); //[ [ 'name', 'Anna' ], [ 'age', 23 ], [ 'address', { city: 'Kyiv' } ] ]
//Головний масив має 3 елементи, кожен елемент - це вкладений масив, який містить два елементи (ключ та значення)


//--------------------------

// 5. Object.freeze (дозволяє зробити об'єкт незмінним, САМЕ ОБ'ЄКТ А НЕ ПОСИЛАННЯ НА НЬОГО)

//  * Не можна змінювати значення властивостей об'єкта
//  * Не можна додавати нові властивості
//  * Не можна видаляти існуючі властивості.

// Object.freeze(obj1) // Заморожуємо об'єкт
//
// obj1.name = "Emma"; //Не змінить властивість, бо об'єкт заморожено
// console.log(obj1.name); //Anna
//
// obj1.email = "emma@gmail.com"; //Не додасть нову властивість
// console.log(obj1.email); //undefined
//
// delete obj1.age; //Не видалить властивість
// console.log(obj1.age) //23
//
//
// //❗BUT, якщо властивості є об'єктами, їх можна змінювати, оскільки Object.freeze() робить тільки поверхневе заморожування
// // (не рекурсивне).
//
// Object.freeze(obj1) // Заморожуємо об'єкт
//
// obj1.address.city = "Chicago"; //Зміна можлива, оскільки address — це об'єкт, і він не заморожений
// console.log(obj1.address.city); //Chicago


//----------------------------------------------------------------------------------------------------------------------

//SPREAD and REST OPERATORS (...)

//Використовуються для запакування або розпакування об'єктів або масивів (вони були додані в стандарті EC6 в 2015 році)
//spread оператор - розпаковує, rest - запаковує.


//---------------------------------------------------------

//SPREAD operator (...)

//Використовується для розкладу (розпакування) елементів масиву або властивостей об'єкта в інші структури даних,
//такі як масиви чи об'єкти. Він дозволяє легко створювати копії або об'єднувати масиви та об'єкти.

//const arr = [1, 2, 3, 4];
//console.log(...arr); //1 2 3 4  (використовуємо spread опуратор для розпакування елементів масиву arr і виведення їх в консоль)

//Коли ми пишемо console.log(...arr), spread оператор розпаковує цей масив в окремі значення.
//Тобто, ...arr перетворює [1, 2, 3, 4] на аргументи для console.log, те ж саме якщо б ми написали:
// console.log(1, 2, 3, 4); //1 2 3 4


//---------------------------------------------------------

//КОПІЮВАННЯ МАСИВІВ:

// * Копіювання одного масиву:
//const arrCopy = [...arr]; //spread operator розпаковує елементи arr в новий масив arrCopy
//console.log(arrCopy); //[ 1, 2, 3, 4 ]

//Копіювання масиву без spread operator (...)
// let arrCopy = [];
// for (let i = 0; i < arr.length; i++) {
//     arrCopy.push(arr[i]);
// }
// console.log(arrCopy);

//--------------------------

// * Копіювання декількох масивів:
// const arr2 =  [5, 6, 7, 8]; //створюємо ще один масив для копіювання

// const arrCopy2 = [...arr, ...arr2]; //spread operator розпаковує елементи arr та arr2 в новий масив arrCopy2
// console.log(arrCopy2); //[1, 2, 3, 4, 5, 6, 7, 8]

//--------------------------

// * Копіювання масивів + довисування додаткових елементів:
// const arrCopy3 = [...arr, ...arr2, 9, 10];
// console.log(arrCopy3); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//--------------------------

//❗Завдяки spread operator можна робити копію, але ПОВЕРХНЕВУ❗

//❗Копіювання масивів та об'єктів робиться через spread оператор❗

//До введення ECMAScript 6 (ES6) для копіювання масивів і об'єктів використовували метод Object.assign().
//З ES6 також з'явився спред-оператор (...), який робить цей процес значно зручнішим.


//---------------------------------------------------------

//КОПІЮВАННЯ ОБ'ЄКТІВ:
//Використовуємо spread operator замість Object.assign або Object.keys

//--------------------------

// * Копіювання одного об'єкта:
// const user = {name: 'John', age: 15}

// const userCopy = {...user}
// console.log(userCopy); //{ name: 'John', age: 15 }

//--------------------------

// * Копіювання дукількох об'єктів:
//Дуже часто до нах приходять дані про користувача й деталі його інформаціїї на два різні виклики з бекенду:

//спочатку запитуємо його поверхневу інформацію (наприклад для створення шапки профілю), а коли користувач вже переходить
//в налаштування профілю, або в якийсь розділ де потрібні саме деталі його акаунту, то ми робимо ще один запит до бекенду
//на об'єкт деталей й зберігаємо це не в окремому об'єкті а додаємо в об'єкт з поверхневою інформацією за допомогою
//spread оператору.


// const data = {
//     access: true,
//     isCustomer: true
// }

// const userCopy2 = {...user,...data}
// console.log(userCopy2); //{ name: 'John', age: 15, access: true, isCustomer: true }

//--------------------------

// * Копіювання об'єктів + довисування додаткових полів:
// const userCopy3 = {...user,...data, city: 'Kyiv', email: 'john@gmail.com'};
// console.log(userCopy3); //{ name: 'John', age: 15, access: true, isCustomer: true, city: 'Kyiv', email: 'john@gmail.com' }


//---------------------------------------------------------

//REST operator (...) (оператор залишкових параметрів)

//Використовується для збирання (згортання) решти елементів в масив або об'єкт. Зазвичай використовується для збору
//залишкових (або всіх) аргументів функцій або при деструктуризації об'єктів та масивів (це поділ складної структури на прості частини).

//--------------------------

//  * Збирання усіх аргументів функції в масив:

//...numbers замінює нам всевдомасив arguments
// function sumAll(...numbers) { //rest оператор збирає всі агрументи й пушить їх в новий пустий масив
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//
//     console.log(sum);
// }
//
// sumAll(1, 2, 3, 4, 5, 6)

//--------------------------

//  * Збирання залишку аргументів функції в масив:
// function sumAll(type, ...numbers) { //rest оператор збирає залишок агрументів у масив numbers.
//     console.log(numbers); //1 2 3 4 5 6
//     console.log(type); //add
// }
//
// sumAll("add",1, 2, 3, 4, 5, 6)

//--------------------------

//ДЕСТРУКТУРИЗАЦІЯ

//  * Деструктуризація (або деструкція) МАСИВУ: розпакування елементів масиву в окремі змінні

// const arr = [1, 2, 3, 4, 5] //наприклад нам важливі лише перші два елементи
// //по суті ми створюємо три окремі константи
// const [first, second, ...rest] = arr; //замість rest можна писати що завгодно

// console.log(first, second, rest); //1 2 [3, 4, 5]

//або так:
// console.log(first); //1
// console.log(second); //2
// console.log(rest); // [ 3, 4, 5 ]

//можна зробити декструктуризацію таким чином, але це не зручно, тому в нас є rest оператор
// const first = arr[0];
// const second = arr[1];
//
// console.log(first, second); //1 2


//--------------------------

//  * Деструктуризація ОБ'ЄКТУ: розпакування властивостей об'єкту в окремі змінні
// const user = {
//     name: "Anna",
//     age: 23,
//     city: "Kharkiv",
//     email: "anna@gmail.com"
// };

// const {name, age} = user; //якщо потрібні лише перші дві властивості
// console.log(name, age); //Anna 23

// const {name, age, ...details} = user; //якщо потрібні перші дві властивості й залишок
//властивостей, їх можна зібрати в результуючому об'єкті за допомогою оператора rest
// console.log(name, age, details); //Anna 23 { city: 'Kharkiv', email: 'anna@gmail.com' }


//----------------------------------------------------------------------------------------------------------------------

//ЗВОРОТНА СУМІСНІСТЬ

//Зворотна сумісність (backward compatibility) — це можливість нової версії програмного забезпечення, системи або
//технології підтримувати роботу з даними, кодом чи функціями, створеними для попередніх версій цієї системи.

//Іншими словами, зворотна сумісність гарантує, що нові версії програм або технологій не порушують працездатність старих
//програм чи систем, які використовували старіші версії.


//Зворотна сумісність у JavaScript означає, що нові версії JavaScript не повинні порушувати роботу старих скриптів,
//написаних для попередніх версій мови. Якщо ми використовуємо старий код на старій версії JavaScript, він має
//продовжувати працювати й на новій версії мови.


//У JavaScript додавання нових можливостей у мову (наприклад, нові методи або синтаксис) повинно бути таким, щоб існуючий
//код не переставав працювати.

//Наприклад, якщо до ES6 були методи масивів як forEach(), вони повинні продовжувати працювати і після додавання нових
//методів, таких як map() чи filter().

//----------------------------------------------------------------------------------------------------------------------


//РЕКУРСІЯ (recursion)

//Це метод програмування, при якому функція викликає сама себе для розв’язання певної задачі

//Основні компоненти рекурсії:
// 1. Базовий випадок – умова, за якої рекурсія припиняється. (умова виходу з рекурсії)
// 2. Рекурсивний випадок – виклик функції самою собою з меншим вхідним значенням.

//Приклад рекурсії: Факторіал числа
//Факторіал числа n (n!) — це добуток усіх натуральних чисел від 1 до n

// function factorial(n) {
//     if (n === 1) return 1; //умова виходу
//     return n * factorial(n - 1);
// }
//
// console.log(factorial(5)); //120


//РОЗГОРТАННЯ РЕКУРСІЇ (йдемо вглиб):
// factorial(5)   5 * 24 = (120) ↑
// → return 5 * factorial(4) (чекаємо на результат factorial(4))
//
// factorial(4)   4 * 6 = (24) ↑
// → return 4 * factorial(3) (чекаємо на результат factorial(3))
//
// factorial(3)    3 * 2 = (6) ↑
// → return 3 * factorial(2) (чекаємо на результат factorial(2))
//
// factorial(2)    2 * 1 = (2) ↑
// → return 2 * factorial(1) (чекаємо на результат factorial(1))
//
// factorial(1)
// Оскільки n === 1, return 1 ↑


//ЗГОРТАННЯ РЕКУРСІЇ:
//             5 * factorial(4) * factorial(3) * factorial(2) * factorial(1);
//                                                2 * 1 = 2   ←     return 1
//                                 3 * 2 = 6   ←    return 2
//                  4 * 6 = 24  ←   return 6
// 5 * 24 = 120  ←   return 24
//   return 120


//---------------------------------------------------------

// const menu = {
//     name: 'Breakfast',
//     children: [
//         {name: "Eggs"},
//         {
//             name: "Soup",
//             children: [
//                 {name: "Mushrooms"},
//                 {name: "Fish"}
//             ]
//         }
//     ]
// }
//
// function createMenu(menu, level = 0) {
//     console.log(" ".repeat(level * 2), menu.name)
//     if (menu.children) {
//         menu.children.forEach(child => {
//             createMenu(child, level + 1)
//         });
//     }
// }
//
// createMenu(menu); //Викликаємо функцію й як парамент вказуємо наш об'єкт

/*
Breakfast
  Eggs
  Soup
    Mushrooms
    Fish
*/

//---------------------------------------------------------

/*
//РОЗГОРТАННЯ ФУНКЦІЇ:

//ПЕРШИЙ ВИКЛИК
//                  наш об'єкт
function createMenu(menu, level = 0) {
    console.log(" ".repeat(level * 2), menu.name) // (" ".repeat(0), "Breakfast")  -  вивід в консоль Breakfast без пробілів
    if (menu.children) {  //true - в об'єкті menu є властивіть з ключем children  - це масив який містить 2 елементи, які є об'єктами
        menu.children.forEach(child => {
            createMenu(child, level + 1)
        });  // Для кожного елемента властивості children, яка знаходиться в об'єкті menu викликаємо функцію createMenu, де одним параметром є елемент тобто:

        //ПЕРШИЙ елемент:  createMenu({name: "Eggs"}, level = 1) бо наш level в момент виклику цієї функції був 0, 0 + 1 =  1
        //та
        //ДРУГИЙ елемент:  createMenu({name: "Soup", children: [{name: "Mushrooms"}, {name: "Fish"}]}, level = 1)
    }
}


//ДРУГИЙ ВИКЛИК:

function createMenu({name: "Eggs"}, level = 1) { //Ми ніби присвоюємо змінній menu об'єкт {name: "Eggs"}
    console.log(" ".repeat(level * 2), menu.name) // (" ".repeat(2), "Eggs")  -  вивід в консоль Eggs з двома пробілами
    if (menu.children) { //false
        menu.children.forEach(child => {
            createMenu(child, level + 1)
        });
    }
} //виклик функції createMenu({name: "Eggs"}, level = 1) ЗАВЕРШИВСЯ


//ТРЕТІЙ ВИКЛИК:

function createMenu({name: "Soup", children: [{name: "Mushrooms"}, {name: "Fish"}]}, level = 1) { //Ми ніби присвоюємо змінній menu об'єкт
    console.log(" ".repeat(level * 2), menu.name) // (" ".repeat(2), "Soup")  -  вивід в консоль Soup з двома пробілами
    if (menu.children) { //true - в об'єкті menu є властивіть з ключем children  - це масив який містить 2 елементи, які є об'єктами: {name: "Mushrooms"} та {name: "Fish"}
        menu.children.forEach(child => {
            createMenu(child, level + 1)
        }); // Для кожного елемента масиву властивості children, яка знаходиться в об'єкті menu викликаємо функцію createMenu, де одним параметром є елемент тобто:

        //ПЕРШИЙ елемент:  createMenu({name: "Mushrooms"}, level = 2)
        //
        // !!! БО наша функція, яка нам вивела в консоль Soup не завершила своє виконаття
        // (так само як й функція createMenu(menu, level = 0)).
        // Тож під час виклику функцій createMenu({name: "Mushrooms"} та createMenu({name: "Fish"} level = 1

        //ДРУГИЙ елемент:  createMenu({name: "Fish"}, level = 2)
    }
}


//ЧЕТВЕРТИЙ ВИКЛИК:

function createMenu({name: "Mushrooms"}, level = 2) { //Ми ніби присвоюємо об'єкт {name: "Mushrooms"} змінній menu
    console.log(" ".repeat(level * 2), menu.name) // (" ".repeat(4), "Mushrooms")  -  вивід в консоль Mushrooms з чотирма пробілами
    if (menu.children) { //false
        menu.children.forEach(child => {
            createMenu(child, level + 1)
        });
    }
} //виклик функції createMenu({name: "Mushrooms"}, level = 2) ЗАВЕРШИВСЯ


//П'ЯТИЙ ВИКЛИК:

function createMenu({name: "Fish"}, level = 2) { //Ми ніби присвоюємо об'єкт {name: "Fish"} змінній menu
    console.log(" ".repeat(level * 2), menu.name) // (" ".repeat(4), "Fish")  -  вивід в консоль Fish з чотирма пробілами
    if (menu.children) { //false
        menu.children.forEach(child => {
            createMenu(child, level + 1)
        });
    }
} //виклик функції createMenu({name: "Fish"}, level = 2) ЗАВЕРШИВСЯ
//                     ↓↓↓
//виклик функції createMenu({name: "Soup", children: [{name: "Mushrooms"}, {name: "Fish"}]}, level = 1) ЗАВЕРШИВСЯ
//                     ↓↓↓
//виклик функції createMenu(menu, level = 0) ЗАВЕРШИВСЯ

*/

//----------------------------------------------------------------------------------------------------------------------

//ЗАДАЧА З РЕКУРСІЄЮ ТА REDUCE

// const company = {
//     hr: [
//         {name: "Kate", salary: 1000},
//         {name: "Alex", salary: 400}
//     ],
//     it: {
//         frontend: [
//             {name: "Kris", salary: 2000},
//             {name: "Tom", salary: 2100}
//         ],
//         backend: [
//             {name: "Steve", salary: 5000},
//             {name: "Jim", salary: 3500}
//         ],
//         devops: [
//             {name: "Ron", salary: 2700},
//         ]
//     },
//     sales: [
//         {name: "Kate", salary: 1000},
//         {name: "Mike", salary: 1800}
//     ]
// }



// function countEmployees(department) {
//    if(Array.isArray(department)) {
//      return department.length
//    }
//    return Object
//        .values(department)
//        .reduce((acc, subDep) => {
//            return acc + countEmployees(subDep)
//        }, 0)
// }
// console.log(`Кількість співробітників в компанії дорівнює ${countEmployees(company)}`);
//

/*

//РОЗГОРТАННЯ ФУНКЦІЇ:

//--------------------------

//ПЕРШИЙ ВИКЛИК ФУНКЦІЇ (company)                                                        ❗ПЕРША ФУНКЦІЯ НЕ ЗАВЕРШУЕТЬСЯ

function countEmployees(company) {
    if (Array.isArray(company)) { //false
        return company.length
    }

//  Object.values(company) повертає масив значень об'єкту company:
//     [
//        [ {name: "Kate", salary: 1000}, {name: "Alex", salary: 400} ],     hr
//        { frontend: [...], backend: [...], devops: [...] },                it
//        [ {name: "Kate", salary: 1000}, {name: "Mike", salary: 1800} ]     sales
//     ]

//  reduce() проходиться по кожному елементу масиву, який повертає Object.values(company), і для кожного з них виконує
//  колбек-функцію
//  Всередині цієї колбек-функції викликається countEmployees(subDep), яка обчислює кількість співробітників у підрозділі
//  subDep, і додає це значення до acc

//  subDep = [ {name: "Kate", salary: 1000}, {name: "Alex", salary: 400} ] - HR
    return Object.values(company).reduce((acc, subDep) => {   //ПОЧИНАЄТЬСЯ ПЕРША ІТЕРАЦІЯ reduce для company
            return acc + countEmployees(subDep)
//          acc = 0      countEmployees ([ {name: "Kate", salary: 1000}, {name: "Alex", salary: 400} ])
        }, 0)
}


//--------------------------

//ПЕРША ІТЕРАЦІЯ REDUCE  для company (hr)   →   ДРУГИЙ ВИКЛИК ФУНКЦІЇ (hr)

function countEmployees(hr) { // countEmployees([ {name: "Kate", salary: 1000}, {name: "Alex", salary: 400} ])
   if(Array.isArray(hr)) { //true
     return hr.length  //2
   }  //функція ЗАВЕРШИЛАСЯ й повертає в arrow function число 2, тобто  acc = 0, return acc + countEmployees(subDep) = 0 + 2 = 2
   return Object.values(hr).reduce((acc, subDep) => {
           return acc + countEmployees(subDep)
       }, 0)
}

// ДРУГИЙ ВИКЛИК ФУНКЦІЇ ЗАВЕРШИВСЯ (return 2)   →   ПЕРША ІТЕРАЦІЯ REDUCE для company ЗАВЕРШИЛАСЯ (тепер acc = 2)


//--------------------------

//ДРУГА ІТЕРАЦІЯ REDUCE для company (it)   →   ТРЕТІЙ ВИКЛИК ФУНКЦІЇ (it)               ❗ДРУГА ІТЕРАЦІЯ НЕ ЗАВЕРШУЕТЬСЯ
//                                                                                      ❗ТРЕТЯ ФУНКЦІЯ НЕ ЗАВЕРШУЕТЬСЯ

function countEmployees(it) { // countEmployees({ frontend: [...], backend: [...], devops: [...] })
    if(Array.isArray(it)) { //false
        return it.length
    }
    return Object.values(it).reduce((acc, subDep) => {

//  Object.values(it) повертає:
//       [
//         [ {name: "Kris", salary: 2000}, {name: "Tom", salary: 2100} ],     frontend
//         [ {name: "Steve", salary: 5000}, {name: "Jim", salary: 3500} ],    backend
//         [ {name: "Ron", salary: 2700} ]                                    devops
//       ]

//  reduce виконує для кожного отриманого елемента колбек-функцію: яка викликає countEmployees(subDep) для кожного з них, й додає
//  return з цієї функції до acc

            return acc + countEmployees(subDep) //acc досі дорівнює 2
        }, 0)
}


//--------------------------

//ПЕРША ІТЕРАЦІЯ REDUCE для it (frontend)   →   ЧЕТВЕРТИЙ ВИКЛИК ФУНКЦІЇ (frontend)             ❗ acc знову дорівнює 0

function countEmployees(frontend) { // countEmployees([ {name: "Kris", salary: 2000}, {name: "Tom", salary: 2100} ])
    if(Array.isArray(frontend)) { //true
        return frontend.length  //2
    }  //функція ЗАВЕРШИЛАСЯ й повертає в arrow function число 2,  acc = 0, return acc + countEmployees(subDep) = 0 + 2 = 2

    // return Object.values(frontend).reduce((acc, subDep) => { НЕ ВИКОНУЄТЬСЯ
    //     return acc + countEmployees(subDep)
    // }, 0)
}

// ЧЕТВЕРТИЙ ВИКЛИК ФУНКЦІЇ ЗАВЕРШИВСЯ (return 2)   →   ПЕРША ІТЕРАЦІЯ REDUCE для it ЗАВЕРШИЛАСЯ (тепер acc = 4)

//--------------------------

//ДРУГА ІТЕРАЦІЯ REDUCE для it (backend)   →   П'ЯТИЙ ВИКЛИК ФУНКЦІЇ (backend)

function countEmployees(backend) { // countEmployees([ {name: "Steve", salary: 5000}, {name: "Jim", salary: 3500} ])
    if(Array.isArray(backend)) { //true
        return backend.length  //2
    }  //функція ЗАВЕРШИЛАСЯ й повертає в arrow function число 2,  acc = 2, return acc + countEmployees(subDep) = 2 + 2 = 4

    // return Object.values(backend).reduce((acc, subDep) => { НЕ ВИКОНУЄТЬСЯ
    //     return acc + countEmployees(subDep)
    // }, 0)
}

// П'ЯТИЙ ВИКЛИК ФУНКЦІЇ ЗАВЕРШИВСЯ (return 2)   →   ДРУГА ІТЕРАЦІЯ REDUCE для it ЗАВЕРШИЛАСЯ (тепер acc = 4)


//--------------------------

//ТРЕТЯ ІТЕРАЦІЯ REDUCE для it (devops)   →   ШОСТИЙ ВИКЛИК ФУНКЦІЇ (devops)

function countEmployees(devops) { // countEmployees([ {name: "Ron", salary: 2700} ])
    if(Array.isArray(devops)) { //true
        return devops.length  //1
    }  //функція ЗАВЕРШИЛАСЯ й повертає в arrow function число 1,  acc = 4, return acc + countEmployees(subDep) = 4 + 1 = 5

    // return Object.values(devops).reduce((acc, subDep) => { НЕ ВИКОНУЄТЬСЯ
    //     return acc + countEmployees(subDep)
    // }, 0)
}

// ШОСТИЙ ВИКЛИК ФУНКЦІЇ ЗАВЕРШИВСЯ (return 1)   →   ТРЕТЯ ІТЕРАЦІЯ REDUCE для it ЗАВЕРШИЛАСЯ (тепер acc = 5)

//                                                                      ❗ТРЕТЯ ФУНКЦІЯ (it) ЗАВЕРШУЕТЬСЯ
//                                                                  ❗ДРУГА ІТЕРАЦІЯ REDUCE для company ЗАВЕРШУЕТЬСЯ
//                                                                    й повертає +5   acc =  2 + 5 = 7


//--------------------------

//ТРЕТЯ ІТЕРАЦІЯ REDUCE для company (sales)   →   СЬОМИЙ ВИКЛИК ФУНКЦІЇ (sales)

function countEmployees(sales) { // countEmployees([ {name: "Kate", salary: 1000}, {name: "Mike", salary: 1800} ])
    if(Array.isArray(sales)) { //true
        return sales.length  //2
    }  //функція ЗАВЕРШИЛАСЯ й повертає в arrow function число 2,  acc = 7, return acc + countEmployees(subDep) = 7 + 2 = 9

    // return Object.values(sales).reduce((acc, subDep) => { НЕ ВИКОНУЄТЬСЯ
    //     return acc + countEmployees(subDep)
    // }, 0)
}

// СЬОМИЙ ВИКЛИК ФУНКЦІЇ ЗАВЕРШИВСЯ (return 2)   →   ТРЕТЯ ІТЕРАЦІЯ REDUCE для company ЗАВЕРШИЛАСЯ (тепер acc = 9)

//                                                                                ❗ПЕРША ФУНКЦІЯ (company) ЗАВЕРШУЕТЬСЯ

*/

//----------------------------------------------------------------------------------------------------------------------

//СУМА ЗАРПЛАТ

// function countSalaries(department) {
//     if (Array.isArray(department)) {
//         return department.reduce((acc, employee) => acc + employee.salary, 0)
//     }
//
//     return Object.values(department).reduce((acc, subDep) => acc + countSalaries(subDep), 0);
// }
// console.log(`The sum of employees' salaries is ${countSalaries(company)}`); //The sum of employee's salaries is 19500

//----------------------------------------------------------------------------------------------------------------------


//TASK 1:

// const fileSystem = {
//     name: "root",
//     type: "folder",
//     children: [
//         {
//             name: "Documents",
//             type: "folder",
//             children: [
//                 { name: "resume.pdf", type: "file" },
//                 { name: "report.docx", type: "file" }
//             ]
//         },
//         {
//             name: "Pictures",
//             type: "folder",
//             children: [
//                 { name: "vacation.jpg", type: "file" },
//                 { name: "birthday.png", type: "file" }
//             ]
//         },
//         { name: "readme.txt", type: "file" }
//     ]
// };
//
// function printFileSystem(fileSystem, level = 0) {
//     console.log(" ".repeat(level * 2), fileSystem.name);
//     if(fileSystem.children) {
//         fileSystem.children.forEach(child => printFileSystem(child, level + 1));
//     }
// }
//
// printFileSystem(fileSystem);

/*
root
  Documents
    resume.pdf
    report.docx
  Pictures
    vacation.jpg
    birthday.png
  readme.txt
 */


//----------------------------------------------------------------------------------------------------------------------

//forEach

//Це метод масивів у JS, який використовується для перебору елементів масиву та виконання певної функції для кожного з них.


// array.forEach(function(element, index, array) {
//     тіло функції
// });

// element — поточний елемент масиву
// index (необов’язковий) — індекс поточного елемента.
// array (необов’язковий) — сам масив, який перебирається.


//forEach

//  ✔ Не змінює оригінальний масив (але можна змінювати його елементи всередині функції).
//  ✔ Не повертає новий масив (на відміну від map()).
//  ✔ Не можна зупинити forEach() достроково (на відміну від for або for...of, де можна використовувати break).


//Раніше для того щоб пройтись по масиву ми використовували цикл for, тепер є метод forEach
//Він проходиться по кожному елементу в масиві, forEach не змінює масив, не видає новий масив на основі попереднього
//(як метод map або filter)

//--------------------------

// const arr = [1, 2, 3, 4, 5];
//
// arr.forEach((item) => {
//     (console.log(item)) //1 2 3 4 5
// })

//--------------------------

//ПРИКЛАД з індексами:

// const fruits = ["apple", "banana", "orange"];
//
// fruits.forEach((fruit, index) => {
//     console.log(`Fruit № ${index + 1}: ${fruit}`);
// })

// Fruit № 1: apple
// Fruit № 2: banana
// Fruit № 3: orange

//--------------------------

//TASK 1:  Обчислення суми всіх елементів масиву

// const numbers = [10, 20, 30, 40, 50];
// let sum = 0;
//
// numbers.forEach(number => {
//     sum += number;
// })
//
// console.log(sum) //150

//--------------------------

//TASK 2: Знаходження максимального числа в масиві

// const numbers = [5, 12, 8, 130, 44];
// let greatestNum = numbers[0];
//
// numbers.forEach(function (num) {
//     if(num > greatestNum) {
//         greatestNum = num;
//     }
// })
// console.log(greatestNum); //130

//----------------------------------------------------------------------------------------------------------------------

//REDUCE

//Метод reduce() це інструмент для накопичення значень у масиві. Він перебирає всі елементи масиву та поступово зводить
//їх до одного фінального результату.

//  ✔ Сума всіх чисел у масиві
//  ✔ Добуток чисел
//  ✔ Найбільше або найменше число
//  ✔ Об'єднання об'єктів
//  ✔ Підрахунок кількості однакових елементів


//reduce() складається з двох аргументів:
//
//  1. Стрілкова функція (callback function) – ця функція виконується на кожному елементі масиву і містить 4 параметри
//  (зазвичай використовуються 2):
//         1. accumulator – проміжний результат (накопичувач)
//         2. currentValue – поточний елемент масиву
//         3. index (необов'язковий) – номер поточного елемента
//         4. array (необов'язковий) – весь масив
//  2. Початкове значення accumulator – з чого починається накопичення (наприклад, 0 для суми або {} для об'єкта).

// У reduce() є накопичувач (accumulator), який зберігає результат попередніх обчислень. Кожного разу, коли функція
// reduce() виконує ітерацію, вона бере один поточний елемент масиву (currentValue) і додає його до вже накопиченого
// результату (accumulator).


// const numbers = [10, 20, 30];
// //                                 стрілкова функція з двома аргументами: acc - accumulator, та num - current value
// const sum = numbers.reduce((acc, num) => acc + num, 0); //0 - початкове значення accumulator
//
// console.log(sum); // 60

//Детальна версія

// const numbers = [10, 20, 30];
//
// const sum = numbers.reduce((acc, currentValue) => {
//     console.log(`Акумулятор: ${acc}, Поточний елемент: ${currentValue}`);
//     return acc + currentValue;
// }, 0);
//
// console.log('Фінальний результат:', sum);

// Акумулятор: 0, Поточний елемент: 10 - перша ітерація
// Акумулятор: 10, Поточний елемент: 20 - друга
// Акумулятор: 30, Поточний елемент: 30 - третя
// Фінальний результат: 60


//Кроки роботи reduce()
// 1. Ініціалізація: accumulator приймає початкове значення (якщо його передано).
// 2. Перебір масиву: reduce() викликає callback-функцію для кожного елемента.
// 3. Оновлення accumulator: кожен раз функція повертає нове значення накопичувача.
// 4. Результат: після останньої ітерації повертається фінальний результат.


//--------------------------

//СУМА ЧИСЕЛ

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, number) => acc + number, 0);

// console.log(`Сума чисел: ${sum}`); //Сума чисел: 15

//--------------------------

//ДОБУТОК ЧИСЕЛ

// const numbers = [1, 2, 3, 4, 5];
// const product = numbers.reduce((acc, number) => acc * number, 1);
//
// console.log(`Добуток чисел: ${product}`); //Добуток чисел: 120

//--------------------------

//НАЙБІЛЬШЕ ЧИСЛО

// const numbers = [3, 1, 4, 5, 2];
// const max = numbers.reduce(function (acc, num) {
//     if (num > acc) {
//         return num
//     } else {
//         return acc
//     }
// }, numbers[0])
//
// console.log("Найбільше число:", max);


// ПЕРЕТВОРЕННЯ Function Declaration у Arrow Function

//STEP 1:
// const max = numbers.reduce((acc, num) => {
//       return (num > acc) ? num : acc
// }, numbers[0])
// console.log("Найбільше число:", max);

// 1. Видалили слово function
// 2. Додали => між аргументами acc, num та {}
// 3. Замінили if на тернарний оператор ? :


//STEP 2: Видаляємо {} та return
// const max = numbers.reduce((acc, num) => (num > acc) ? num : acc, numbers[0])
// console.log("Найбільше число:", max);

//--------------------------

//НАЙМЕНЬШЕ ЧИСЛО

// const numbers = [3, 1, 4, 5, 2];
// const min = numbers.reduce((acc, num) => (acc < num) ? acc: num, numbers[0])
//
// console.log("Найменше число:", max);

//--------------------------

//ОБ'ЄДНАННЯ МАСИВУ ОБ'ЄКТІВ В ОДИН ОБ'ЄКТ

// const settings = [
//     { theme: "dark", fontSize: 14 },
//     { language: "uk", fontSize: 16 },
//     { notifications: true }
// ];
//
// const mergedSettings = settings.reduce((acc, obj) => {
//    return  {...acc, ...obj}
//
// }, {})
// console.log(mergedSettings) //{ theme: 'dark', fontSize: 16, language: 'uk', notifications: true }


//❗Якщо є однакові ключі (fontSize), останнє значення перезаписує попереднє ❗


//Another example:

// const users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" }
// ];
//
// const usersMap = users.reduce((acc, user) => {
//     acc[user.id] = user.name; //Додаємо нову властивість в об'єкт
//     //перша ітерація: acc[1] = "Alice"     acc = { 1: "Alice" }
//     //перша ітерація: acc[2] = "Bob"       acc = { 1: "Alice", 2: "Bob" }
//     //третя ітерація: acc[1] = "Charlie"   acc = { 1: "Alice", 2: "Bob", 3: "Charlie" }
//     return acc; //{ 1: "Alice", 2: "Bob", 3: "Charlie" }
// }, {})
//
// console.log(usersMap) //{1: 'Alice', 2: 'Bob', 3: 'Charlie'}
// //Ми перетворили масив об'єктів у один об'єкт (userMap), де ключі — id, а значення — name.


//Another example:
// const products = [
//     { id: "p1", name: "Laptop", price: 1000 },
//     { id: "p2", name: "Phone", price: 500 },
//     { id: "p3", name: "Tablet", price: 700 }
// ];
//
// const productMap = products.reduce((acc, {id, ...rest}) => {
//     acc[id] = rest;
//     return acc;
// }, {})
//
// console.log(productMap)

//{
//   p1: { name: 'Laptop', price: 1000 },
//   p2: { name: 'Phone', price: 500 },
//   p3: { name: 'Tablet', price: 700 }
// }

//--------------------------

// ⁉️ПІДРАХУНОК КІЛЬКОСТІ ОДНАКОВИХ ЕЛЕМЕНТІВ У МАСИВІ

//--------------------------

// const arr = [1, 2, 3, 4, 5, 6, 7];

//без reduce
// let sum = 0
// arr.forEach(item => sum += item)
// console.log(sum) //28

//з reduce             accumulator  currentValue
// console.log(arr.reduce((acc, item) => acc + item, 0)); //28

//початове значення акумулятора (0) можна не вказувати, у цьому випадку початковим значення буде перший елемент масиву - arr[0]
// console.log(arr.reduce((acc, item) => acc + item)); //28

// const product = arr.reduce((acc, num) => acc * num, 1)
// console.log(product);
//--------------------------

// const arr = ["Hello", "World", "!"];
//
// console.log(
//     arr.reduce((acc, word) => acc + word + " ", "")
// ); //Hello World !


//----------------------------------------------------------------------------------------------------------------------

//REPEAT

// console.log("Hello ".repeat(3)) //Hello Hello Hello

//----------------------------------------------------------------------------------------------------------------------

//TASK 1: Сума цифр числа
// function sumOfDigits(n) {
//     if (n < 10) return n;
//     return n % 10 + sumOfDigits(Math.floor(n / 10));
// }
//
// console.log(sumOfDigits(265)); //13

//    (13)
//sumOfDigits(265)      (8)
//     return 5 + sumOfDigits(26)        (2)
//                      return  6 + sumOfDigits (2)
//                                       return 2

//---------------------------








