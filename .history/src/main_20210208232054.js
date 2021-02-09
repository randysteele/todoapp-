'use strict';
const backend_url = "http://localhost:3000/tasks"

document.addEventListener('DOMContentLoaded', () => {
  getTasks();
})

function getTasks(){
  fetch(backend_url)
  .then(response => response.json())
  .then(list => {
    list.forEach(task => {
      debugger
    })
  })
}

function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
  }, 1000);
}

counter();
