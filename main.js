                                                                                                                      /*
 DOMContentLoaded — це подія в JavaScript, яка спрацьовує, коли HTML-документ повністю завантажено та оброблено, без
 очікування завантаження стилів, зображень або інших ресурсів.

 Тобто коли браузер закінчує зчитувати HTML-структуру сторінки, але ще не дочекався картинок, CSS чи шрифтів — виникає
 подія DOMContentLoaded.

 Ця подія потрібна щоб запускати JS-код лише тоді, коли DOM (об'єктна модель документа) вже готова до роботи.
 Наприклад, якщо ви хочете змінити якийсь елемент на сторінці через JS — потрібно, щоб він вже був завантажений у DOM.


СИНТАКСИС:

document.addEventListener("DOMContentLoaded", function () {
  console.log("The page is fully loaded (HTML), it's safe to work with the DOM");
});


ПОРІВНЯННЯ:
  ◦ DOMContentLoaded — коли HTML завантажено і оброблено, без очікування зображень, CSS тощо
  ◦ load — коли все (включно з зображеннями, CSS тощо) завантажено

 load — це подія, яка спрацьовує, коли вся сторінка повністю завантажена, включаючи всі ресурси:
 HTML, CSS, JavaScript, зображення, шрифти, відео тощо.

------------------------------------------------------------------------------------------------------------------------
Якщо функція отримує якісь дані - використовуй в назві get
Якщо функція надсилає дані - create або post


STRICT MODE

"use strict" — це спеціальна директива у JS, яка вмикає строгий режим роботи інтерпретатора.
Вона допомагає писати безпечніший та менш помилковий код.

Директива — це спеціальна інструкція для JavaScript-інтерпретатора. Вона не є командою чи виразом, а просто дає вказівку
як саме обробляти код. У JavaScript директиви — це просто рядки коду у лапках на початку скрипту або функції.

Тобто директива — це особливий рядок, що дає інтерпретатору інструкцію, як обробляти код.


"use strict"
   ◦ забороняє використання змінних без оголошення:
      "use strict";
       x = 10;                   ❌ ReferenceError: x is not defined

   ◦ не дозволяє використовувати зарезервовані слова:
      "use strict";
      let interface = 5;         ❌ SyntaxError

   ◦ обмежує прив'язку this:
      Якщо звичайна функція (function declaration або expression, не стрілкова функція) оголошена в global scope або
      викликається поза контекстом об'єкта (не як метод об'єкта), то в strict mode значення this всередині неї буде
      undefined, а не посиланням на глобальний об’єкт window.

      "use strict";
       function showThis() {
           console.log(this);     ❌ undefined (а не window)
       }
       showThis();


    ◦ не дозволяє дублікати імен параметрів:
       "use strict";
       function sum(a, a) {}       ❌ SyntaxError

    ◦ показує більше помилок, які зазвичай ігноруються:
       Наприклад, якщо ви намагаєтесь змінити, додати або видалити властивість в об'єкті, який не можна змінювати

------------------------------------------------------------------------------------------------------------------------

ПРИНЦИПИ РОЗРОБКИ

 1. KISS  —  Keep It Simple, Stupid
-------------------------------------
Не додавай зайвих перевірок або логіки, яка не має прямої користі в контексті завдання
(все спрощуй й не додавай нічого надмірного)


TASK 1: Перевірити чи число парне

function isEven(number) {
    if (typeof number === 'number' && !isNaN(number)) {
        if (number % 2 === 0) {
            return true
        } else {
            return false
        }
    }
}
console.log(isEven(7));  // false

       ↓ ↓ ↓

function isEvenKiss(number) {
    return typeof number === 'number' && number % 2 === 0;
}
console.log(isEvenKiss(5));  // false



TASK 2: Чи є юзер адміном

function isAdmin(user) {
    if (user && user.role && user.role === "admin") {
        return true;
    } else {
        return false;
    }
}
console.log(isAdmin({name:'Anna', email:'anna@gmail.com', role: 'admin'}));  // true

      ↓ ↓ ↓

function isAdminKiss(user) {
    return user.role === 'admin';
}
console.log(isAdminKiss({name:'Anna', email:'anna@gmail.com', role: 'admin'}));  // true
console.log(isAdminKiss(56))   // false


 2. DRY  —  Don't Repeat Yourself
-----------------------------------
Одна й та сама логіка або дані не повинні дублюватися в коді.

Якщо ти бачиш однакові шматки коду в кількох місцях — це сигнал, що треба винести цю логіку в окрему функцію, змінну,
клас або модуль.


TASK 1: Згенеруй повідомлення для різних типів користувачів на сайті

const user1 = { name: "Anna", role: "admin" };
const user2 = { name: "Kate", role: "editor" };
const user3 = { name: "Chris", role: "viewer" };

console.log("Hello, Anna! Your role is admin. You have full access.");
console.log("Hello, Kate! Your role is editor. You can edit content.");
console.log("Hello, Chris! Your role is viewer. You can only view content.");

      ↓ ↓ ↓

const users = [
  { name: "Anna", role: "admin" },
  { name: "Kate", role: "editor" },
  { name: "Chris", role: "viewer" }
];

users.forEach(user => {
    greetUser(user);
});

function greetUser(user) {
  const message = `Hello, ${user.name}! Your role is ${user.role}. ${getRoleMessage(user.role)}`;
  console.log(message);
}

function getRoleMessage(role) {
    switch (role) {
        case "admin":
            return "You have full access.";
        case "editor":
            return "You can edit content.";
        case "viewer":
            return "You can only view content.";
        default:
            return "Role not recognized."
    }
}


 3. YAGNI  —  You Aren’t Gonna Need It
----------------------------------------
Не реалізовуй функціональність, поки в ній немає реальної потреби ("на майбутнє")

Під час розробки може виникнути спокуса:
     ◦ "А раптом потім потрібно буде ще оце?"
     ◦ "А якщо користувачі захочуть таку опцію?"
Це здається логічним, але насправді більшість передбачених “потім” речей — ніколи не знадобляться.

YAGNI каже: не витрачай час, поки немає конкретної потреби

  Реалізовуй функціональність:
     ◦ Коли є конкретна задача (ticket, task)
     ◦ Коли є обґрунтоване бізнес-пояснення, що ця функціональність вже потрібна
     ◦ Коли є фідбек від користувачів, що їм бракує певної функції


     Не пиши код, “бо колись, можливо, знадобиться”
     Пиши лише те, що потрібно зараз


 4. MVP — Minimum Viable Product (Мінімально життєздатний продукт)
--------------------------------------------------------------------
Концентруйся на MVP, а не на BDUF - "спочатку робочий код, всі покращення потім"

MVP — це перша, найпростіша версія продукту, яка:
  ◦ вже працює
  ◦ має тільки основні функції
  (додатково)
  ◦ дозволяє отримати зворотний зв’язок від користувачів
  ◦ створюється швидко й з мінімальними затратами

Мета MVP - перевірити гіпотезу або бізнес-ідею

MVP (або NVP - Near Viable Product (майже життєздатний продукт)) - це сучасний підхід, який протистоїть старому принципу
розробки BDUF, й цей сучасний підхід каже: "Не продумуй усе наперед, а зроби мінімальне NVP (або MVP) і перевір ідею".

BDUF — Big Design Up Front (Велике проєктування наперед) — це підхід до розробки, де вся архітектура, структура, дизайн
ретельно продумуються та документуються ще до початку програмування.

Це стратегія: "Спочатку ретельно спроєктуй, потім кодуй".


 5. SOLID
-----------
Формально SOLID — це набір принципів об'єктно-орієнтованого програмування (ООП), але з часом перші два принципи SRP
(Single Responsibility Principle) та OCP (Open/Closed Principle) стали настільки корисними й універсальними, що їх
широко використовують в програмуванні й поза межами ООП.


   ◦ SRP - Single Responsibility Principle (принцип єдиної відповідальності)
  ---------------------------------------------------------------------------
  Кожна функція повинна виконувати лише одну конкретну задачу, для вирішення якої ця функція й була створена
  (це вказується в назві функції). Якщо вона виконує більше ніж одну задачу — це призводить до змішання логіки
  й ускладнює підтримку.

    ◦ Кожна функція має відповідати тільки за одну річ
    ◦ Таку функцію зручно тестувати, розширювати або змінювати

  ❗️ Кожна функція повинна мати тільки одну причину для змін ❗️

   РОЗ'ЯСНЕННЯ:
    ◦ "Одна причина для змін" — це умовно: коли треба змінити код, ми повинні робити це тільки з однієї причини.
    ◦ Причини для змін — це різні фактори, які можуть змусити нас змінювати функцію.

    ПРИКЛАД:
    function saveUser(user) {

      if (!user.name) {                              // Перевірка даних користувача (чи є ім'я) - first responsibility
        throw new Error("Name is required");
      }

      database.save(user);                          // Збереження користувача в базу даних - second responsibility

      emailService.sendWelcomeEmail(user.email);   // Надсилання вітального листа користувачу - third responsibility
    }
                                              ↓ ↓ ↓

    function validateUser(user) {
      if (!user.name) {                            // Перевірка даних користувача (чи є ім'я) - first responsibility
        throw new Error("Name is required");
      }
    }

    function saveUserToDatabase(user) {
      database.save(user);                         // Збереження користувача в базу даних - first responsibility
    }

    function sendWelcomeEmail(user) {
      emailService.sendWelcomeEmail(user.email);  // Надсилання вітального листа користувачу - first responsibility
    }

    function saveUser(user) {                    // Викликаємо функції по черзі в одній функції
      validateUser(user);
      saveUserToDatabase(user);
      sendWelcomeEmail(user);
    }


   ◦ OCP - Open/Closed Principle (принцип відкритості/закритості)
  ---------------------------------------------------------------------------
  Код (функція) має бути відкритим для розширення, але закритим для змін.

  Тобто, коли змінюються вимоги — ми додаємо нові можливості зовні, не ламаючи і не змінюючи внутрішню логіку функції.

  Якщо функція вирішує одне завдання, то при розширенні програми ми не повинні лізти в середину цієї функції і
  переписувати її. Натомість — передаємо їй інші функції або дані, і вона адаптується.

  EXAMPLE: обробка чисел

  function processNumbers(numbers, operation) {
    if (operation === 'sum') {
      return numbers.reduce((acc, number) => acc + number, 0);
    } else if (operation === 'multiply') {
      return numbers.reduce((acc, number) => acc * number, 1);
    }
  }
  console.log(processNumbers([2, 5, 8], "sum")) // 15

 // Щоразу коли захочеш додати нову операцію — доведеться редагувати processNumbers

                    ↓ ↓ ↓

  function processNumbers(numbers, operationFn) {
    return operationFn(numbers);
  }

  const sum = nums => nums.reduce((acc, number) => acc + number, 0);
  const multiply = nums => nums.reduce((acc, number) => acc * number, 1);
  const average = nums => sum(nums) / nums.length;

  console.log(processNumbers([2, 5, 8], sum));      // 15
  console.log(processNumbers([2, 5, 8], multiply)); // 80
  console.log(processNumbers([2, 5, 8], average));  // 5

  // Головна функція processNumbers не змінюється взагалі. Ми лише передаємо їй інші функції.

  ЗАСТОСУВАННЯ В РЕАЛЬНОМУ КОДІ:
    ◦ Пишеш функцію для обробки подій? Передавай обробник як параметр.
    ◦ Потрібно фільтрувати масив по-різному? Передавай функцію-фільтр.
    ◦ Потрібна валідація? Робиш функцію, яка приймає набір перевірок.


  ANOTHER EXAMPLE:

  function getDiscount(userType) {
      if (userType === "new") {
          return 10;
      } else if (userType === "regular") {
          return 5;
      } else if (userType === "vip") {
          return 15;
      }
  }
            ↓ ↓ ↓

  const discountMap = {
      new: 10,
      regular: 5,
      vip: 15,
  }

  function getDiscount(userType) {
      return discountMap[userType] ?? 0;   // якщо тип не знайдено — повертає 0
  }

  // ?? 0 — це оператор nullish coalescing: повертає 0, якщо discountMap[userType] є undefined або null

  console.log(getDiscount('vip'));      // 15
  console.log(getDiscount('new'));      // 10
  console.log(getDiscount('unknown'));  // 0

  discountMap.partner = 12;    // тепер щоб додати новий тип ми просто додаємо нове поле в discountMap
                              // функція getDiscount залишається недоторканою, ми лише розширюємо дані


 6. APO — Avoid Premature Optimization (уникайте передчасної оптимізації)
---------------------------------------------------------------------------
Спочатку пиши простий, читабельний та чистий код, який описує твої перетворення даних. Не хвилюйся одразу про швидкість.

Тобто, не намагайся зробити код супер-швидким чи "ефективним" до того, як він хоча б запрацює правильно і реально стане
повільним.



 7. Occam's Razor — Бритва Оккама           "Серед кількох рішень обирай найпростіше, яке все ще працює" - ОБРІЗАЙ ЗАЙВЕ
-----------------------------------
  Цей принцип пішов від філософії Вільяма Оккама, середньовічнього філософа.

  СУТЬ ПРИНЦИПУ: Не множ сущностей без потреби (не ускладнюй, якщо можна простіше).

    ◦ Пиши тільки те, що реально потрібно  →  Менше — краще. Та сама логіка, менше шуму.
    ◦ Не ускладнюй логіку без причин
    ◦ Уникай абстракцій, які не дають користі прямо зараз
    ◦ Вибирай найпростіше рішення, яке працює
                    ↓
    ◦ Рішення яке має менше коду — має менше шансів на баги
    ◦ Не оптимізуй те, що ще не працює
    ◦ Чим менше залежностей, тим менше болю

ОБРІЗАЙ ЗАЙВЕ:

  ◦ Зайвий умовний блок (if), якщо можна без нього.
  ◦ Зайвий рівень абстракції (дві функції, які роблять одну дію).
  ◦ Зайві перевірки, які ніколи не спрацюють.
  ◦ Зайві оптимізації, які нічого не дають.
  ◦ Зайвий код "на майбутнє", який ніколи не стане потрібним.


------------------------------------------------------------------------------------------------------------------------

 ?.  —  optional chaining (опціональне ланцюжкове звертання)

 Це оператор, який дозволяє безпечно звертатися до вкладених властивостей, елементів масивів або методів об'єкта, не
 кидаючи помилку, якщо щось у ланцюжку звернень відсутнє (тобто null або undefined).

 Оператор ?. зупиняє виконання:
  ◦ Якщо ліва частина = null або undefined
  ◦ І повертає undefined, не переходячи далі

                ❗️ ?. завжди перевіряє те, що ЗЛІВА від нього, чи воно не null і не undefined ❗️
   ️                    ❗️ user?.name теж саме що (user !== null && user !== undefined) ❗️

ПРИКЛАДИ
---------------------------------
Перевіряємо, чи не дорівнює user null або undefined

  const user = null;
  console.log(user?.name) // undefined

"Якщо user існує — виведи його name. Якщо user не існує — поверни undefined, не падай з помилкою"

---------------------------------
Перевіряємо чи не є address значенням null або undefined

  const userData = {
      name: "Anna",
      address: null
  }
  console.log(userData.address?.country); //undefined (not a TypeError)

---------------------------------
Перевіряємо чи існує метод sayHi у об'єкті user (чи він не null і не undefined)

  const user = {
    name: "John",
    email: "john@gmail.com",
  }

  user.sayHi()     // ❌ TypeError
  user.sayHi?.()  // немає помилки

---------------------------------
Перевіряємо чи існує метод sayHi у об'єкті user (чи він не null і не undefined)

const users = [
  { name: "Anna", address: { city: "Kyiv" } },
  { name: "John", address: null },
  { name: "Emily" },
  {}
];

console.log(users[0]?.address?.city); // Kyiv
console.log(users[1]?.address?.city); // undefined   address === null
console.log(users[2]?.address?.city); // undefined   не існує властивості address
console.log(users[3]?.address?.city); // undefined   не існує властивості address
console.log(users[4]?.address?.city); // undefined   в масиві user не існує елемента з індексом 4

---------------------------------
Оператор ?. у DOM використовується для безпечного звернення до елементів сторінки, які можуть не існувати

const title = document.querySelector("h1"); //елемента h1 не існує в HTML розмітці
console.log(title?.textContent); //undefined

------------------------------------------------------------------------------------------------------------------------

TASK 1: SLIDER

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide"); // повертає NodeList (колекцію елементів) усіх елементів з класом .slide ⁉️
const dotsContainer = document.querySelector(".slider-dots");

console.log(slides);

const slidesToShow = 2;
const gap = 5
const slideWidth = slides[0].offsetWidth + gap;    // ширина одного слайда + 5px (gap між ними)
const maxIndex = slides.length - slidesToShow;   // ЗАПОБІГАННЯ ПОРОЖНІМ СЛАЙДАМ  (maxIndex визначає останній допустимий індекс (currentIndex) для першого з двох видимих слайдів)
let currentIndex = 0;    // це індекс першого слайду з тих, що зараз показуються
let dots = [];

nextBtn.addEventListener("click", function () {
    currentIndex += slidesToShow;
    if (currentIndex >= maxIndex) currentIndex = maxIndex;  // > працює корректно, але >= використовують частіше, бо >= страхує навіть зайві ситуації
    updateSlider()

    prevBtn.disabled = false;
})

prevBtn.addEventListener("click", function () {
    currentIndex -= slidesToShow;
    if (currentIndex < 0) currentIndex = 0;  // в нас вже є UI-блокування (prevBtn.disabled). Цей рядок - підстраховка на випадок якщо хтось обійде UI
    updateSlider()
})

function updateSlider() {
    const offset = currentIndex * slideWidth;  //зміщення
    console.log(offset);
    track.style.transform = `translateX(-${offset}px)`;

    prevBtn.disabled = currentIndex === 0; // це просто УМОВНЕ ПРИСВОЄННЯ з TRUE або FALSE

-------------------
Тут currentIndex === 0 повертає true або false, залежно від того, чи рівний currentIndex нулю.
Якщо це так, то prevBtn.disabled буде встановлено в true, інакше — в false.

ЗАМІСТЬ

    if (currentIndex === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }
-------------------

    nextBtn.disabled = currentIndex >= maxIndex;

//  Визначаємо яка з крапок буде активною
    const activeDotIndex = Math.ceil(currentIndex / slidesToShow); //покращення
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === activeDotIndex); // ("клас", умова)
        // if (index === Math.ceil(currentIndex / slidesToShow)) {
        //     dot.classList.add("active");
        // } else {
        //     dot.classList.remove("active");
        // }
    });
}

function createDots() {
    const totalDots = Math.ceil(slides.length / slidesToShow);
    for (let i = 0; i < totalDots; i++) {
        const li = document.createElement("li");
        const dot = document.createElement("button");
        dot.classList.add("slider-dot");
        li.appendChild(dot);
        if (i === 0) dot.classList.add("active");

        li.addEventListener("click", () => {
            currentIndex = Math.min(i * slidesToShow, maxIndex); //покращення
            // currentIndex = i * slidesToShow;
            // if (currentIndex >= maxIndex) currentIndex = maxIndex;
            updateSlider();
        });
        dotsContainer.appendChild(li);
        dots.push(dot);
    }
}

createDots();
updateSlider();


------------------------------------------------------------------------------------------------------------------------

TASK 2: SLIDER

 */
