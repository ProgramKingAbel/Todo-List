import save from './filtered.js';

const clearCompleted = (tasks) => {
  tasks = tasks.filter((i) => !i.completed);
  save(tasks);
  document.location.reload();
};

export default clearCompleted;