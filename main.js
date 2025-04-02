/*----------------------------------

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

*//*--------------------------------

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

*//*--------------------------------

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

*//*--------------------------------

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

*//*--------------------------------------------------------------------------------------------------------------------

// WINDOW

console.log(window.innerWidth); //1684 (px)
console.log(window.innerHeight); //1015


//function declaration  and  var variables

function aFun () {}  // function declaration, які були оголошені в global scope, додаються до глобального об'єкта window
                    // (доступні в window)
var aVar = 33;  // теж саме зі змінними огологеними через var

console.log(window); //aFun: ƒ aFun()      aVar:33

*//*--------------------------------

// NAVIGATOR

console.log(navigator.userAgent); // Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36
console.log(navigator.platform);  // MacIntel

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

*//*--------------------------------

// LOCATION

console.log(window.location)


const locationBtn = document.querySelector('#locationBtn')

locationBtn.addEventListener('click', () => {
//  location.reload()  // перезавантаження сторінки
//  location.replace('https://google.com') // заміна поточної сторінки, без додавання її в історію (повернутися назад неможливо)
    location.assign('https://google.com')  // додає нову сторінку в історію перегляду (можна повернутися назад)
})

*//*--------------------------------

// HISTORY

const locationBtn = document.querySelector('#locationBtn')

// locationBtn.addEventListener('click', () => {
//     location.assign('https://google.com')
// });
// console.log(window.history)  // length: 2 (дві сторінки)


locationBtn.addEventListener('click', () => {
//  history.forward()  // перехід вперед в історії браузера (аналогічно "→" в браузері)
//  history.back()    // перехід назад в історії браузера (аналогічно "←" в браузері)
//  history.go(2)    // перехід на 2 кроки вперед або назад        history.go(-1) = back()     history.go(1) = forward()
});

// ⁉️ history.pushState

*//*--------------------------------

// SCREEN

console.log(screen)

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

