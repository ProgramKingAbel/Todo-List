import './styles/main.css';

const taskContainer = document.querySelector('.all-tasks');
const tasks = [
    {
        id: Date.now(),
        completed: false,
        description: 'Make my meals',
     },
    {
        id: Date.now(),
        completed: false,
        description: 'Take kids to school',
     },
    {
        id: Date.now(),
        completed: false,
        description: 'Report to Work',
     },
    {
        id: Date.now(),
        completed: false,
        description: 'Be happy to Code',
     },
];

tasks.forEach((task, e) => {
    
  const taskItem = document.createElement('div');
  taskItem.classList = 'list-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskDesc = document.createElement('input');
  taskDesc.type = 'text';
  taskDesc.value = `${tasks[e].description}`


  const ellipses = document.createElement('button');
  ellipses.innerHTML = '<i class="uil uil-ellipsis-v"></i>';

  taskItem.append(checkbox);
  taskItem.append(taskDesc);
    taskItem.append(ellipses);
    
    taskContainer.append(taskItem);
    taskDesc.removeAttribute('disabled');
    taskDesc.focus();
});

