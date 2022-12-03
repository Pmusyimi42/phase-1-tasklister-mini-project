document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const newTask = document.getElementById('new-task-description').value
    const list = document.createElement("li");
    list.innerText = newTask
    const task = document.getElementById("tasks")
    task.appendChild(list)
    const btn = document.createElement("button");
    btn.innerText = " X "
    btn.addEventListener("click", () =>{
      task.removeChild(list)
    })
    list.appendChild(btn)
  });
  
});
