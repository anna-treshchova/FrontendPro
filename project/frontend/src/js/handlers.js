import {addTodo, deleteTodo, getTodo, toggleTodo, updateTodo} from './api';
import { createTodo, createUpdateForm } from './ui';
import { collectFormData, getTodoEl } from './utils';
import { init } from './app';

const todoList = document.querySelector('#todo-list')

export async function handleTodoFormSubmit(e) {
    e.preventDefault();

    try {
        const data = collectFormData(e.target);
        const todo = await addTodo(data);

        const li = createTodo(todo);
        todoList.prepend(li);

        e.target.reset()
    } catch(err) {
        console.log(`${err.name}: ${err.message}`);
    }
}

export async function handleTodoListClick(e) {
    const target = e.target;

    if (target.closest('.delete-btn')) {
        await handleDeleteClick(target);
    }

    if (target.closest('.update-btn')) {
        await handleUpdateClick(target);
    }

    if (target.closest('.toggle-checkbox')) {
        await handleToggleClick(target);
    }
}

export async function handleTodoListSubmit(e) {
    e.preventDefault();

    const id = getTodoEl(e.target).dataset.id;

    try {
        const data = collectFormData(e.target);
        data.checked = e.target.querySelector('.toggle-checkbox').checked;

        await updateTodo(id, data);
        await init()
    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }
}

async function handleToggleClick(target) {
    const li = getTodoEl(target);
    const id = li.dataset.id;

    try {
        const updatedTodo = await toggleTodo(id, target.checked);
        updatedTodo.checked ? li.classList.add('checked') : li.classList.remove('checked');
    } catch(err) {
        console.log(`${err.name}: ${err.message}`);
    }
}

async function handleDeleteClick(target) {
    const li = getTodoEl(target);
    const id = li.dataset.id;

    try {
        await deleteTodo(id);
        todoList.removeChild(li);
    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }
}

async function handleUpdateClick(target) {
    const li = getTodoEl(target);
    const id = li.dataset.id;

    try {
        const todo = await getTodo(id);
        createUpdateForm(todo, li);
    } catch(err) {
        console.log(`${err.name}: ${err.message}`);
    }
}
