import '../scss/styles.scss';

import { init } from './app';
import { handleTodoFormSubmit, handleTodoListClick, handleTodoListSubmit } from './handlers';

const todoForm = document.querySelector('#todo-form')
const todoList = document.querySelector('#todo-list')

todoForm.addEventListener('submit', handleTodoFormSubmit);
todoList.addEventListener('click', handleTodoListClick);
todoList.addEventListener('submit', handleTodoListSubmit);

(async () => {
    await init();
})();






