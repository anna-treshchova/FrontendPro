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


------------------------------------------------------------------------------------------------------------------------
 ?.  —  optional chaining (опціональне ланцюжкове звертання)


------------------------------------------------------------------------------------------------------------------------
*/










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
                                                                                                                      /*
Тут currentIndex === 0 повертає true або false, залежно від того, чи рівний currentIndex нулю.
Якщо це так, то prevBtn.disabled буде встановлено в true, інакше — в false.

ЗАМІСТЬ

    if (currentIndex === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }
                                                                                                                      */
    nextBtn.disabled = currentIndex >= maxIndex;

//  Визначаємо яка з крапок буде активною
    const activeDotIndex = Math.ceil(currentIndex / slidesToShow);
    dots.forEach((dot, index) => {  //проходимося по всіх крапках й якщо індекс крапки = activeDotIndex → додаємо клас "active", якщо ні — прибираємо його
        dot.classList.toggle("active", index === activeDotIndex);
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
            currentIndex = i * slidesToShow;
            if (currentIndex > maxIndex) currentIndex = maxIndex;
            updateSlider();
        });
        dotsContainer.appendChild(li);
        dots.push(dot);
    }
}

createDots();
updateSlider();

/*
------------------------------------------------------------------------------------------------------------------------

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
------------------------------------------------------------------------------------------------------------------------
*/



