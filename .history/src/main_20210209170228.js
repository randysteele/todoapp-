'use strict';
const backend_url = "http://localhost:3000/tasks"

document.addEventListener('DOMContentLoaded', () => {
  getTasks();


const createTaskForm = document.getElementById("create-task-form");

  createTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
  })
});


function getTasks(){
  fetch(backend_url)
  .then(response => response.json())
  .then(list => {
    list.forEach(task => {
      const taskMarkup = `
      <div> ${task.id}.</div>
      <h3> Task: ${task.content}</h3>
      <div> Category: ${task.category}</div>
      <input id="create-button" type ="submit" name="submit" value="Add to Task List">
      `
      // debugger
      document.getElementById("task-container").innerHTML += taskMarkup
    })
  })}
