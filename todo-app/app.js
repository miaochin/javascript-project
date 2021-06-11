const tbdBtn = document.getElementById('tbd');
const completeBtn = document.getElementById('complete');
const addtodoBtn = document.getElementById('addtodo')
const todotext = document.getElementById('todotext');
const tbd_list = document.querySelector('.tbd-list');
const complete_list = document.querySelector('.complete-list');
const todos = JSON.parse(localStorage.getItem("todos"));
const completes = JSON.parse(localStorage.getItem("completes"))

if (todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  })
}

if (completes) {
  completes.forEach((complete) => {
    addComplete(complete);
  })
}

addtodoBtn.addEventListener('click', () => {
  if (todotext.value) {
    let empty_num = 0;
    for (let i = 0; i < todotext.value.length; i += 1) {
      if (todotext.value[i] === ' ') {
        empty_num += 1;
      }
    }
    if (empty_num === todotext.value.length) {
      window.alert("Todo can not be empty!");
    }
    else {
      addTodo(todotext.value);
      todotext.value = "";
    }
  }
  else {
    window.alert("Todo can not be empty!");
  }
})

tbdBtn.addEventListener('click', () => {
  tbd_list.classList.remove("hidden");
  complete_list.classList.add("hidden");
})

completeBtn.addEventListener('click', () => {
  complete_list.classList.remove("hidden");
  tbd_list.classList.add("hidden");
})

function addTodo(text) {
    const todo = document.createElement('li');
    todo.innerHTML = `
        <p>${text}</p>
        <div>
          <button><i class="fas fa-check"></i></button>
          <button><i class="fas fa-times"></i><button>
        </div>`;
    tbd_list.appendChild(todo);
    const deleteBtn = todo.querySelector('.fa-times');
    const checkBtn = todo.querySelector('.fa-check');
    updateLS_todo();
    
    deleteBtn.addEventListener('click', () => {
      todo.remove();
      updateLS_todo();
    })
    
    checkBtn.addEventListener('click', () => {
      addComplete(text);
      todo.remove();
      updateLS_todo();
      updateLS_complete();
    })
}

function addComplete(text) {
  const complete = document.createElement('li');
  complete.innerHTML = `
      <p>${text}</p>
      <div>
        <button><i class="fas fa-undo"></i></button>
        <button><i class="fas fa-times"></i></button>
      </div>`;
  complete_list.appendChild(complete);
  const deleteBtn = complete.querySelector('.fa-times');
  const undoBtn = complete.querySelector('.fa-undo');
  updateLS_complete();
  
  deleteBtn.addEventListener('click', () => {
    complete.remove();
    updateLS_complete();
  })
  
  undoBtn.addEventListener('click', () => {
    addTodo(text);
    complete.remove();
    updateLS_todo();
    updateLS_complete();
  })
}

function updateLS_todo() {
  const alltodo = tbd_list.querySelectorAll('p');
  const todos = [];
  
  alltodo.forEach((todo) => {
    todos.push(todo.innerText);
  })
  
  localStorage.setItem("todos", JSON.stringify(todos));
}

function updateLS_complete() {
  const allcomplete = complete_list.querySelectorAll('p');
  const completes = [];
  
  allcomplete.forEach((complete) => {
    completes.push(complete.innerText);
  })
  
  localStorage.setItem("completes", JSON.stringify(completes));
}