                                                                                                                      /*
                                                     MODULES
                                                   ‾‾‾‾‾‾‾‾‾‾

 Модулі — це спосіб організації коду в окремі частини (файли), які можна повторно використовувати, імпортувати та
 експортувати

 Модуль — це файл, який щось експортує, щоб інші файли могли це імпортувати


 НАВІЩО ПОТРІБНІ МОДУЛІ

   ◦ Розділення відповідальностей — кожен модуль відповідає лише за свою частину логіки:

   • модуль для роботи з API

         • модуль для управління інтерфейсом (UI)

         • модуль для обробки помилок

         • модуль із загальною логікою (utility-функції)

   ◦ Повторне використання коду — функції, змінні або класи з одного модуля можна імпортувати в інші файли
     Це дозволяє не дублювати код


 ПІДСУМОК:
           ◦ модуль — файл з кодом, який можна імпортувати/експортувати

           ◦ експорт (export) — те, що ми віддаємо з модуля іншим файлам

           ◦ імпорт (import) — те, що ми забираємо з іншого модуля

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

 1. МОДУЛІ В БРАУЗЕРІ (ES-модулі)

 Браузери підтримують ES-модулі (ECMAScript modules), які використовують ключові слова import та export
                                                                                       ‾‾‾‾‾‾    ‾‾‾‾‾‾

                                            СИНТАКСИС:

‾‾‾‾‾‾‾‾‾‾‾‾‾
 1. export function + import {}  —  іменований імпорт (named export/import)

      • підходить для імпортування тільки деяких функцій або змінних з модуля

      • назва функції або змінної у import має точно відповідати імені у export


 export function add(a,b) {         // file: math.js
   return a + b;
 }

 import { add } from "./math.js";   // file: main.js
 console.log(add(2, 7);


‾‾‾‾‾‾‾‾‾‾‾‾‾

 2. import * as name from  —  імпорт всього (namespace import)

      • підходить для імпортування всього модуля як об'єкта, з можливістю звертатися до всіх його функцій та змінних
        як до властивостей цього об'єкта

      • усе об’єднується під одним namespace (псевдонімом) - наприклад: mathFunc


 export function add(a, b) {                  // file: math.js
   return a + b;
 }

 export function multiply(a, b) {
   return a * b;
 }

 ↓ ↓ ↓

 import * as mathFunc from "./math.js"       // file: main.js

 console.log(mathFunc.add(7, 2))      // 9
 console.log(mathFunc.multiply(7, 2)) // 14


‾‾‾‾‾‾‾‾‾‾‾‾‾

 3. export default + import someName  —  експорт за замовчуванням

      • використовується для експорту однієї головної функції з модуля

      • ім’я функції в import можна вигадати будь-яке (addFunk)


 export default function add(a,b) {     // file: math.js
  return a + b;
 }

 import addFunk from "./math.js";       // file: main.js
 console.log(add(2, 7);


‾‾‾‾‾‾‾‾‾‾‾‾‾

 4. export default + export (комбіновано)

      • підходить для імпортування однієї головної функції й кількох додаткових

      • в одному файлі може бути лише один export default, але багато export


 export default function add(a, b) {          // file: math.js
   return a + b;
 }

 export function multiply(a, b) {
   return a * b;
 }

 ↓ ↓ ↓

 import add, { multiply } from "./math.js";   // file: main.js

 console.log(add(7, 2));      // 9
 console.log(multiply(7, 2)); // 14


‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

 При використанні модулів можна змінювати ім’я функції при import або export за допомогою ключового слова — as
 Це дозволяє уникати конфліктів імен або робити назви зрозумілішими у контексті файлу


 ЗМІНА ІМ’Я ПРИ export:
                         function add(a, b) {                     // file: math.js
                           return a + b;
                         }

                         export { add as sum };


 ЗМІНА ІМ’Я ПРИ import:
                        import { add as sum } from "./math.js"    // file: main.js


‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

 2. МОДУЛІ Node.js (CommonJS)

 У Node.js історично використовувалися CommonJS-модулі, які не підтримуються безпосередньо в браузері

 СИНТАКСИС:

    function add(a, b) {                  // file: math.js
        return a + b;
    }
    module.exports = { add };


    const { add } = require("./math");    // file: main.js
    console.log(add(2, 7);


    ❗require() та module.exports — не працюють у браузері (тільки у Node.js)

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

 ЧОМУ БРАУЗЕР НЕ РОЗУМІЄ Node-МОДУЛІ (CommonJS)

   ◦ У браузера немає доступу до файлової системи — а require() читає модулі з файлів

   ◦ У браузера відсутні спеціальні об'єкти Node.js:
                                                     • module
                                                     • exports
                                                     • __dirname
                                                     • process    →   вони існують тільки в середовищі Node.js

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

 ЯК ЗАПУСКАТИ Node-МОДУЛІ У БРАУЗЕРІ


 1st option:  Bundler (наприклад, Webpack, Vite, Parcel)
‾‾‾‾‾‾‾‾‾‾‾‾
    ◦ Перетворює код з CommonJS на ES-модулі або звичайні скрипти

    ◦ Пакує залежності у один файл (залежність (dependency) — це інший файл або модуль, який наш код використовує)


 2nd option: ES-модулі у Node.js
‾‾‾‾‾‾‾‾‾‾‾‾
    ◦ Node.js зараз також підтримує ES-модулі

    ◦ Достатньо:
                 • або дати файлу розширення .mjs

                 • або додати у package.json:  { "type": "module" }

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

                   Порівняння	              ES-модулі (браузер)	        CommonJS (Node.js)

                   Синтаксис	              import/export	                require/module.exports
                   ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
                   Працює в браузері          ✔                             ✘ (лише з бандлерами)
                   ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
                   Працює в Node.js	          ✔ (із .mjs або type)	        ✔
                   ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
                   Динамічність	              ✘ (статичний)	                ✔ (динамічний require)
                   ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

                                      ECMAScript — це стандарт JavaScript
                                     ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

 ECMAScript (ES) — це офіційний стандарт мови програмування JavaScript, який визначає норми реалізації JavaScript мови


 ECMAScript ВИЗНАЧАЄ Й МОЖЕ ЗМІНЮВАТИ ТАКІ КЛЮЧОВІ АСПЕКТИ JS МОВИ:
    ‾‾‾‾‾‾‾‾   ‾‾‾‾‾‾‾‾‾‾‾‾‾‾

   1. Правила синтаксису — як правильно писати код
 ‾‾‾‾‾
      ◦ де мають ставитися дужки {}, (), []

      ◦ де потрібна крапка з комою — і коли її можна опустити (автоматичне додавання)

           У JS крапка з комою (;) потрібна для завершення інструкції

           АЛЕ у багатьох випадках JS дозволяє не ставити крапку з комою, бо в мові працює механізм
           автоматичного додавання крапок з комою (Automatic Semicolon Insertion, ASI)

      ◦ порядок ключових слів — наприклад, function myFunc() {} (а не myFunc function {})

      ◦ що вважається помилкою синтаксису


   2. Ключові слова — if, for, let, const, class, import, export тощо
 ‾‾‾‾‾

   3. Типи даних — рядки, числа, булеві значення, null, undefined, об’єкти, масиви, функції, Symbol, BigInt
 ‾‾‾‾‾

   4. Поведінку конструкцій мови:
 ‾‾‾‾‾
      ◦ об’єктів (Object)

      ◦ функцій (Function)

      ◦ класів (Class)

      ◦ операторів (+, ===, typeof, instanceof тощо)

      ◦ обробки помилок (try/catch, throw), тощо

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
                                     JavaScript — це реалізація ECMAScript
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

                                                  BABEL
                                                ‾‾‾‾‾‾‾‾‾

 Babel — це інструмент, який перекладає сучасний JS (ES6+) у старішу версію — (ES5), щоб код працював у всіх браузерах

 ЩО САМЕ ПЕРЕКЛАДАЄ BABEL:

    1. let, const               →    var

    2. стрілкові функції        →    звичайні

    3. класи class              →    функції-конструктори з прототипами

    4. модулі import/export     →    CommonJS (модулі підключаються через require і експортуються через module.exports)

    5. async/await              →    проміси

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
                      ❗fetch розпізнає HTTP статус коди, але сам їх не обробляє ❗

        він вважає будь-яку відповідь від сервера успішною, якщо HTTP-запит пройшов без мережевих помилок
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

                                             TASK: TODOS

import { getTodos, addTodo, toggleTodo, deleteTodo } from "./api.js";
import { createTodo } from "./ui.js";

const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");

async function init() {
    todoList.innerHTML = "<span>Loading...</span>";

    try {
        const todos = await getTodos();
        todoList.innerHTML = "";

        todos.forEach(todo => {
            const li = createTodo(todo);
            todoList.appendChild(li);
        });
    } catch (err) {
        console.log(err.message);
    }
}


todoForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = todoInput.value.trim();

    if (!title) {
        return;
    }

    try {
        const todo = await addTodo(title);

        const li = createTodo(todo);
        todoList.appendChild(li);

        todoInput.value = "";
    } catch (err) {
        console.log(err.message)
    }

});

todoList.addEventListener("change", async (e) => {
    if (e.target.classList.contains("toggle-checkbox")) {

        const todoId = Number(e.target.parentElement.dataset.id);
        const checked = e.target.checked;

        try {
            await toggleTodo(todoId, checked)
            e.target.parentElement.classList.toggle("done");
        } catch (err) {
            console.log(err.message)
        }
    }
})

todoList.addEventListener("click", async (e) => {
    if (e.target.classList.contains("delete-btn")) {
        e.target.disabled = true;

        const todoId = Number(e.target.parentElement.dataset.id);

        try {
            await deleteTodo(todoId);
            e.target.parentElement.remove();
        } catch (err) {
            console.log(err.message)
        }
    }
})

init()

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

                                                Node.js
                                             ‾‾‾‾‾‾‾‾‾‾‾‾‾

 Node.js — це середовище виконання JavaScript поза браузером, тобто:

      ◦ воно встановлюється на комп’ютер як окремий софт (програма, як наприкад Python або Java)

      ◦ працює в операційній системі напряму (Windows, macOS, Linux)

      ◦ не залежить від браузера


‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾*/



