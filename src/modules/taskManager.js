const taskContainer = document.querySelector('.all-tasks');

let tasks = [];

const storage = () => {
  const save = JSON.stringify(tasks);
  localStorage.setItem('tasks', save);
};

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
  taskDesc.classList = 'input-desc';
  taskDesc.setAttribute('disabled', '');

  const ellipses = document.createElement('button');
  ellipses.innerHTML = '<i class="uil uil-ellipsis-v"></i>';

  taskItem.append(checkbox);
  taskItem.append(taskDesc);
  taskItem.append(ellipses);

  checkbox.addEventListener('change', () => {
    taskDesc.setAttribute('disabled', '');
    myTask.completed = checkbox.checked;

    if (myTask.completed) {
      taskItem.classList.add('done');
    } else {
      taskItem.classList.remove('done');
    }

    storage();
  });

  taskDesc.addEventListener('input', () => {
    taskItem.removeAttribute('disabled');
    edit(myTask, taskDesc);
    storage();
  });

  taskDesc.addEventListener('blur', () => {
    taskDesc.setAttribute('disabled', '');
    ellipses.innerHTML = '<i class="uil uil-ellipsis-v"></i>';
    storage();
  });

  taskItem.addEventListener('click', () => {
    taskDesc.removeAttribute('disabled');
    taskDesc.focus();
    ellipses.innerHTML = '<i class="uil uil-trash-alt"></i>';

    ellipses.addEventListener('focus', () => {
      const idX = myTask.id;
      deleteTask(idX);
      storage();
    });
  });

  return { taskItem, taskDesc, ellipses };
};

const deleteTask = (idX) => {
  tasks = tasks.filter((i) => i.id !== idX);
  for (let x = 0; x < tasks.length; x += 1) {
    if (tasks[x].id > idX) {
      tasks[x].id -= 1;
    }
  }
};

const createMyTask = () => {
  const myTask = {
    id: tasks.length + 1,
    completed: false,
    description: document.querySelector('.input').value,
  };

  tasks.push(myTask);
  const { taskItem, taskDesc } = generateTask(myTask);
  document.querySelector('.all-tasks').append(taskItem);
  taskDesc.focus();

  storage();
};

const loadTasks = () => {
  const savedData = localStorage.getItem('tasks');
  if (savedData) {
    tasks = JSON.parse(savedData);
  }
};

const display = () => {
  loadTasks();
  for (let i = 0; i < tasks.length; i += 1) {
    const tasksAvailable = tasks[i];
    const { taskItem } = generateTask(tasksAvailable);
    taskContainer.append(taskItem);
  }
};
display();

export {
  generateTask, storage, createMyTask, deleteTask,
};
