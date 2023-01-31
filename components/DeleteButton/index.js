export const DeleteButton = () => {
  const button = document.createElement("button");
  button.classList.add("task__button");
  button.innerText = "Delete";
  button.addEventListener("click", deleteTask);

  return button;
};

const deleteTask = (event) => {
  const deleteButton = event.target;
  const completeTask = deleteButton.parentElement;
  completeTask.remove();
  //remover o item da local storage com base no value
  const content = completeTask.querySelector(".content").innerText;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    if (value == content) {
      localStorage.removeItem(key);
    }
  }
  return deleteButton;
};
