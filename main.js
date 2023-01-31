import { DoneButton } from "./components/DoneButton";
import { DeleteButton } from "./components/DeleteButton";

let id = localStorage.length + 1;

const app = document.getElementById("app");
const container = `
<div class="form">
  <h1>To-do List</h1>
  <form class= "form__insert" action="">
   <input id="form__input" type="text" placeholder="Describe the task here..."></input>
   <button id="form__button">Add Task</button> 
  </form>
  <div class="list">
    <ul id="list__items"></ul>
  </div>
</div>
`;

app.innerHTML = container;

/**
 * When the form button is clicked, prevent the default action, get the list, get the input, get the
 * value, if the value is empty or a space, alert the user, otherwise, set the local storage, create a
 * new task, add the done and delete buttons, append the new task to the list, clear the input, and
 * increment the id.
 * @param event - The event object is a property of the Window object.
 * @returns the button element.
 */
const insertTask = (event) => {
  event.preventDefault();

  const list = document.getElementById("list__items");
  const input = document.getElementById("form__input");
  const value = input.value;

  if (value == "" || value == " ") {
    alert("You can't create a empty task");
    return;
  }
  localStorage.setItem(id, value);
  const content = `<p class="content">${value}</p>`;
  const newTask = document.createElement("li");
  newTask.classList.add("item");
  newTask.innerHTML = content;

  newTask.appendChild(DoneButton());
  newTask.appendChild(DeleteButton());
  list.appendChild(newTask);
  input.value = " ";
  input.placeholder = "Describe the task here...";
  id++;
};

const formButton = document.getElementById("form__button");
formButton.addEventListener("click", insertTask);

/**
 * For each item in localStorage, create a new list item, add the content of the item to the list item,
 * add the Done and Delete buttons to the list item, and append the list item to the list.
 */
const loadTasks = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const list = document.getElementById("list__items");
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    const content = `<p class="content">${value}</p>`;
    const newTask = document.createElement("li");
    newTask.classList.add("item");
    newTask.innerHTML = content;

    newTask.appendChild(DoneButton());
    newTask.appendChild(DeleteButton());
    list.appendChild(newTask);
  }
};

loadTasks();
