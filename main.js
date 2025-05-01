"use strict"

const formInput = document.querySelector(".js-form__input");
const addBtn = document.querySelector(".js-add-btn");
const toDoList = document.querySelector(".js-todo__list");

let tasks = JSON.parse(localStorage.getItem("toDoItems")) || [];

addBtn.addEventListener ("click", (e) => {
    e.preventDefault();

    if (!formInput.value.trim()) {
        return
    }

    tasks.push({
        id: crypto.randomUUID(),
        description: formInput.value.trim(),
        completed: false
    });

    localStorage.setItem("toDoItems", JSON.stringify(tasks));

    renderToDoList();

    formInput.value = "";
});

toDoList.addEventListener("click", (e) => {
    handleDelete(e);
    handleCheckbox(e);
});

function handleDelete(e) {
    if (e.target.classList.contains("delete-btn")) {
        tasks = tasks.filter(task => task.id !== e.target.dataset.id);
        localStorage.setItem("toDoItems", JSON.stringify(tasks));

        renderToDoList();
    }
}

function handleCheckbox(e) {
    if (e.target.classList.contains("checkbox")) {
        const id = e.target.dataset.id;
        const task = tasks.find(task => task.id === id);

        if (task) {
            task.completed = e.target.checked;
        }

        const listItem = e.target.closest("li");
        listItem.querySelector("span").classList.toggle("completed", task.completed);

        localStorage.setItem("toDoItems", JSON.stringify(tasks));
    }
}

function renderToDoList () {
    toDoList.innerHTML = "";

    tasks.forEach(task  => {
        const toDoItem = document.createElement("li");
        toDoItem.classList.add("todo__item");

        toDoItem.innerHTML = `
        <label>
            <input class="checkbox" type="checkbox" data-id="${task.id}" ${task.completed ? "checked" : ""}>
        </label>
        <span class="todo__item-description ${task.completed ? "completed" : ""}" >${task.description}</span>
        <button class="delete-btn" data-id="${task.id}">Delete</button>
    `;
        toDoList.appendChild(toDoItem);
    })
}

renderToDoList();