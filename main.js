const taskList = document.querySelector("#task-list");
const taskInput = document.querySelector("#task-input");
const taskBtn = document.querySelector("#task-btn");

taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
    }
});


taskBtn.addEventListener("click", () => {
    const taskName = taskInput.value.trim();

    if (taskName) {
        const li = document.createElement("li");
        li.innerHTML = `${taskName} <button class="delete-btn">Delete</button>`;
        taskList.appendChild(li);
    }
    taskInput.value = "";
})