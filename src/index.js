import './styles/main.css'


const taskContainer = document.querySelector('.all-tasks');
const createTask = document.getElementById('create');
const formInput = document.querySelector('.input');
const form = document.querySelector('form');
let tasks = [];

const createMyTask = () => {
    const myTask = {
        id: Date.now(),
        completed: false,
        description: formInput.value
    }

    tasks.push(myTask); 
    
    const { taskItem, taskDesc } = generateTask(myTask);

    taskContainer.append(taskItem);
    taskDesc.removeAttribute('disabled');
    taskDesc.focus();
    
}

