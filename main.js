/*

INPUT EVENTS

1. input type="text"

 ◦ "input"
----------
Виникає щоразу, коли юзер змінює значення поля вводу: додає або видаляє символ, ставить пробіл тощо

 event "input":
   ◦ реагує миттєво,
   ◦ підходить для створення "живого" інтерфейсу (наприклад: автопідказки в рядку пошуку)

document.querySelector("#textInput").addEventListener("input", (e) => {
    console.log(e.target.value);
})


 ◦ "change"
-----------
Спрацьовує лише після втрати фокусу елементом (blur), якщо значення змінилось

document.querySelector("#textInput").addEventListener("change", e => {
    console.log(e.target.value);
})


 ◦ "focus"
-----------
Спрацьовує, коли елемент отримує фокус (коли юзер клацає по полі вводу або переходить до нього через клавішу Tab

document.querySelector("#textInput").addEventListener("focus", e => {
    console.log("Focus");
})


 ◦ "blur"
-----------
Спрацьовує, коли елемент втрачає фокус — тобто користувач перейшов на інший елемент або натиснув десь поза полем

document.querySelector("#textInput").addEventListener("blur", e => {
    console.log("Blur");

    const textError = document.querySelector("#textError");
    if (!e.target.value) {
        textError.textContent = "Please enter a value";
    } else {
        //Collect data from input
        textError.textContent = "";
    }
})

"focus" and "blur" є не тільки на input, але й майже на кожному елементі сторінки (div, img, button, etc)


 ◦ "keypress"                                                              ⚠️ застаріла - її вилучено з нових стандартів
--------------
Працювала тільки для "видимих" символів: букв, цифр, пробілу. Не реагувала на Shift, Ctrl, Alt, Escape, тощо.


 ◦ "keydown"
--------------
Спрацьовує, коли натиснута клавіша. Це перша подія, яка виникає під час натискання.

document.querySelector("#textInput").addEventListener("keydown", e => {
    console.log(e.key); //виводить в консоль клавішу, яку було натиснуто
})


 ◦ "keyup"
------------
Спрацьовує, коли клавішу відпустили. Це подія, що йде після keydown

document.querySelector("#textInput").addEventListener("keyup", e => {
    console.log(e.key));
})

"keydown" та "keyup" будуть спрацюють лише коли елемент буде в фокусі.


2. input type="checkbox"

 ◦ "change"
-------------

document.querySelector("#checkboxInput").addEventListener("change", e => {
    console.log(e.target.checked); //true false true false
})


3. input type="range"

 ◦ "change"
-------------

document.querySelector("#rangeInput").addEventListener("change", e => {
    console.log(e.target.value); //19  85  57
})

--------------------------------------------------------------------------------------------------------------------*//*

SELECT EVENTS

 ◦ "change"
-------------

document.querySelector("#genderSelect").addEventListener("change", function(e) {
    console.log(e.target.value); //male female other
})


const countrySelect = document.querySelector("#countrySelect");
const countryBtn = document.querySelector("#setCountryBtn");
let autoKey = null;

countrySelect.addEventListener("change", function (e) {
    console.log(e.target.value);
})

countryBtn.addEventListener("click", function () {
    countrySelect.value = autoKey;
    console.log(countrySelect.value);
})

function selectAutoCountry(key) {
    const autoOption = countrySelect.querySelector(`option[value="${key}"]`)
    if (!autoOption) {
        console.log(`Option with value "${key}" not found`)
        return;
    }
    countryBtn.textContent = `Select ${autoOption.textContent}`;
    autoKey = key;
}

selectAutoCountry("ua");

--------------------------------------------------------------------------------------------------------------------*//*

RADIO-BUTTON EVENTS

 ◦ "change"
-------------

document.querySelector("#radioInput").addEventListener("change", (e) => {
    console.log(e.target.value); //on
})


const radioInput = document.querySelector("#radioInput");

radioInput.addEventListener("change", (e) => {
    console.log(e.target.checked); //true (прибрати checked неможливо, але ми можемо це змінити вручну через кнопку)
})

document.querySelector("#radioBtn").addEventListener("click", () => {
    radioInput.checked = false;
})


const radioInputBlue = document.querySelector("#blueTheme");
const radioInputGray = document.querySelector("#grayTheme");
const radioInputNoTheme = document.querySelector("#noTheme");
const body = document.querySelector(".body");

radioInputBlue.addEventListener("change", (e) => {
    console.log("Blue Theme: " + e.target.checked);
    if (e.target.checked) {
        body.classList.remove("theme_gray");
        body.classList.add("theme_blue");
    }
})

radioInputGray.addEventListener("change", (e) => {
    console.log("Gray Theme: " + e.target.checked);
    if (e.target.checked) {
        body.classList.remove("theme_blue");
        body.classList.add("theme_gray");
    }
})

document.querySelector("#radioBtn").addEventListener("click", () => {
    radioInputNoTheme.checked = true;
    body.classList.remove("theme_gray","theme_blue");
})

--------------------------------------------------------------------------------------------------------------------*//*

 FORM

 Це тег, який об'єднує різні поля вводу (inputs). Найголовніша подія для форми — це "submit". Її можна викликати або за
 допомогою кнопки з типом submit, або натисканням клавіші Enter, коли форма знаходиться у фокусі.

 Основна мета використання форми - це збір даних з полів вводу (inputs), які потім можуть бути надіслані на сервер або
 оброблені на клієнті (дані, які користувач ввів у форму, не надсилаються на сервер, а обробляються прямо в браузері
 користувача — за допомогою JavaScript).


const firstForm = document.querySelector("#firstForm");

firstForm.addEventListener("submit", function (e) {
    e.preventDefault(); //скасовує стандартне відправлення форми і перезавантаження сторінки
    console.log("Submitted");

});


---------
preventDefault() — це метод об'єкта події (event) у JavaScript

preventDefault() скасовує дію, яку браузер виконує автоматично у відповідь на подію.
Тобто поведінку елемента, яка йде "за замовчуванням" (default behavior)

НАПРИКЛАД:
   За замовчуванням, при натисканні на кнопку "submit" у form, браузер відправляє форму на сервер і перезавантажує
   сторінку. Щоб цього уникнути, можна викликати preventDefault() в обробнику події.

   Або, за замовчуванням, при натисканні на посилання <a href="...">, браузер переходить за вказаною адресою у тій самій
   вкладці, змінюючи поточну сторінку (або у новій, якщо вказано target="_blank").
   Щоб цього уникнути, можна викликати preventDefault() у обробнику події й перехід за адресою не відбудеться — тобто
   браузер не відкриє нову сторінку і не змінить поточну.
---------


const userForm = document.querySelector("#userForm");

userForm.addEventListener("submit", function (e) {
    e.preventDefault();

//  console.log(firstForm.querySelector("#email").value) //такий спосіб діставання значення з форми працює, але є краща альтернатива - FormData

    const formData = new FormData(firstForm);
    formData.set("isAdmin", "true");

    for (const [key,value] of formData.entries()) {   // деструктуризація ([key, value]) автоматично розпаковує масив у змінні key та value
        console.log(key, ":", value);          // email : anna.treshchova@gmail.com
    }                                          // password : 1234anna
});                                            // name : Anna
                                               // surname : Smith
                                               // isAdmin : true


FormData — це вбудований клас у JS, який вміє створювати об’єкти з даними форми. new створює новий екземпляр (instance)
цього класу.


new — це ключове слово в JS, яке створює новий об'єкт на основі функції-конструктора або класу.

Тобто new:
1. Створює новий об’єкт
2. Викликає функцію-конструктор або клас
3. Автоматично прив’язує this до нового об’єкта
4. Повертає цей об’єкт


Цикл for...of дозволяє перебирати значення ітерабельних об'єктів (МАСИВИ, РЯДКИ, Map, Set, FormData)

------------------------------------------------------------------------------------------------------------------------

 ЯК ПРАЦЮЄ FormData ПРИ САБМІТІ ФОРМИ:

 Коли форма надсилається (подія "submit"), браузер автоматично збирає всі дані з полів форми у спеціальну структуру —
 об'єкт, що є екземпляром вбудованого класу FormData, — і надсилає їх на сервер, якщо відправку не зупинено за допомогою
 event.preventDefault().

❗️У цьому випадку ви не створюєте FormData вручну — все відбувається "під капотом".


 Якщо ж ми викликаємо event.preventDefault() і перехоплюємо подію submit, то браузер не надсилає форму, й нам потрібно
 вручну створити екземпляр класу FormData (який є об'єктом) у JavaScript для подальшої роботи з даними.

 ТОБТО:

    ◦ Нам потрібно вручну створити екземпляр класу FormData, передаючи DOM-елемент форми.

    ◦ Цей конструктор збирає всі дані з форми автоматично (так само, як це зробив би браузер під час сабміту).

    ◦ Але тепер ми маємо повний контроль: можемо читати, змінювати, фільтрувати, перевіряти або надсилати ці дані на
      сервер через fetch, не оновлюючи сторінку.


 ВИСНОВОК:
 FormData може створюватись автоматично браузером або вручну через JS. В обох випадках механізм один і той самий — збір
 пар name: value з полів форми. Різниця в тому, що вручну ми отримуємо об'єкт, з яким можемо працювати перед відправкою.

------------------------------------------------------------------------------------------------------------------------

 Хоча об'єкт, що є екземпляром вбудованого класу FormData схожий на звичайний JS-об’єкт, він має свої особливості:

1. Ми не можемо напряму читати чи змінювати поля через крапку (наприклад, formData.name = 'Anna' не спрацює).

    const userForm = document.querySelector("#user-form");
    userForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(userForm);
        console.log(formData.name); //undefined
    });

---------------------------------------

2. Доступ до даних можливий лише через методи: get, set, append, delete тощо.

    const userForm = document.querySelector("#user-form");
    userForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(userForm);

//  GET(name) - отримує перше значення з ключем (email)
        console.log(formData.get("email"));   // anna.treshchova@gmail.com


//  SET(name, value) - додає або замінює значення з ключем (email)
        formData.set("email", "changed.email@gmail.com");  // замінює
        console.log(formData.get("email"));   // changedemail@gmail.com

        formData.set("isAdmin", "true");  // додає
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);  // з'явилося поле isAdmin: true
        })


//  APPEND(name, value) - додає значення з ключем (email). Якщо такий ключ уже є — значення не замінюється, а додається ще одне
        formData.append("age", "23"); // додає нове поле age: 23
        formData.append("age", "24"); // додає ще одне поле  age: 24

        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);  // маємо два поля   age: 23,  age: 24
        })


//  DELETE(name) - видаляє усі значення з вказаним ключем
        formData.delete("age");
        console.log(formData.get("age")); // null (всі поля з ключем "age" були видалені)


//  HAS(name) - перевіряє, чи є значення з таким ключем (повертає true або false)
        console.log(formData.has("email"));  // true
        console.log(formData.has("age"));   // false
    });

---------------------------------------

3. Ми також можемо перебирати всі пари ключ-значення за допомогою методу forEach() або циклу for...of разом із методами
     entries(), keys() або values().

  ◦ forEach
 ------------
       const userForm = document.querySelector('#user-form');

       userForm.addEventListener("submit", function (e) {
           e.preventDefault();

           const formData = new FormData(userForm);
           formData.forEach((value, key) => {
               console.log(`${key}: ${value}`)   // email: anna.treshchova@gmail.com
           })                                    // password: 1234anna
       });                                       // name: Anna

  ◦ for...of   entries()
 ------------------------
       const userForm = document.querySelector('#user-form');

       userForm.addEventListener("submit", function (e) {
           e.preventDefault();

           const formData = new FormData(userForm);

           // деструктуризація ([key, value]) автоматично розпаковує масив у змінні key та value
           for (const [key, value] of formData.entries()) {
               console.log(`${key}: ${value}`)   // email: anna.treshchova@gmail.com
           }                                     // password: 1234anna
       });                                       // name: Anna

  ◦ for...of   entries()
 -------------------------
       const userForm = document.querySelector('#user-form');

       userForm.addEventListener("submit", function (e) {
           e.preventDefault();

           const formData = new FormData(userForm);

           for (const key of formData.keys()) {  // Перебір тільки ключів через for...of з keys()
               console.log(`Key: ${key}`)    // Key: email
           };                                // Key: password
       });                                   // Key: name

  ◦ for...of   values()
 -------------------------
       const userForm = document.querySelector('#user-form');

       userForm.addEventListener("submit", function (e) {
           e.preventDefault();

           const formData = new FormData(userForm);

           for (const value of formData.value()) {
               console.log(`Value: ${value}`)    // Value: anna.treshchova@gmail.com
           };                                    // Value: 1234anna
       })                                        // Value: Anna


ВИСНОВОК:
 Об’єкт, створений на основі вбудованого класу FormData, має "захищену" структуру — він не працює як звичайний JS-об'єкт.

 Замість прямого доступу до властивостей (через крапку), ви можете взаємодіяти з даними лише через спеціальні методи,
 такі як get(), set(), append(), delete(), forEach() тощо.


 ПЕРЕВАГИ використання FormData:
    •  Всі значення з полів <input>, <select>, <textarea> автоматично збираються.
    •  Дані формуються у вигляді пар ключ-значення, де ключем є атрибут name кожного поля.
    •  Ці дані можна одразу відправити на сервер через fetch або XMLHttpRequest, не обробляючи їх вручну.

 Але! Якщо ви хочете більш гнучкий контроль — наприклад:

    •  робити перевірки значень полів перед відправкою,
    •  обробляти помилки або підказки для користувача,
    •  не надсилати якісь певні поля

 Тоді FormData не завжди підходить. У таких випадках поля часто обробляються вручну за допомогою JavaScript.

------------------------------------------------------------------------------------------------------------------------

CLASS

◦ constructor functions   ❗️старіший спосіб❗️
---------------------------------------------

Раніше для створення нових однотипних об'єктів (тобто об'єктів, які мають однакову структуру і методи) використовували
функції-конструктори та прототипи в JS. Вони дозволяють створювати об'єкти з однаковою структурою і методами.

function User(name, email) {
 this.name = name;
 this.email = email;
 this.greet = function () {
     console.log(`Hello, ${this.name}! Welcome to our website. We'll contact you at ${this.email}.`);
 }
}

const user1 = new User("John","john@gmail.com");
user1.greet(); //Hello, John! Welcome to our website. We'll contact you at john@gmail.com.


◦ classes   ❗️сучасний підхід❗️
--------------------------------

У 2015 році в стандарт ECMAScript 6 (ES6) були додані класи.

Клас — це шаблон або конструктор в JS для створення об'єктів. Клас визначає структуру (властивості) і поведінку (методи)
об'єктів, що будуть створені з цього класу.


class Person {
 constructor(name, email) {
     this.name = name;
     this.email = email;
 }
 greet() { // метод
     console.log(`Hello, ${this.name}! Welcome to our website. We'll contact you at ${this.email}.`);
 }
}
// Створення об'єкту з класу
const anna = new Person("Anna", "anna@gmail.com");
anna.greet(); //виклик методу

---------------------------------
Метод об'єкта (чи класу) — це функція, яка оголошена всередині об'єкта (чи класу) і належить цьому об'єкту. Вона
викликається через через object.methodName()

◦ constructor — це спеціальний метод, який використовується для ініціалізації об'єкта при його створенні.
◦ кожен клас може мати лише один конструктор
◦ this в конструкторі вказує на новостворений об'єкт, для якого ми задаємо значення


1. Всередині конструктора класу задаємо властивості, які матиме кожен екземпляр цього класу. Це відбувається через this,
 що дозволяє створювати властивості, прив’язані до конкретного об'єкта.

2. Під час створення нового об'єкта за допомогою ключового слова new та назви класу автоматично викликається
 метод-конструктор. У нього передаються значення параметрів, які потім присвоюються відповідним властивостям об’єкта.
------------------------------------------------------------------------------------------------------------------------

ВАЛІДАЦІЯ ФОРМИ

const regForm = document.querySelector('#regForm'); //дістаємо форму

let hasError = false;

function showFormError(selectorName, errorMessage) {
    document.querySelector(`#error-${selectorName}`).textContent = errorMessage;
    hasError = true;
}

function clearFormError(selectorName) {
    document.querySelector(`#error-${selectorName}`).textContent = '';
}

regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    hasError = false;

    const formData = new FormData(e.target);  //e.target = regForm

    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const agree = formData.get('agree');  //checkbox дає нам значення on або null

    //console.log(name, email, password, agree); // дивимось чи отримуємо ми дані - все ОК

    //Перед надсиланням форми на сервер обов'язково слід перевірити валідність введених даних (ВАЛІДАЦІЯ або ПЕРЕВІРКИ)
    if (!name || name.length < 2) {
        showFormError('name', 'Name required!');
    } else {
        clearFormError('name');
    }
    if (!email) {
        showFormError('email', 'Email required!');
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
        showFormError('email', 'Email is not valid!');
    }

    else {
        clearFormError('email');
    }
    if (!password) {
        showFormError('password', 'Password required!');
    } else {
        clearFormError('password');
    }
    if (!agree) {
        showFormError('agree', 'Agree required!');
    } else {
        clearFormError('agree');
    }
    if (!hasError) {
        console.log('Sending data to the server');
    }
});

------------------------------------------------------------------------------------------------------------------------

РЕГУЛЯРНІ ВИРАЗИ  (regular expressions, скорочено — RegExp)

Це спеціальна мова для пошуку шаблонів у тексті. Вони з'явилися разом із першими мовами програмування.
По суті, це рядок, у якому спеціальним чином описані правила, за якими можна знаходити відповідності в інших рядках.

Тобто, регулярні вирази — це спосіб перевірити, чи відповідає деякий текст заданому шаблону (патерну)


❗️ Регулярні вирази працюють виключно з рядками ❗️


const regex = /hello/;
console.log(regex.test('hello world')) //true

const str = 'User: Anna, ID:245';
console.log(str.match(/\d+/g)); // ['245']

const text = 'Hello world!';
const result = text.replace(/world/, 'JS');
console.log(result); //Hello JS!

const result2 = text.split(' ');
console.log(result2); // ['Hello', 'world!']


const email = 'test@gmail.com';
const isValidEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
console.log(isValidEmail); //true

const phone = '+3806637855621';
const isPhoneCorrect = /^\+380\d{9}$/.test(phone);
console.log(isPhoneCorrect); //false (в моєму номері 11 цифр)


//Пароль має складатися з 6 символів, включати мінімум одну букву і одну цифру, і не містити великі літери.
const password = 'Abс123';
const isStrong = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6}$/.test(password);
console.log(isStrong); // false


const textAnn = 'My name is Anna, email: anna@gmail.com, phone: +380663785721';

const foundPhone = textAnn.match(/\+\d{12}/g).join();
console.log(foundPhone); //+380663785721

const foundEmail = textAnn.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g).join();
console.log(foundEmail); //anna@gmail.com

--------------------------------------------------
Регулярний вираз — це спеціальний об'єкт, який створюється двома способами:

   ◦ Через конструктор new RegExp()
   RegExp — це вбудований клас у JavaScript, який використовується для створення об'єктів регулярних виразів.

   ◦ За допомогою  літералу регулярного виразу  —  //
   Під капотом JS все одно створює об'єкт на основі конструктора RegExp)

Тобто регулярний вираз - це екземпляр об'єкта, який створюється на основі вбудованного класу RegExp
--------------------------------------------------

МЕТОДИ ОБ'ЄКТА RegExp (об'єкта створеного на основі класу RegExp):

   test(str)
    перевіряє, чи є хоча б одна відповідність регулярного виразу в рядку (повертає true або false)
                                                                                              схожий на метод includes()
     const pattern = /\d+/;
     const result = pattern.test("Text with digit 123");
     console.log(result); // true

------------------------------------------------------------------------------------------------------------------------
                        \d                                         +
         будь-яка одна цифра (від 0 до 9)             одна або більше таких цифр
------------------------------------------------------------------------------------------------------------------------

МЕТОДИ РЯДКУ, які приймають регулярний вираз як аргумент

 1. replace()
    дозволяє замінити всі (g) або перші відповідності регулярного виразу на новий рядок або значення

      const text = "My credit card number is 1234 5678 9876 5432";
      const result = text.replace(/\d/g, "X")
      console.log(result); // My credit card number is XXXX XXXX XXXX XXXX


 2. split()
    розбиває рядок на масив підрядків на основі регулярного виразу. Він дозволяє розбивати рядок, враховуючи різні
    роздільники, включаючи регулярні вирази.                                                                          */

