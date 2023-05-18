/**
 * @jest-environment jsdom
 */

import {
  generateTask,
  createMyTask,
  deleteTask,
} from './taskManager.js';

jest.mock('uuid', () => ({
  v4: jest.fn(() => 'mocked-uuid'),
}));

beforeEach(() => {
  document.body.innerHTML = `
<div class="wrapper" id="container">
<div class="heading">
    <h3>Demo</h3>
    <button><i class="uil uil-sync"></i></button>
   
</div>

<form class="insert">
    <input type="text" placeholder="Add to your list..." class="input" value="Task one">
    <button type="submit"id="create"><i class="uil uil-enter"></i></button>
    
</form>

<!-- Tasks Dynamically Generated -->

<div class="all-tasks"></div>

<div class="clear">
    <button id="clearAll">Clear all Completed</button> 
</div>
</div>`;
});

afterEach(() => {
  document.body.innerHTML = '';
  localStorage.clear();
});

describe('add & remove operations', () => {
  test('add one item', () => {
    createMyTask();
    const tasks = document.querySelectorAll('.list-item');
    expect(tasks).toHaveLength(1);
  });

  test('remove one item', () => {
    deleteTask();
    const tasks = document.querySelectorAll('.list-item');
    expect(tasks).toHaveLength(0);
  });
});

describe('generateTask', () => {
  let task;
  let taskItem;
  let checkbox;
  let taskDesc;
  let ellipses;

  beforeEach(() => {
    task = {
      id: 1,
      completed: false,
      description: 'Sample task',
    };

    const {
      taskItem: ti,
      checkbox: cb,
      taskDesc: td,
      ellipses: el,
    } = generateTask(task);
    taskItem = ti;
    checkbox = cb;
    taskDesc = td;
    ellipses = el;
  });
  it('should toggle the task completed status when the checkbox is changed', () => {
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change'));

    expect(task.completed).toBe(true);
    expect(taskItem.classList.contains('done')).toBe(true);

    checkbox.checked = false;
    checkbox.dispatchEvent(new Event('change'));

    expect(task.completed).toBe(false);
    expect(taskItem.classList.contains('done')).toBe(false);
  });

  it('should update the task description when the input value changes', () => {
    taskDesc.value = 'Updated Task Description';
    taskDesc.dispatchEvent(new Event('input'));

    expect(task.description).toBe('Updated Task Description');
  });

  it('should disable the task description input and update ellipses when it loses focus', () => {
    taskDesc.dispatchEvent(new Event('blur'));

    expect(taskDesc.getAttribute('disabled')).toBe('');
    expect(ellipses.innerHTML).toBe('<i class="uil uil-ellipsis-v"></i>');
  });
});
