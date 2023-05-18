/**
 * @jest-environment jsdom
 */

import { createMyTask, deleteTask } from "./taskManager"

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
</div>`
   

});

afterEach(() => {
    document.body.innerHTML = '';
})


describe("add & remove operations", () => {
  test("add one item", () => {
    createMyTask();
    const tasks = document.querySelectorAll(".list-item");
    expect(tasks).toHaveLength(1);
  });

  test("remove one item", () => {
    deleteTask();
    const tasks = document.querySelectorAll(".list-item");
    expect(tasks).toHaveLength(0);
  });
});

