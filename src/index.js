import './styles/main.css';

import { createMyTask } from './modules/taskManager.js';
import clearCompleted from './modules/clearCompleted.js';

const createTask = document.getElementById('create');
const form = document.querySelector('form');
const formInput = document.querySelector('.input');
const clearButton = document.querySelector('#clearAll');

createTask.addEventListener('click', (e) => {
  e.preventDefault();
  const myTask = formInput.value;
  if (myTask) {
    createMyTask();
    form.reset();
  }
});

clearButton.addEventListener('click', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  clearCompleted(tasks);
});
