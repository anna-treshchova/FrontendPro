//КЕШУВАННЯ та МЕМОІЗАЦІЯ

//Замикання (Closure) - це механізм в JS при якому функція має доступ до змінних зі своєї зовнішньої області видимості
//Використовується для приховування даних, а також для мемоізації (тобто для кешування)

// Кешування та мемоізація — це техніки оптимізації, що зменшують час виконання коду шляхом збереження раніше отриманих
// результатів

// КЕШУВАННЯ (caching) — це загальний підхід до збереження даних у тимчасовому сховищі (пам'ять, файлова система, база даних,
// локальне сховище браузера) для швидкого доступу в майбутньому.

// МЕМОІЗАЦІЯ (memoization) — є однією з форм кешування, коли результати обчислень функції кешуються всередині самої функції, що
// дозволяє при повторному виклику з однаковими аргументами повертати збережене значення замість повторного обчислення.


//-----------------------------------------------

//ЯК РОЗРІЗНИТИ ДЕ КЕШУВАННЯ А ДЕ МЕМОІЗАЦІЯ?

// Головна суть мемоізації — це збереження результатів обчислень у локальному кеші (В МЕЖАХ ЗАМИКАННЯ),
// щоб не виконувати повторні обчислення для однакових вхідних даних.

//                   ❗ Мемоізація - це коли кеш зберігається в замиканні ❗
//                                           ↓ тобто ↓
//    ❗ Якщо змінна cache (const cache = {}) оголошена всередині функції в якій є замикання  — це мемоізація ❗


// Якщо кеш був би глобальним (const cache = {} поза memoize), це було б просто кешування, яке може використовуватися
// для будь-яких запитів або даних.

// Тому мемоізація — це кешування обчислень у межах однієї функції, а кешування — це ширше поняття, що включає
// збереження будь-яких даних у пам’яті


//-----------------------------------------------

//TASK: Запити до сервера

// Зробити функцію, яка при кожному запиті на сервер (url), буде або робити запит до сервера або видавати вже ті дані,
// які вона отримала раніше з сервера за цією url (закешовані дані)


// url (Uniform Resource Locator) – це посилання на сервер або конкретний ресурс на ньому
// Коли ми робимо запит до сервера, у коді передається URL, за яким потрібно отримати або надіслати дані


// Дані кешуються у вигляді ключ:значення, де ключ – це URL, а значення – отримані дані з сервера за цією url


// Кешування зменшує кількість запитів до сервера й прискорює роботу сайту, бо запит до сервера займає час й хотілося б
// скоротити їх кількість

// Коли ми робимо запит за одним url (наприлад: get user data), та отримуємо у відповідь дані, то запам'ятовуємо що для цієї url
// ми отримуємо ось такі дані, й наступний раз коли буде знову запит за цією url, запиту до сервера вже не буде, бо в нас
// вже є дані які ми отримали за цим запитом

// Кешування даних користувача може бути ризикованим, тому що вони можуть змінюватися (наприклад, зміна імені, аватара,
// електронної пошти тощо)
// Рішення: кешувати користувацькі дані лише на короткий термін або перевіряти їхню актуальність перед видачею
/*
function memoizedFetch() {
    const cache = {};  // Створюємо локальний кеш, який буде зберігати результати запитів - ЦЕ МЕМОІЗАЦІЯ
    return function (url) {  // Повертаємо функцію, яка приймає URL

        if(cache[url]) {   // й виконує перевірку, чи є вже відповідні дані в кеші
            console.log("Data from cache: " + url);
            return cache[url];  // Якщо дані в кеші для заданого URL є - вони повертаються
        }

        console.log ("Making request to -", url); // Якщо необхідних даних в кеші немає, робиться запит до сервера за URL
        let fakeData = "Data for: " + url; // Імітація відповіді сервера з даними
        cache[url] = fakeData; // Зберігаємо дані в кеші
        console.log(fakeData);
        return cache[url]; // Повертаємо отримані дані
    }
}

const getData = memoizedFetch()

getData("website.com/users")           // Making request to - website.com/users
                                          // Data for: website.com/users

getData("website.com/userData")      // Making request to - website.com/userData
                                        // Data for: website.com/userData

getData("website.com/users")      // Data from cache: website.com/users
getData("website.com/userData")  // Data from cache: website.com/userData
*/

