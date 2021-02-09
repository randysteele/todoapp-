'use strict';
const backend_url = "http://localhost:3000/tasks"

document.addEventListener('DOMContentLoaded', () => {
  getTasks();


const createTaskForm = document.getElementById("create-task-form")
  createTaskForm.addEventListener("submit", (e) => createFormHandler(e))
    e.preventDefault();
  })

function createFormHandler(e) {
  const taskId = document.getElementById('tasks').value
  const contentValue = document.getElementById('content-value').value
  const categoryValue = document.getElementById('category-value').value
}  

function postTask(content, category, id)
  fetch(backend_url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      content: content,
      category: category
    })
  })
  .then(response => response.json())
  .then(task => {
    const taskMarkup = `
    <div id=${task.id}>
    <h3>Task: ${task.content}</h3>
    <p> Category: ${task.category}</p>`
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
  })}