//    const text = "John Doe, Jane Smith; Alice Johnson, Bob Brown; Jane Doe";
//    const result = text.split(/[,;]\s*/);
//    console.log(result);  // ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Jane Doe']
                                                                                                                      /*

 3. search()
    шукає першу відповідність регулярного виразу в рядку і повертає її індекс. Якщо відповідності немає, повертає -1
                                                                                               схожий на метод indexOf()
      const sentence = "today in Kharkiv it will be sunny.";
      const index = sentence.search(/\b[A-Z][a-z]+\b/); //шукаємо індекс першого слова з великої букви
      console.log(index);  // 9

------------------------------------------------------------------------------------------------------------------------
               \b                                     [A-Z]                                  [a-z]+
  межа слова (щоб шукати ціле слово)     перша літера — велика англійська      далі — одна або більше малих анг літер
------------------------------------------------------------------------------------------------------------------------

  4. match()   шукає відповідності

    ◦ повертає перший збіг + додаткову інформацію (якщо без прапора g)
    ◦ або повертає усі збіги (з g)
    ◦ або null, якщо збігів немає

------------------------------------------------------------------------------------------------------------------------
                      Метод	       Належить до	    Призначення

                      test()	     RegExp	        Перевірка на відповідність
                      exec()	     RegExp	        Отримати деталі першого збігу
                      match()	     String	        Отримати всі збіги (або перший)
                      replace()	     String	        Замінити за шаблоном
                      search()	     String	        Індекс першого збігу
                      split()	     String	        Розбити рядок за шаблоном
------------------------------------------------------------------------------------------------------------------------

ВИКОРИСТОВУЮТЬСЯ ДЛЯ:

1. Перевірки правильності введення (валідації)
   регулярні вирази часто використовують для перевірки, чи відповідає введений користувачем текст певному формату

   ◦ чи правильно введений email: example@mail.com
   ◦ чи це номер телефону: +380501234567
   ◦ чи це поштовий індекс: 01001


FOR EXAMPLE:

const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
console.log(emailPattern.test("test@gmail.com")); // true

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
         ^	                           [a-z0-9._%+-]+                                                   @	                                   [a-z0-9.-]+                                              \.                                                            [a-z]{2,}                                              $
    Початок рядка     Локальна частина (до @): одна або більше літер, цифр, . _ % + -         Обов’язковий символ "@"        Домен: одна або більше літер, цифр, . або -          Символ крапки перед доменною зоною (буквально крапка)        Доменна зона: щонайменше 2 літери (наприклад, com, ua, org)            Кінець рядка
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2. Пошуку у тексті    (можна швидко знайти фрагменти тексту, що відповідають шаблону)

   ◦ знайти всі дати у форматі 12.04.2025
   ◦ знайти всі слова, що починаються з великої літери
   ◦ витягнути посилання з HTML

const text = "Сьогодні 09.04.2025, а завтра 10.04.2025";
const dates = text.match(/\d{2}\.\d{2}\.\d{4}/g); // ["09.04.2025", "10.04.2025"]


3. Заміна частини тексту   (регулярні вирази дозволяють не просто знайти, а й замінити текст за певним шаблоном)

◦ заміна всіх номерів телефонів на "***"  (коли потрібно приховати всі телефонні номери у тексті)

const text = "I'm 23 years old. My phone number: +380501234567, yours: +380671234567.";
const result = text.replace(/\+380\d{9}/g, "***");

console.log(result);  //I'm 23 years old. My phone number: ***, yours: ***.

------------------------------------------------------------------------------------------------------------------------
                      \+380                                         \d{9}                                g
  шукаємо телефонні номери, що починаються з +380     після коду країни мають йти 9 цифр     флаг для глобального пошуку

g - означає, що пошук і заміна будуть проводитися по всьому рядку, а не лише для першої відповідності
------------------------------------------------------------------------------------------------------------------------

◦ заміна пробілів або дефісів в номерах телефонів на пустий рідок

const number1 = "+380-67-234-56";
const number2 = "+380 67 234 56";

const result1 = number1.replace(/[\s-]/g, "");
const result2 = number2.replace(/[\s-]/g, "");

console.log(result1,result2); // +3806723456   +3806723456

------------------------------------------------------------------------------------------------------------------------
                     [\s-]                                           g
  цей вираз шукає символи пробілу \s та дефіса -        флаг для глобального пошуку
------------------------------------------------------------------------------------------------------------------------

◦ заміна всіх дат на формат YYYY-MM-DD (іноді потрібно змінити формат дати на єдиний стандарт)

const text = "Data: 01/12/2023, next data: 15/01/2024";
const result = text.replace(/(\d{2})\/(\d{2})\/(\d{4})/g, "$3-$2-$1");

console.log(result);  // Data: 2023-12-01, next data: 2024-01-15

------------------------------------------------------------------------------------------------------------------------
регулярний вираз /(\d{2})\/(\d{2})\/(\d{4})/g знаходить дати у форматі DD/MM/YYYY і змінює їх на формат YYYY-MM-DD,
використовуючи зворотні посилання $1, $2, $3 для груп:

       1. (\d{2}) — перша група, яка захоплює дві цифри (день) — $1
       2. (\d{2}) — друга група, яка захоплює дві цифри (місяць) — $2
       3. (\d{4}) — третя група, яка захоплює чотири цифри (рік) — $3
----------------------------------------------------------------------------------------------------------------------*/

