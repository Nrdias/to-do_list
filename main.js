import { DoneButton } from "./components/DoneButton"
import { DeleteButton } from "./components/DeleteButton"

// Estrutura Base
const app = document.getElementById('app')


const container = 

`<div class="form">
  <h1>To-do List</h1>
  <form action="">
   <input id="form__input" type="text" placeholder="Describe the text here..."></input>
   <button id="form__button">Add Task</button> 
  </form>
</div>
<div class="list">
  <ul id="list__items"></ul>
</div>
`

app.innerHTML = container

// Final

const insertTask = (event) =>{

  event.preventDefault()

  const list = document.getElementById('list__items')
  const input = document.getElementById('form__input')
  const value = input.value

  if(value == '' || value == ' '){
    alert("You can't create a empty task")
    return
  }

  const content = `<p class="content">${value}</p>`
  const newTask = document.createElement('li')
  newTask.classList.add('item')
  newTask.innerHTML = content

  newTask.appendChild(DoneButton())
  newTask.appendChild(DeleteButton())
  list.appendChild(newTask)
  input.value = " "
  
};

const formButton = document.getElementById("form__button");
formButton.addEventListener('click', insertTask)