'use strict';

const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const track = document.querySelector(".slider__track");
let slides = document.querySelectorAll(".slider__item");
const dotsContainer = document.querySelector(".slider__dots");

const firstSlide = slides[0].cloneNode(true); // копія першого слайда
firstSlide.classList.add("clone-end");

const lastSlide = slides[slides.length - 1].cloneNode(true); // копія останнього слайда
lastSlide.classList.add("clone-start");

/*-------------------
cloneNode — це метод, який створює копію елемента DOM

СИНТАКСИС:   const newElement = element.cloneNode([true OR false]);

   ◦ cloneNode(false) - копіюється тільки сам елемент, без дочірніх елементів
   ◦ cloneNode(true) - копіюється весь елемент разом з усім його вмістом всередині
-------------------*/

track.appendChild(firstSlide); // додаємо firstSlide як останній слайд в track
track.insertBefore(lastSlide, slides[0]); // додаємо lastSlide перед першим справжнім слайдом в track

slides = Array.from(document.querySelectorAll('.slider__item')); // оновлюємо список слайдів після додавання клонів (Array.from не обов'язково було використовувати)

/*-------------------
Array.from — це вбудований метод JS, який створює справжній масив (Array) із:

  ◦ псевдомасиву (наприклад, NodeList, arguments)
  ◦ або ітерованого об’єкта (наприклад, рядка)

ПЕРЕВАГИ:
  ◦ Можна використовувати методи масиву: .map(), .filter(), .reduce(), тощо
  ◦ Зручно перетворювати нестандартні колекції на звичайні масиви
-------------------*/

