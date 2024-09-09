// const Swal = require('sweetalert2');
//selectors
const inputTodo = document.getElementById('input-todo');
const submitTodo = document.getElementById('submit-todo');
const content = document.getElementById('content');

function getTodos() {
  const data = localStorage.getItem('todos');
  return JSON.parse(data);
}

function setTodos(payload) {
  localStorage.setItem('todos', JSON.stringify(payload));
}

function addTodo() {
  // step 1. ambil existing todos
  let todos = getTodos();
  // step 1.1. Cek Apakah sudah ada todos yang existing
  if (!todos) {
    todos = [];
  }
  // step 2. buat todo baru
  const lastId = Number(localStorage.getItem('lastId'));
  const id = lastId ? lastId + 1 : 1;
  localStorage.setItem('lastId', id);
  const payload = {
    id,
    todo: inputTodo.value,
    isDone: false,
  }; //data baru
  todos.push(payload);

  // step 3. simpan todo baru ke dalam localStorage
  setTodos(todos);

  // step 4. display todo

  inputTodo.value = '';

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Todo has been added!',
    showConfirmButton: false,
    timer: 1500,
    toast: true,
  });
  displayTodo();
}

function updateTodo(id) {
  const todos = getTodos();
  let currentTodo = todos.find(e => e.id === id);
  if (!todos) return;
  if (currentTodo === -1) return;

  currentTodo.isDone = !currentTodo.isDone;
  setTodos(todos);
}

function deleteTodo(id) {
  const todos = getTodos();
  const updatedTodos = todos.filter(e => e.id !== id);
  setTodos(updatedTodos);
  displayTodo();
}

function sort(type) {
  const todos = getTodos();
  switch (type) {
    case 'ascending':
      todos.sort((a, b) => {
        if (a.todo > b.todo) return 1;
        return -1;
      });
      break;
    case 'descending':
      todos.sort((a, b) => {
        if (a.todo < b.todo) return 1;
        return -1;
      });
      break;
    default:
      todos.sort((a, b) => a.id - b.id);
      break;
  }
  setTodos(todos);
  displayTodo();
}

function displayTodo() {
  content.innerHTML = '';
  const todos = getTodos();

  let listHtml = '';

  if (todos) {
    for (let i = 0; i < todos.length; i++) {
      const html = `
                    <li class="list-group-item">
                        <div class="d-flex flex-row align-items-center justify-content-between">
                            <div class="d-flex flex-row gap-3 align-items-center">
                                <input class="form-check-input mt-0" type="checkbox" value="" ${
                                  todos[i].isDone
                                    ? 'checked'
                                    : ''
                                } onchange="updateTodo(${
        todos[i].id
      })"
                                    aria-label="Checkbox for following text input">
                                <label class="form-check-label" for="firstRadio">${
                                  todos[i].todo
                                }</label>
                            </div>
                            <button type="button" class="btn btn-danger" onclick="deleteTodo(${
                              todos[i].id
                            })">Delete</button>
                        </div>
                    </li>
        `;
      listHtml += html;
    }
  }

  content.innerHTML = listHtml;
}

displayTodo();
