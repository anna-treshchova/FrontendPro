import {getTodos} from './api';
import {createTodo} from './ui';

const todoList = document.querySelector('#todo-list')

export async function init() {
    todoList.innerHTML = '';
    try {
        const todos = await getTodos();

        todos.forEach(todo => {
            const li = createTodo(todo)
            todoList.appendChild(li)
        })
    } catch(err) {
        console.log(`${err.name}: ${err.message}`);
    }
}