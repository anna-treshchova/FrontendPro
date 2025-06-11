                                                                                                                      /*
                                                     CRUD
                                      це базові операції для роботи з даними

    1. Create (створити) —  POST
    2. Read (прочитати)  —  GET
    3. Update (оновити)  —  PUT/PATCH   PATCH — оновлює лише частину ресурсу (часткове оновлення)
    4. Delete (видалити) — DELETE

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
                                                  ENDPOINTS

 Endpoints — це кінцева (або конкретна) частина URL, до якої ми звертаємось, щоб отримати доступ до певного ресурсу або
 виконати певну дію через API

 Повний URL: https://jsonplaceholder.typicode.com/todos/1

     ◦ https://jsonplaceholder.typicode.com/ — базова адреса сервера (базовий URL)

     ◦ todos/1 — endpoint, що означає конкретний ресурс (todo з id=1)

 Endpoint — це URL (або його частина), куди ми відправляємо HTTP-запит


‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
                                                     API

 Application Programming Interface — це інтерфейс (тобто набір правил, методів і адрес — endpoint-ів), через які клієнт
 (наприклад, браузер) може взаємодіяти з сервером — тобто отримувати, створювати, оновлювати або видаляти дані

  API — це частина вебсервісу, яка:

     ◦ приймає HTTP-запити (GET, POST, PATCH, DELETE)

     ◦ повертає відповіді у певному форматі (зазвичай — JSON)

     ◦ працює за певною адресою, наприклад: https://jsonplaceholder.typicode.com.


‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

                                               HTTP СТАТУСИ

1.  1xx (соті) — інформаційні статуси
    Це тимчасові відповіді, які повідомляють, що сервер отримав запит і обробка триває, але остаточної відповіді ще нема


2.  2xx (двухсоті) — OK (запит успішно виконано)

          ◦  200 OK — запит виконано, відповідь є (найчастіший статус)

          ◦  201 Created — ресурс створено (наприклад, новий todo додано)

          ◦  202 Accepted — запит прийнято, але ще не оброблено (наприклад, черга)

          ◦  204 No Content — все ок, але відповідь порожня (немає тіла відповіді)


3.  3xx (трьохсоті) — redirect (перенаправлення)

    Коли сервер відповідає трьохсотим статусом, він повідомляє клієнту, що ресурс, який він шукає, тимчасово або назавжди
    переміщений на іншу адресу (URL)

    У відповіді сервер вказує нову адресу через HTTP-заголовок Location.
    Це означає:  "Ресурс тепер знаходиться за адресою X. Зроби новий запит туди."

    Клієнт (браузер або fetch) автоматично виконує новий запит за цією адресою, якщо це можливо.

          ◦  301 Moved Permanently — ресурс назавжди перенесено

          ◦  302 Found — тимчасове перенаправлення


4.  4xx (чотирьохсоті) — client error (помилка на стороні клієнта)

          ◦  400 Bad Request — неправильний запит (наприклад, некоректний JSON)

          ◦  401 Unauthorized — ви не авторизовані (немає токена або неправильний логін/пароль)

          ◦  403 Forbidden — доступ заборонений (авторизація є, але прав недостатньо)

          ◦  404 Not Found — ресурс не знайдено (URL неправильний)

          ◦  409 Conflict — конфлікт запиту (наприклад, такий email вже існує)

          ◦  422 Unprocessable Entity — помилка валідації (наприклад, поле не заповнено).


5.  5xx (п'ятьсоті)  — server error (помилка на стороні сервера)

          ◦  500 Internal Server Error — загальна помилка сервера

          ◦  502 Bad Gateway — шлюз отримав неправильну або некоректну відповідь від сервера
             (шлюз - це проміжний сервер, який приймає запит від клієнта і пересилає його далі до іншого сервера)

          ◦  503 Service Unavailable — сервер тимчасово недоступний (наприклад, перевантажений)

          ◦  504 Gateway Timeout — сервер не відповів вчасно

          ◦  505 HTTP Version Not Supported — сервер не підтримує версію HTTP, зазначену в запиті


‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

 fetch("https://jsonplaceholder.typicode.com/posts", {
     method: "POST",
     headers: {
         "Content-Type": "application/json"
     },
     body: JSON.stringify({
         title: "My first post",
         body: "Post body",
         userId: 1
     })
 })
     .then(res => {
         console.log(res)

         if (!res.ok) {
             throw new Error(`Server responded with status ${res.status}`)
         }
         return res.json()
     })
     .then(data => {console.log(data)})
     .catch(err => console.log(err))




  throw — це JS команда, яка прокидує об'єкт помилки в Call Stack, тобто зупиняє виконання коду в поточному блоці та
  передає керування вгору по стеку викликів — у найближчий блок catch, якщо він є

       1. У JS кожна функція, що викликається, потрапляє у Call Stack — стек викликів (черга виконання)

       2. Якщо в середині якоїсь функції виникає помилка через throw (тобто JS створює об'єкт помилки, наприклад, Error)
          виконання цієї функції зупиняється

       3. JS прокидає цю помилку вгору по стеку викликів (Call Stack), тобто шукає найближчий блок catch вище у стеку,
          який зможе перехопити цю помилку

       4. Коли знаходить — передає керування туди, тобто запускає код у блоці catch

       5. Якщо обробника (catch) немає — програма аварійно завершується (в браузері — червона помилка в консолі)


  Просто створити об’єкт помилки через new — недостатньо, щоб зупинити виконання коду. Зупинка й передача керування в
  найближчий блок catch відбувається лише через throw:

       ◦ new Error(...) — лише створює об'єкт помилки, як будь-який інший об'єкт, АЛЕ НЕ ЗУПИНЯЄ ВИКОНАННЯ КОДУ

       ◦ throw new Error(...) — викидає помилку, зупиняє виконання та передає керування у найближчий catch


        console.log(1);                                             console.log(1);
        throw new Error("Message");                                 new Error("Message");
        console.log(2);   // 1                                      console.log(2);   // 1
                          // ❌ Uncaught Error: Message                               // 2



  У JS є кілька вбудованих конструкторів помилок (Error constructors), які можна використовувати для створення різних
  типів помилок. Ось основні з них:


       1. Error — загальний тип помилки (базовий клас)

          throw new Error("Загальна помилка")
          ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

       2. TypeError — коли значення має неправильний тип (програма очікує одне, а отримує зовсім інше)

           НАПРИКЛАД:
                      ◦ програма очікує рядок ("text"), а отримує число (123)

                      ◦ або очікує функцію, а отримує об'єкт

                      ◦ або передають масив, а вона чекає число


          throw new TypeError("Очікувався рядок, але отримано число")
          ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

       3. ReferenceError — коли звертаємося до змінної, яка не була оголошена

          throw new ReferenceError("Змінну не знайдено")
          ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

       4. SyntaxError — коли порушено синтаксис коду

          throw new SyntaxError("Помилка синтаксису у виразі")
          ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

  Усі ці типи наслідуються від базового Error, тож вони мають спільні властивості:

       ◦ message
       ◦ name
       ◦ stack


‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

                                ЗАЗВИЧАЙ В БЛОЦІ CATCH МОЖУТЬ БУТИ ДВІ ПОШИРЕНІ ДІЇ:

 1. ЛОГУВАННЯ ПОМИЛКИ (через API або у консоль)

    Якщо це звичайна помилка (серверна помилка), то її часто просто логують, щоб розробники бачили, що пішло не так.


    catch (err) {
     console.error(err);          //  1. виведення помилки в консоль для розробника

     await fetch('/log-error', {  //  2.  відправлення об'єкту-помилки на сервер
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
       message: err.message,     // повідомлення помилки (наприклад, "Failed to fetch")
       stack: err.stack }),      // стек викликів (де в коді сталася помилка)
     });
    }


   Відправлення об'єкту-помилки на сервер:

      ◦ Сервер може зберегти його в базі даних, логах або надіслати повідомлення розробникам
      ◦ Логи (або журнали подій) — це записи про те, що відбувається в програмі чи на сервері


 2. ЗАПИТ НА ОНОВЛЕННЯ ТОКЕНУ (коли помилка пов’язана з авторизацією)

    Якщо помилка пов’язана з тим, що access token протермінувався або недійсний (статус 401 Unauthorized), то в catch
    можна:

      1. виконати запит на оновлення токену (refresh token)

      2. після успішного оновлення токену — повторити початковий запит

      3. якщо оновлення не вдалося — перенаправити користувача на сторінку логіну


    catch (err) {
      if (err.status === 401) {
       await refreshToken();     // виклик функції оновлення токену
       return apiRequestAgain(); // повторення початкового запиту
      } else {
        console.error(err);
      }
    }

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

                                                  TRY...CATCH


  try...catch може обробляти помилки в асинхронному коді — лише, якщо цей код використовує await або є в async функції

  try...catch не спрацює з чистим промісом без await:


  try {
    fetch("/api") // ❌404 (Not Found) — помилка тут не буде спіймана
      .then(() => {
          throw new Error("Помилка в then"); // ❌Error: Помилка в then — теж не зловиться
      });
  } catch (err) {
     console.log("Catch:", err); // ніколи не спрацює
  }

         ↓ ↓ ↓

  async function loadData() {
    try {
      const res = await fetch("/api");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error("Помилка:", err); // ЗЛОВИТЬ ПОМИЛКУ
    }
  }

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

                                         TASK: TODOs (then, catch)


const API_URL = "https://jsonplaceholder.typicode.com/todos"

const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");

function apiGetTodos() {
    todoList.innerHTML = "<span>Loading...</span>";

    fetch(`${API_URL}?_limit=10`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Failed to get todos: ${res.statusText}`);
            }
            return res.json()
        })
        .then(todos => renderTodos (todos))
        .catch(err => console.log(err.message));
}

function renderTodos (todos) {
    todoList.innerHTML = "";

    todos.forEach(todo => {
        const li = apiCreateTodoEl(todo);
        todoList.appendChild(li);
    })
}

function apiCreateTodoEl(todo) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    li.className = todo.completed ? "done" : "";  // className перезаписує всі класи, які були у елемента

    li.innerHTML = `
       <input type="checkbox" class="toggle-checkbox" ${todo.completed ? "checked" : ""}>
       <label>${todo.title}</label>
       <button class="delete-btn">x</button>
    `
    return li;
}

function apiAddTodoEl(title) {
    return fetch(`${API_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            completed: false
        }),
    }).then(res => {
        if (!res.ok) {
            throw new Error(`Failed to add todo: ${res.statusText}`);
        }
        return res.json()
    })
}

function apiToggleTodoEl(id, completed) {
    return fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({completed})
    }).then(res => {
        if (!res.ok) {
            throw new Error(`Failed to toggle todo's status: ${res.statusText}`);
        }
    })
}

function apiDeleteTodoEl(id) {
    return fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    }).then(res => {
        if (!res.ok) {
            throw new Error(`Failed to delete todo: ${res.statusText}`);
        }
    })
}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = todoInput.value.trim();

    if (!title) {
        return;
    }

    apiAddTodoEl(title).then((todoEl) => {
        const li = apiCreateTodoEl(todoEl);
        todoList.appendChild(li);

        todoInput.value = "";
    }).catch((err) => {
        console.log(err.message)
    })
});

todoList.addEventListener("change", (e) => {
    if (e.target.classList.contains("toggle-checkbox")) {

        const todoId = Number(e.target.parentElement.dataset.id);
        const checked = e.target.checked;

        apiToggleTodoEl(todoId, checked).then(() => {
            e.target.parentElement.classList.toggle("done");
        }).catch(err => console.log(err.message));
    }
})

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        e.target.disabled = true;

        const todoId = Number(e.target.parentElement.dataset.id);

        apiDeleteTodoEl(todoId).then(() => {
            e.target.parentElement.remove();
        }).catch(err => {
            console.log(err.message)
        });
    }
})

apiGetTodos()

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾*/