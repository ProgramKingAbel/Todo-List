import './styles/main.css';

const taskContainer = document.querySelector('.all-tasks');
const createTask = document.getElementById('create');
const formInput = document.querySelector('.input');
const form = document.querySelector('form');
const tasks = [];

const generateTask = (myTask) => {
  const taskItem = document.createElement('div');
  taskItem.classList = 'list-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = myTask.completed;

  if (myTask.completed) {
    taskItem.classList.add('done');
  }

  const taskDesc = document.createElement('input');
  taskDesc.type = 'text';
  taskDesc.value = myTask.description;
  taskDesc.setAttribute('disabled', '');

  const ellipses = document.createElement('button');
  ellipses.innerHTML = '<i class="uil uil-ellipsis-v"></i>';

  taskItem.append(checkbox);
  taskItem.append(taskDesc);
  taskItem.append(ellipses);

  checkbox.addEventListener('change', () => {
    myTask.completed = checkbox.checked;
    if (myTask.completed) {
      taskItem.classList.add('done');
    } else {
      taskItem.classList.remove('done');
    }
  });

  taskDesc.addEventListener('input', () => {
    myTask.description = formInput.value;
  });

  taskDesc.addEventListener('blur', () => {
    taskDesc.setAttribute('disabled', '');
  });
  taskDesc.addEventListener('hover', () => {
    taskDesc.removeAttribute('disabled');
    taskDesc.focus();
  });

  return { taskItem, taskDesc, ellipses };
};

const createMyTask = () => {
  const myTask = {
    id: Date.now(),
    completed: false,
    description: formInput.value,
  };

  tasks.push(myTask);

  const { taskItem, taskDesc } = generateTask(myTask);

  taskContainer.append(taskItem);
  taskDesc.removeAttribute('disabled');
  taskDesc.focus();
};

createTask.addEventListener('click', (e) => {
  e.preventDefault();
  const myTask = formInput.value;
  if (myTask) {
    createMyTask();
    form.reset();
  }
});