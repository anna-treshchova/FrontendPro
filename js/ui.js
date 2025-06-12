export function createTodo(todo) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    li.className = todo.completed ? "done" : "";

    li.innerHTML = `
       <input type="checkbox" class="toggle-checkbox" ${todo.completed ? "checked" : ""}>
       <label>${todo.title}</label>
       <button class="delete-btn">x</button>
    `
    return li;
}