let currentIndex = 1; // тому що перший справжній слайд тепер не на нульовій позиції
const slideWidth = slides[0].offsetWidth;
let dots = [];

track.style.transform = `translate(-${slideWidth * currentIndex}px)`;
setTimeout(() => {
    track.style.transition = 'transform 0.5s ease';
}, 50);

let isMoving = false;

nextBtn.addEventListener("click", () => {
    if (isMoving) return;
    isMoving = true;
    currentIndex++;

    updateSlider()
})

prevBtn.addEventListener("click", () => {
    if (isMoving) return;
    isMoving = true;
    currentIndex--;

    updateSlider()
})

// transitionend — це подія браузера, яка спрацьовує, коли CSS-перехід (transition) завершився.
// Це означає: "Як тільки слайдер закінчить свій рух — запусти ось цей код"

track.addEventListener("transitionend", () => {
    isMoving = false;

    if (slides[currentIndex].classList.contains("clone-end")) {
        track.style.transition = "none";     // вимикаємо анімацію щоб не було плавного ефекту — нам треба зробити телепорт
        currentIndex = 1;   // змінюємо currentIndex клона на індекс справжнього останнього слайду

        track.style.transform = `translate(-${slideWidth * currentIndex}px)`;  // переміщуємо слайдер (телепортуємо користувача на справжній останній слайд)

    // Потім через 50 мс знову вмикаємо плавну анімацію
        setTimeout(() => {
            track.style.transition = "transform 0.5s ease-in-out";
        }, 50)
    }

    if (slides[currentIndex].classList.contains("clone-start")) {
        track.style.transition = "none";
        currentIndex = slides.length - 2;

        track.style.transform = `translate(-${slideWidth * currentIndex}px)`;

        setTimeout(() => {
            track.style.transition = "transform 0.5s ease-in-out";
        }, 50);
    }
});


