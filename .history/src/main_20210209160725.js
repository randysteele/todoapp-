'use strict';
const backend_url = "http://localhost:3000/tasks"

document.addEventListener('DOMContentLoaded', () => {
  getTasks();


const createTaskForm = document.getElementById("create-task-form");
   e.preventDefault();
  })
  

function getTasks(){
  fetch(backend_url)
  .then(response => response.json())
  .then(list => {
    list.forEach(task => {
      const taskMarkup = `
      <div> ${task.id}.</div>
      <h3> Task: ${task.content}</h3>
      <div> Category: ${task.category}</div>
      `
      // debugger
      document.getElementById("task-container").innerHTML += taskMarkup
    })
  })
}

