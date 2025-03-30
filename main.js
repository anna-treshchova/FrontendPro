/*--------------------------
console.warn(444);
console.error(444);

 console.log() — це метод об'єкта console в JavaScript, який використовується для виводу інформації в консоль браузера
 або середовища виконання (наприклад, Node.js).

 Це не частина самої мови, а вбудована функція середовища виконання (браузера або Node.js)

*//*--------------------------------------------------------------------------------------------------------------------

 DOM (Document Object Model)

 Це об'єктна модель HTML документа, яка дозволяє JavaScript взаємодіяти з HTML-сторінкою.

 DOM представляє HTML-код у вигляді дерева об'єктів, і кожен елемент сторінки (будь-який HTML-тег) є окремим
 об'єктом, яким можна керувати через JS.





DOM перетворює HTML-структуру на набір об'єктів які знаходяться в головному об'єкті document і якими можна керувати через
JavaScript.

-------------------------------------------------

СТРУКТУРА DOM-ДЕРЕВА:

ВИГЛЯД HTML-СТРУКТУРИ:          → → →            ВИГЛЯД DOM-СТРУКТУРИ:

<!DOCTYPE html>                                      document
<html>                                                ├── html
  <head>                                              │    ├── head
    <title>DOM</title>                                │    │    └── title → "DOM"
  </head>                                             │    └── body
  <body>                                              │         ├── h1 → "Привіт, DOM!"
    <h1>Привіт, DOM!</h1>                             │         └── p → "Це тестовий текст."
    <p>Це тестовий текст.</p>
  </body>                                             document – це головний об'єкт, через який ми працюємо з DOM
</html>

-------------------------------------------------

DOM-ДЕРЕВО ТА ТЕРМІНИ, ПОВ'ЯЗАНІ З НИМ:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Example</title>
</head>
<body>
    <div id="container" class="main-container">
        <h1>Hello, world!</h1>
        <p class="paragraph">This is a paragraph.</p>
    </div>
</body>
</html>


-------------------------------------------------

ВЗАЄМОДІЯ БРАУЗЕРА З DOM:

 1. Парсинг HTML
    Браузер зчитує HTML-код, аналізуючи теги та їхню структуру

 2. Формування DOM-дерева
    Кожен HTML-тег стає окремим об'єктом у пам’яті браузера та утворює ієрархічне дерево DOM

 3. Парсинг CSS  → Формування CSSOM (CSS Object Model)
    CSSOM (CSS Object Model) –  подібно до того, як DOM представляє HTML, CSSOM представляє всі стилі сторінки у вигляді
    дерева об'єктів. Тобто CSSOM - це об'єктна модель, яку браузер створює на основі CSS-коду.

 4. Об’єднання DOM + CSSOM - Формування Render Tree
    Render Tree – це дерево, яке містить тільки ті елементи DOM, які видно на сторінці, разом із застосованими стилями з
    CSSOM. Приховані елементи (наприклад, display: none) не потрапляють у Render Tree.

 5. Рендеринг сторінки - Малювання (Painting)
    Браузер перетворює Render Tree у пікселі та відображає сторінку на екрані.
    Якщо контент або стилі змінюються, браузер може перемальовувати (Repaint) або перерозраховувати (Reflow) елементи.

 5. Взаємодія через JavaScript (Динамічний DOM)
    Це означає, що JavaScript може змінювати HTML-структуру та вміст сторінки під час її перегляду користувачем
    Такі зміни одразу відображаються в браузері без необхідності перезавантаження сторінки

   Тобто DOM динамічний, і JavaScript може змінювати його без оновлення сторінки. Це дозволяє створювати інтерактивні
   сайти, наприклад, змінювати контент, додавати або приховувати елементи, реагувати на дії користувача.

----------------------------------------------------------------------------------------------------------------------*/

// console.log(document.getElementById("myDiv"));
// console.log(document.getElementsByClassName("myDiv"));
// console.log(document.getElementsByTagName("div"));
//
// //               ↓ ↓ ↓
//
// console.log(document.querySelector("#myDiv"))  // by id
// console.log(document.querySelector(".myDiv")); // by class name
// console.log(document.querySelector("div"));    // by tag name (але лише перший)
//
// console.log(document.querySelectorAll("div"));