/*-------------------

Спочатку нам потрібно щоб переміщення відбулось миттєво. Ми хочемо телепортувати слайдер без анімації.
Тому пишемо:
    track.style.transition = "none";

Але браузеру потрібен момент часу, щоб "помітити", що ми перемістили слайд без анімації. Бо браузер не виконує кожен
рядок окремо одразу на екрані. Він збирає зміни в пам’яті, а потім раз на кілька мілісекунд рендерить результат.


Й без setTimeout браузер такий:

"Ти сказав мені вимкнути transition, потім одразу перемістити слайд, потім знову увімкнути transition.
 Я Просто зроблю все з анімацією — бо я навіть не встиг перемалювати екран між цими діями."

Тож якщо одразу повернути анімацію — браузер може її застосувати і до телепорта

Це буде виглядати так:
  ◦ ми хотіли, щоб стрибок був миттєвий (без плавності)
  ◦ але браузер не встиг помітити, що "transition = none"
  ◦ і застосував 0.5s навіть до стрибка → зʼявляється "дивна дерганина"


 setTimeout(..., 50) — це пауза, щоб браузер встиг зарендерити

Ми даємо йому 50 мс:
  ◦ перемалюй екран без анімації (після переміщення слайду)
  ◦ ...почекай...
  ◦ тепер можеш знову вмикати transition

-------------------

setTimeout - це функція в JS, яка дозволяє відкласти виконання коду на певний час.
Вона каже браузеру: "Зроби щось через N мілісекунд, а не одразу."

СИНТАКСИС:   setTimeout(функція, час_у_мс);

   ◦ функція - це код, який треба виконати
   ◦ час_у_мс - це затримка в мілісекундах (1 сек = 1000 мс)

-------------------*/

