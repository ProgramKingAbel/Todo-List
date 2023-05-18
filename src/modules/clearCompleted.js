import save from './filtered.js';

const clearCompleted = (tasks) => {
  const updatedTasks = tasks.filter((task) => !task.completed);
  save(updatedTasks);
  return updatedTasks;
};

export default clearCompleted;