// Функція memoizedFetch створює замикання – локальний кеш cache існує всередині неї, але недоступний ззовні
// Це забезпечує збереження даних між викликами (тобто запам'ятовування результатів).

//Мемоізація працює на замиканнях: напряму до кешу (cache) доступу немає


// Кожен раз при виклику getData(url) функція перевіряє, чи є у кеші дані для цього URL:
//     * Якщо є — повертає їх
//     * Якщо немає — йде на сервер за даними, й зберігає їх у кеші і повертає


//----------------------------------------------------------------------------------------------------------------------

//РЕКУРСІЯ

//TASK: факторіал числа

// function countFactorial(n) {
//     if (n === 1) {
//         return 1
//     }
//     return n * countFactorial(n - 1);
// }
//
// console.log(countFactorial(5)); //120

//-------------------------

//TASK:

// const catalogue = {
//     name: 'Catalogue',
//     items: [
//         {
//             name: 'Laptop',
//             price: 1000,
//         },
//         {
//             name: 'Phone',
//             price: 500,
//         }
//     ]
// }

//Додаємо новий каталог
// const catalogue2 = {
//     name: 'Catalogue',
//     items: [
//         {
//            name: 'Electronics',
//             items: [
//                 { name: 'Laptop', price: 1000},
//                 { name: 'Phone', price: 500}
//             ]
//         },
//         {
//             name: 'Clothes',
//             items: [
//                 { name: 'T-shirt', price: 20},
//                 { name: 'Jeans', price: 500},
//                 { name: 'Dress'}
//             ]
//         }
//     ]
// }


// function calculateTotalPrice (section) {
//
//     if(Array.isArray(section.items)) {
//      return section.items.reduce((acc, subSec) => acc + calculateTotalPrice(subSec), 0);
//     }
//
//     if (section.price) {
//         return section.price
//     }
//     return 0;  // Якщо елемент не має ціни та не є підкаталогом { name: 'Dress'}, повертаємо 0
// }
//
// console.log(calculateTotalPrice(catalogue)); //1500
// console.log(calculateTotalPrice(catalogue2)); //2020


//Рішення викладача без використання reduce
// function calculateTotalPrice(obj) {
//     let total = 0;
//
//
//     if (Array.isArray(obj.items)) {
//         for (let i = 0; i < obj.items.length; i++) {
//             total += calculateTotalPrice(obj.items[i])
//         }
//     }
//
//     if (obj.price) {
//         total += obj .price;
//     }
//
//     return total;
// }
//
// console.log(calculateTotalPrice(catalogue)); //1500
// console.log(calculateTotalPrice(catalogue2)); //2020


//    * З reduce обов’язково потрібно явно повертати число, щоб уникнути NaN
//    * У for циклі undefined не спричиняє проблеми, бо просто не впливає на total
//    * Завжди варто повертати число у рекурсивних функціях, особливо якщо використовуєш reduce


// ❗while (true) — це безкінечний цикл у JavaScript


//----------------------------------------------------------------------------------------------------------------------

// Масиви в JavaScript є об'єктами.
//
// Чому?
//     1. Масиви в JS є спеціальним типом об'єктів, де ключами є числові індекси (0, 1, 2, ...)
//     2. В основі масиву лежить об'єкт, який має додаткові методи (push, pop, map, reduce etc)
//     3. typeof [] поверне "object", що підтверджує що це об'єкт

// console.log(typeof {});   //object
// console.log(typeof []);   //object
// console.log(typeof null); //object

//Перевірка що це саме МАСИВ:
// console.log(Array.isArray([])); //true


//Перевірка що це саме ОБ'ЄКТ:
// const value = {};
// const value2 = null;

