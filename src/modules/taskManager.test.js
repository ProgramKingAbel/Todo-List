/**
 * @jest-environment jsdom
 */

import { createMyTask, deleteTask,edit } from "./taskManager"

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




