/*

 Event (e) — це об'єкт, який автоматично передається у функцію-обробник події в JavaScript.

 Він містить всю інформацію про подію, яка щойно відбулася, наприклад:

  ◦ тип події (наприклад, "click", "keydown");
  ◦ елемент, на якому сталася подія (e.target);

  ◦ координати миші (для мишиних подій);
  ◦ натиснуту клавішу (для клавіатурних подій);

  ◦ методи, як-от preventDefault() або stopPropagation().


Event Phases

  1. Capture phase (фаза захоплення / занурення)
     Подія починає рух згори DOM-дерева (від document, а точніше від window) вниз до цільового елемента

  2. Target phase (фаза цілі)
     Подія доходить до самого елемента, на якому вона виникла

  3. Bubble phase (фаза спливання)
     Подія починає рух назад вгору DOM-деревом, від цілі до document (window)

 window → document → html → body → ... → target element


 Фаза захоплення події починається з window, а не з document (але ми рідко бачимо window в фазі захоплення
 Найчастіше події відбуваються на елементах сторінки, не на window.

 Window -  це глобальний об'єкт у браузері. Він створюється окремо для кожної вкладки (тобто кожна вкладка в браузері
 працює у своєму власному середовищі).
 JavaScript у різних вкладках не ділиться спільним window, але вкладки можуть взаємодіяти.

--------------------------------------------------------------------------------------------------------------------*//*

const outerDiv = document.querySelector('#outer');
const middleDiv = document.querySelector('#middle');
const btn = document.querySelector('#inner');


// прослуховування події у фазі спливання (bubbling phase)

outerDiv.addEventListener('click', (e) => {
    console.log('Clicked outer', e.target);
});

middleDiv.addEventListener('click', () => {
    console.log('Clicked middle');
});

btn.addEventListener('click', () => {
    console.log('Clicked btn');
})                                       // Clicked btn
                                         // Clicked middle
                                         // Clicked outer

*//*-------------------


//прослуховування події у фазі занурення (capture phase)

outerDiv.addEventListener('click', () => {
    console.log('Clicked outer');
}, true);

middleDiv.addEventListener('click', () => {
    console.log('Clicked middle');
}, true);

btn.addEventListener('click', () => {
    console.log('Clicked btn');
}, true)                               // Clicked outer
                                       // Clicked middle
                                       // Clicked btn

*//*-------------------


// припинення у фазі спливання (stopPropagation)

outerDiv.addEventListener('click', () => {
    console.log('Clicked outer');
});

middleDiv.addEventListener('click', () => {
    console.log('Clicked middle');
});

btn.addEventListener('click', (e) => {
    console.log('Clicked btn');      // Clicked btn
    e.stopPropagation();
})

*//*-------------------


//припинення у фазі занурення (захоплення)

outerDiv.addEventListener('click', (e) => {
    console.log('Clicked outer', e.target);  // Clicked outer  <button id="inner">Click me</button>
    e.stopPropagation();
}, true);

middleDiv.addEventListener('click', () => {
    console.log('Clicked middle');
}, true);

btn.addEventListener('click', () => {
    console.log('Clicked btn');
}, true)

*//*-------------------


// stopPropagation() потрібен, коли ми хочемо запобігти обробці події на рівні батьківського елемента.


// Приклад з меню, яке закривається при кліку поза ним

const openBtn = document.querySelector('#open');
const menu = document.querySelector('#menu');

openBtn.addEventListener("click", function (event) {
    menu.classList.toggle("hidden");
    event.stopPropagation();

});

// Закриваємо меню при кліку будь-де
document.body.addEventListener("click", function () {  // document.body — це посилання на <body> у HTML-документі (тобто body - це вбудована властивість об'єкта document)
    menu.classList.add("hidden");
});

// Але не закриваємо, якщо клікнули всередині меню
menu.addEventListener("click", function (event) {
    event.stopPropagation(); // Зупиняємо спливання, щоб body не зловив подію
});

*//*-------------------


// e.stopImmediatePropagation() - повністю зупиняє подальше оброблення: подія не спливає, і жоден інший обробник на
//                                цьому ж елементі більше не викликається

btn.addEventListener('click', (e) => {
    console.log('First function btn');
    e.stopImmediatePropagation();
})

btn.addEventListener('click', () => {
    console.log('Second function btn');
})
                                         // First function btn

/*----------------------------------------------------------------------------------------------------------------------

BOM (Browser Object Model) - модель об'єктів браузера

BOM — це набір об'єктів, які надає браузер, щоб JavaScript міг взаємодіяти з:
   ◦ вікном браузера (window)
   ◦ вкладками
   ◦ історією (history)
   ◦ адресним рядком (location)
   ◦ екраном (screen)
   ◦ браузером і системною інформацією (navigator)

 а також використовувати:
   ◦ системні діалогові вікна (alert, confirm, prompt)
   ◦ таймери (setTimeout, setInterval)


 BOM дозволяє взаємодіяти з браузером на вищому рівні (через об'єкти, такі як window, navigator, history та інші), а не
 тільки з вмістом веб-сторінки як це робить DOM.


 Головним об'єктом BOM є window, в якому містяться інші об'єкти BOM (такі як history, screen та інші).

 Також всередині window знаходиться об'єкт document, в якому зберігається ієрархічна структура DOM
 (тобто document — це властивість об'єкта window, який належить до BOM)


   BOM (Browser Object Model)
    └── window
        ├── BOM-об'єкти:
        │   ├── navigator
        │   ├── location
        │   ├── screen
        │   ├── history
        │   └── etc.
        └── DOM (Document Object Model)
            └── document
                ├── body
                ├── head
                └── усі елементи HTML-сторінки



 window
---------

 console.log(window.innerWidth); //1684 (px)
 console.log(window.innerHeight); //1015

 function declaration, які були оголошені в global scope, додаються до глобального об'єкта window (доступні в window).
 Теж саме відбувається зі змінними оголошенними через var.

 function aFun () {}
 var aVar = 33;
 console.log(window); // aFun: ƒ aFun()      aVar:33


 const locationBtn = document.querySelector('#locationBtn');
 locationBtn.addEventListener('click', () => {
     window.open('https://google.com', '_blank', 'width=400,height=300');  //  Chrome: нова вкладка
 });                                                                       //  Firefox: маленьке вікно  ✔️
                                                                           //  Safari: маленьке вікно   ✔️

 _blank — це значення, яке вказує, що посилання або вікно, відкриті через window.open, мають відкриватися в новій
 вкладці або новому вікні браузера


 Сучасні браузери часто ігнорують або обмежують можливості маніпулювання вікнами (розміри або позицію вікна), коли
 відкривається нова вкладка, особливо через певні безпекові політики.

 Тобто браузери зазвичай відкривають нову вкладку замість нового вікна, а такі параметри як width або height можуть не
 працювати в цьому випадку.
 В Chrome window.open для відкриття вкладок часто не підтримує опції (width, height, top, left)



 window.navigator
------------------
                                                               (wrong)
 console.log(navigator.userAgent);   // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36
 console.log(navigator.platform); // MacIntel (wrong)

 console.log(navigator.language ); // uk-UA
 console.log(navigator.hardwareConcurrency) // 8


 console.log(navigator.geolocation); // {} пустий об'єкт

 navigator.geolocation.getCurrentPosition(
     (position) => {
         console.log('Latitude:', position.coords.latitude);
         console.log('Longitude', position.coords.longitude);
     },
     (error) => {
         console.warn('Geolocation Error:', error.message);
     });


--------
 Іформація, яку дає navigator (зокрема navigator.userAgent, navigator.platform, навіть navigator.userAgentData) не
 гарантує правдивості з кількох причин:

  1. Браузери можуть підмінювати значення

  Багато браузерів спеціально маскуються під інші (щоб уникнути обмежень або підвищити сумісність):
    • Chrome може видавати себе за Safari.
    • Safari — за Intel Mac навіть на Apple Silicon.
    • Firefox — також має схильність до маскування.

  2. Користувач може змінити User-Agent вручну
     Через DevTools, або через розширення в Chrome/Firefox, або через налаштування приватності або автоматизацію.

  3. Можливе підроблення з боку ботів, парсерів, автоматизаторів
     Наприклад, багато ботів вказують звичайний User-Agent, щоб їх не заблокували.

  4. navigator.platform та інші властивості — часто застарілі
     Наприклад, на Mac з M1/M2/M3:  navigator.platform // "MacIntel"    Але ж у тебе не Intel, а Apple Silicon
--------


 window.location
-----------------

 console.log(window.location)


 Об'єкт location у BOM має три основні функції:

     • location.reload() - перезавантажує сторінку
     • location.assign(url) - переходить на іншу сторінку, додаючи її до історії браузера
     • location.replace(url) - також переходить на іншу сторінку, але не додає її до історії


 const locationBtn = document.querySelector('#locationBtn')

 locationBtn.addEventListener('click', () => {
     location.reload()
     location.replace('https://google.com') // заміна поточної сторінки, без додавання її в історію (повернутися назад неможливо)
     location.assign('https://google.com')  // додає нову сторінку в історію перегляду (можна повернутися назад)
 })



 window.history
----------------

 console.log(window.history)

 const locationBtn = document.querySelector('#locationBtn')

 locationBtn.addEventListener('click', () => {
     location.assign('https://google.com')
 });
 console.log(window.history)  // length: 2 (дві сторінки)


 Об’єкт history у BOM має три основні функції, які дозволяють керувати історією переходів у браузері

    • history.back() - повертає на попередню сторінку в історії браузера (як кнопка "Назад")
    • history.forward() - переходить вперед на наступну сторінку в історії браузера, якщо юзер щойно повернувся назад

    • history.go(n) - переходить на певну кількість кроків вперед або назад в історії браузера   history.go(-1) = back()
                                                                                               history.go(1) = forward()

  locationBtn.addEventListener('click', () => {
      history.forward()
      history.back()
      history.go(2) // перехід на 2 кроки вперед
  });


    • history.pushState(stateObj, title, url)

           1. stateObj - Об'єкт стану, який ти зможеш зчитати пізніше через history.state
           2. title - назва сторінки (поки що не використовується більшістю браузерів, можна передавати '')
           3. url - нова адреса, яка буде показана в адресному рядку (може бути відносною або абсолютною, але повинна
              бути того ж походження)

          pushState()
           • Додає новий запис до історії браузера без перезавантаження сторінки (не завантажує сторінку заново!)
           • Змінює URL в адресному рядку браузера



 locationBtn.addEventListener('click', () => {
     history.pushState({page: "about"}, "","/about")   // http://localhost:63342/about
     document.body.textContent = "Це сторінка About!";
 })



 window.screen
----------------

 console.log(screen)

 В screen можна зробити перевірку екрану (аналогія @media в css)

 if (screen.width < 920) {
   console.log("Mobile screen");
 } else {
   console.log("Desktop screen");
 }

*//*--------------------------------------------------------------------------------------------------------------------

const participantsList = document.querySelector("#participants-list");
const addNewInput = document.querySelector("#part-input");
const addNewBtn = document.querySelector("#part-btn");


participantsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
    }
    e.stopPropagation();
})

addNewBtn.addEventListener("click", (e) => {

    const name = addNewInput.value.trim();
    if (name) {
        const li = document.createElement("li");

        li.innerHTML = `${name} <button class="delete-btn">X</button>`;
        participantsList.appendChild(li);
    }

    addNewInput.value = "";
})

----------------------------------------------------------------------------------------------------------------------*/