/*
const myDiv = document.querySelector('#myDiv');
const mySecondDiv = document.querySelector('.mySecondDiv')

myDiv.textContent = "Changed value";

myDiv.innerHTML = "<span>Hello from SPAN</span>";

const userInfo = "Hello, user is active!"
myDiv.innerHTML = `<span>${userInfo}</span>`;


myDiv.style.color = "#FFA807FF";
mySecondDiv.style.display = "inline-flex";
mySecondDiv.style.backgroundColor = "#ffe7e7";
mySecondDiv.style.border = "1px solid #FFA0A0FF";


// додавання/видалення класу

myDiv.classList.add("active");
myDiv.classList.remove("active");
myDiv.classList.toggle("active");

console.log(myDiv.classList.contains("active")); //true

myDiv.classList.replace("active", "myDiv");



//event (подія)

const myBtn = document.querySelector("#myBtn");

// myBtn.onclick = () => {
//     console.log("Button clicked");
// }


// function showInfo () {
//     console.log("Button clicked")
// }
//
// myBtn.onclick = showInfo;



myBtn.addEventListener("click", () => {
    console.log("Button clicked")
})

myBtn.addEventListener("click", () => {
    console.log("Log...")
})

myBtn.addEventListener("click", (e) => { //або (event)
    myDiv.classList.toggle("active");
    // console.log(e);
    // console.log(e.target); //<button type="button" id="myBtn">Button</button>
    // e.target.style.border = "3px solid gray";
    e.target.classList.toggle("active");
})
*/


// ДОДАВАННЯ ЕЛЕМЕНТІВ

// const myDiv = document.querySelector('#myDiv');
// const myBtn = document.querySelector('#myBtn');
// const removeBtn = document.querySelector('#removeBtn');
//
// myBtn.addEventListener('click', () => {
//     const CreatedDiv = document.createElement("div");
//     const CreatedSpan = document.createElement("span");
//     CreatedDiv.textContent = "Div created with button";
//     CreatedSpan.textContent = "My Span";
//     // myDiv.appendChild(CreatedDiv);
//     myDiv.append(CreatedDiv, CreatedSpan);
//
//     // myDiv.remove(); // ВИДАЛЕННЯ ЕЛЕМЕНТІВ
//
// })
//
// removeBtn.addEventListener('click', () => {
//     const tagToRemove = myDiv.querySelector('span');
//     myDiv.removeChild(tagToRemove);
// })


/*----------------------------------------------------------------------------------------------------------------------

//Task: Chess Board

const chessContainer = document.querySelector("#chessContainer");
const addChessBtn = document.querySelector("#chessBtn");


function creatChessBoard (size) {

    chessContainer.innerHTML = ""; // Очищення контейнера перед створенням нової дошки

    const chessBoard = document.createElement("table")  // створюємо HTML-елемент <table>. Змінна chessBoard зберігає цю таблицю, але вона ще не додана в chessContainer
    chessBoard.classList.add("chessBoard");            // додаємо клас для стилізації таблиці

    for (let i = 0; i < size; i++) {              // перший цикл створює рядки таблиці (tr), в кожен з яких другий цикл додасть клітинки (td)
        let row = document.createElement("tr");  // створюємо рядок таблиці <tr>

        for (let j = 0; j < size; j++) {
            let cell = document.createElement("td");   // створюємо клітинку <td>
            cell.classList.add("chessCell");          // додаємо клас chessCell зі стилізацією (розміри) для клітинки

//          if ((i + j) % 2 === 0) {
//              cell.classList.add("cellWhite")   // Якщо сума i + j парна → додається клас cellWhite  (0 / any number = 0)
//          } else {
//              cell.classList.add("cellBlack")   // Якщо непарна → додається клас cellBlack
//          }

            ((i = j) % 2 === 0) ? cell.classList.add("cellWhite") : cell.classList.add("cellBlack"); // МОЖНА ЗАМІНИТИ НА ТЕРНАРНИЙ ОПЕРАТОР

            row.appendChild(cell);               // додаємо кожну створену комірку <td> до рядка <tr>
        }
        chessBoard.appendChild(row);           // додаємо кожен рядок <tr> вже з доданими в нього клітинками (tr) до chessBoard (таблиці <table>)
    }
    chessContainer.appendChild(chessBoard);  // додаємо таблицю в контейнер
}

addChessBtn.addEventListener ("click", () => creatChessBoard(8)); //додаємо обробник події для кнопки.
// Він слухає подію click на кнопці #chessBtn та при кліку викликає функцію createChessBoard(8), створюючи нову шахову дошку розміром 8×8

----------------------------------------------------------------------------------------------------------------------*/