//сувора перевірка за значенням (!== null) і за типом (=== 'object')
// console.log(value !== null && typeof(value) === 'object' && !Array.isArray(value)); //true

// JS пропонує скорочення до:
// console.log(typeof(value2) === 'object' && !Array.isArray(value2)); //але тоді веревірка пропускає null

// console.log(value2 !== null && typeof(value2) === 'object' && !Array.isArray(value2)); //false (! - це інверсія)

//зазвичай використовують таку перевірку:
// console.log(value2 && typeof(value2) === 'object' && !Array.isArray(value2));

//оператор && - це логічне множення   / оператор || - це логічне додаваня


//----------------------------------------------------------------------------------------------------------------------

//FOR...IN  and  FOR...OF

// Обидва цикли використовуються для ітерації, але працюють по-різному: for...in -  для ОБ'ЄКТІВ, for...of -  для МАСИВІВ


//-----------------------------------------------

//FOR...IN              ❗for...in був доданий ще в перших версіях JS й вже майже не використовується в сучасному коді ❗

// for...in — це цикл у JS, який перебирає всі перераховувані (enumerable) властивості об'єкта. Він перебирає ключі (keys)
// об'єкта та дозволяє отримати їхні значення (values) через obj[key].

// Перераховувані (enumerable) властивості – це ті, які видно під час ітерації for...in або при використанні Object.keys()

//СИНТАКСИС:
// for (let key in object) {
//     // Код, що виконується для кожного ключа
// }


//Змінна key створюється всередині циклу for...in та послідовно приймає ключі об'єкта у вигляді рядків.
//Якщо створювати змінну key через let (або const) - вона буде обмежена межами циклу

/*
const user = {
    name: "Anna",
    age: 23,
    city: "Kharkiv"
};

//-------------------------

//ПЕРЕБІР КЛЮЧІВ ОБ'ЄКТА
for (let key in user) {
    console.log(key); // "name", "age", "city"
}
//key завжди буде рядком

//-------------------------

//ПЕРЕБІР ЗНАЧЕНЬ ОБ'ЄКТА
for(let key in user) {
    console.log(user[key]) //Anna, 23, Kharkiv
}
//user[key] – це значення властивості, і його тип залежить від того, що збережено в об'єкті

//-------------------------

//ПЕРЕБІР ВЛАСТИВОСТЕЙ ОБ'ЄКТА
for (let key in user) {
    console.log(`${key}: ${user[key]}`)  // name: Anna
}                                        // age: 23
                                         // city: Kharkiv
//-------------------------

//FOR...IN НЕ ПІДХОДИТЬ ДЛЯ МАСИВІВ, краще використовувати for...of, forEach() або map()

// for...in майже не використовується бо він працює повільніше ніж Object.keys(), Object.values() та Object.entries(), а також
// він інколи може видавати значення об'єкту (властивості) не в тому порядку в якому вони зберігаються в об'єкті.


//-------------------------

// АЛЬТЕРНАТИВИ FOR...IN

// ПЕРЕБІР КЛЮЧІВ ОБ'ЄКТА   кращий спосіб:  Object.keys(user)
   console.log(Object.keys(user)); // ['name', 'age', 'city']


// ПЕРЕБІР ЗНАЧЕНЬ ОБ'ЄКТА   кращий спосіб:  Object.values(user)
console.log(Object.values(user)); // [ 'Anna', 23, 'Kharkiv' ]


// ПЕРЕБІР ВЛАСТИВОСТЕЙ ОБ'ЄКТА   кращий спосіб:  Object.entries(user)
console.log(Object.entries(user)); // [['name', 'Alice'], ['age', 25], ['city', 'New York']]
*/


//-----------------------------------------------

//FOR...OF

// Цикл дозволяє перебирати (ітераційно обходити) значення ітерабельних об'єктів (МАСИВИ, РЯДКИ, Map, Set, NodeList)

//СИНТАКСИС
// for (const element of iterable) {
     // Код, що виконується для кожного елемента
// }

// element — змінна, у яку на кожній ітерації записується поточний елемент
// iterable — об'єкт, який можна ітерувати (наприклад, масив або рядок)

