import clearCompleted from './clearCompleted.js';
import save from "./filtered.js";

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



beforeEach(() => {
    const testTasks = [
        {
            id: 1,
            description: 'Task 1',
            completed: false,
        },
        {
            id: 2,
            description: 'Task 1',
            completed: true,
        },
        {
            id: 3,
            description: 'Task 1',
            completed: true,
        }
    ]
    localStorage.setItem('tasks', JSON.stringify(testTasks));
})

describe('Clear completed', () => {
    test('Remove completed from storage', () => {
        clearCompleted();
        let newTasks = localStorage.getItem('tasks');
        newTasks = JSON.parse(newTasks);
        const saved = save(newTasks);
        expect(saved.length).toBe(1);
        expect(saved[0].completed).toBeFalsy();
    })
})

