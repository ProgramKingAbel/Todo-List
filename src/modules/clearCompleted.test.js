import clearCompleted from './clearCompleted.js';

describe('clearCompleted', () => {
  test('should remove completed tasks', () => {
    const tasks = [
      { description: 'Task 1', completed: true },
      { description: 'Task 2', completed: false },
      { description: 'Task 3', completed: true },
    ];
    const expected = [{ description: 'Task 2', completed: false }];
    expect(clearCompleted(tasks)).toEqual(expected);
  });
});
