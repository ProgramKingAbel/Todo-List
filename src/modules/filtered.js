const newId = (newTasks) => newTasks.map((task, id) => ({
  ...task,
  id: id + 1,
}));

const save = (newTasks) => {
  const updateTask = newId(newTasks);
  localStorage.setItem('tasks', JSON.stringify(updateTask));
};

export default save;