//-------------------------
//ПЕРЕБІР МАСИВА
const numbers = [10, 20, 30, 40];

for(const num of numbers) {
    console.log(num);  // 10 20 30 40
}

//-------------------------

//ПЕРЕБІР РЯДКА (кожна літера окремо)
const str = "Hello";
for(const letter of str) {
    console.log(letter) // H e l l o
}
//-------------------------

//FOR...OF Не працює з об'єктами {}, бо вони не є ітерабельними.


//for працює повільніше ніж forEach та for...of

// const arr = [1, 2, 3, 4, 5];
// for (let item of arr) {
//     item += 4
// }
// console.log(arr)

//-----------------------------------------------

//TASK: знайти середній бал і вивести список оцінок, які вищі за середнє

const grades = [85, 90, 78, 92, 88, 76, 95, 89];

for (const grade of grades) {
let totalGrade = 0
}






//----------------------------------------------------------------------------------------------------------------------

//TASK: Знайти всіх активних користувачів. Порахувати їх середній вік. Повернути список (масив) їх імен.
// const users = {
//     user1: {name: "Anna", age: 23, active: true},
//     user2: {name: "Alex", age: 37, active: true},
//     user3: {name: "Chris", age: 18, active: false},
//     user4: {name: "Tom", age: 45, active: true},
//     user5: {name: "Alice", age: 43, active: false},
//     user6: {name: "Emma", age: 24, active: true}
// }

/*
function getUserData(users) {
    const activeUsers = [];
    let totalAge = 0;

    Object.values(users).forEach((user) => {
        if (user.active) {
            activeUsers.push(user.name)
            totalAge += user.age
        }
    })
    let averageAge = Math.floor(totalAge / activeUsers.length);

    // return `Active users: ${activeUsers.length} (${activeUsers.join(", ")}).\nAverage age: ${averageAge}.`;   // Active users: 4 (Anna, Alex, Tom, Emma).
                                                                                                                 // Average age: 32.
    return {
        activeUsers: activeUsers,
        averageAge: averageAge
    } //{ activeUsers: [ 'Anna', 'Alex', 'Tom', 'Emma' ], averageAge: 32 }

}

console.log(getUserData(users));
*/

/*
//СПРОЩУЄМО:
function getUserData(users) {

    const activeUsers = Object.values(users).
    filter(user => user.active).
    map(user => user.name); // map проходить по кожному об'єкту в масиві та повертає значення user.name, створюючи новий масив, що містить лише імена

    let averageAge = Math.floor(Object.values(users).
    filter(user => user.active).
    reduce((acc, user) => acc + user.age, 0) / activeUsers.length);

    return {
        activeUsers,
        averageAge
    }
}

console.log(getUserData(users));
*/

// ❗activeUsers - це все одно поверхнева копія users: якщо ми змінимо об'єкт або масив у activeUsers він зміниться й у users.
//  SOLUTION:
//     const activeUsers = Object.values(
//         JSON.parse(JSON.stringify(users)) //глибоке копіювання (deep copy)       ⁉️structuredClone - почитати про це
//     ).filter(user => user.active);


//----------------------------------------------------------------------------------------------------------------------
// ⁉️Babel — це транспілятор JavaScript, який дозволяє перетворювати сучасний код (ES6+ або JSX) у старіші версії JS,
// щоб він працював у всіх браузерах.
//----------------------------------------------------------------------------------------------------------------------


//Щоб створити функцію в об'єкті не обов'язково заводити поле з ключем, новий синтаксис дозволяє нам

// const user = {
//     name: 'John',
//     age: 42,
//     email: 'john@example.com',
//     city: 'Los Angeles',
// //  sayHello: function() {
// //     console.log(`Hello, ${this.name}!`);
// //  }
// //     ↓ ↓ ↓
//     sayHello() {
//         console.log(`Hello, ${this.name}!`)
//     }
// }
//
// user.sayHello() //Hello, John!

//----------------------------------------------------------------------------------------------------------------------