function updateSlider() {
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

    let dotIndex;
    if (currentIndex === 0) {
        dotIndex = dots.length - 1;
    } else if (currentIndex > dots.length) {
        dotIndex = 0;
    } else {
        dotIndex = currentIndex - 1;
    }

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === dotIndex);
    })
}

function createDots() {
    const totalDots = slides.length -2;

    for (let i = 1; i <= totalDots; i++) {
        const dot = document.createElement("button");
        dot.classList.add('dot');

        dotsContainer.appendChild(dot);
        dots.push(dot);

        if (i === 1) {
            dot.classList.add('active');
        }

        dot.addEventListener('click', () => {
            if (isMoving) return;
            isMoving = true;
            currentIndex = i;
            updateSlider();
        })
    }
}

createDots();
updateSlider();

/*----------------------------------------------------------------------------------------------------------------------

NodeList — це спеціальний об'єкт, схожий на масив, який повертає JS, коли ми використовуємо document.querySelectorAll()
або деякі інші методи для вибору елементів DOM.

NodeList — це колекція (список) DOM-вузлів (Node) — тобто елементів HTML-документу, які були знайдені за допомогою
певних методів.

Це не масив, але виглядає дуже схоже:

  ◦ Має length
  ◦ Має індекси: NodeList[0], NodeList[1] і т.д.
  ◦ Ітерується через for...of, forEach


Основні факти про NodeList:

             ВЛАСТИВІСТЬ	                      ЗНАЧЕННЯ

             Не зовсім масив	                  Має індекси (items[0], items[1], …)
             Має .length	                      Можна дізнатися кількість елементів
             Можна використовувати forEach()	  (у сучасних браузерах)
             Не має методів масивів	              map(), filter(), reduce() — не працюють
             Можна перебирати в for...of	      Підтримує ітерацію


---------------------------------------------

DOM вузли (node)

Це елементи структури документа HTML, які браузер представляє у вигляді об'єктів у Document Object Model (об’єктній моделі документа).

Коли браузер завантажує HTML-сторінку, він перетворює її у дерево об'єктів. Кожен елемент (тег, текст, коментар тощо) у
цьому дереві — це вузол (node).

 Основні типи DOM-вузлів:

 1. Element  —  HTML-теги: <div>, <p> тощо
 2. Text	 — 	Текст всередині елементів
 3. Comment	 — 	Коментарі: <!-- коментар -->
 4. Document  — Весь HTML-документ (об'єкт document)
 5. DocumentFragment  —  Тимчасовий контейнер для вузлів

------------------------------------------------------------------------------------------------------------------------
  HTML                                                         DOM

  <!DOCTYPE html>                                              Document
  <html>                                                       └── html
    <body>                                                         └── body
      <!-- This is comment -->                                         ├── comment - "This is comment"
      <div id="container">                                             └── div - id="container"
        <p>Hello, <span>World!</span></p>                                  └── p
      </div>                                                                   ├── text - "Hello, "
    </body>                                                                    └── span
  </html>                                                                          └── text - "World!"
----------------------------------------------------------------------------------------------------------------------*/



