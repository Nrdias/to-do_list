export const DoneButton = () => {
  const button = document.createElement("button");
  button.classList.add("task__button");
  button.innerText = "Done";
  button.addEventListener("click", finishTask);

  return button;
};

const finishTask = (event) => {
  const doneButton = event.target;
  const finishedTask = doneButton.parentElement;
  finishedTask.classList.add("done");
  if (doneButton.innerText == "Done") {
    doneButton.innerText = "Undo";
    const doneTasks = document.querySelectorAll(".done");
    doneTasks.forEach((task) => {
      const content = task.querySelector(".content").innerText;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        if (value == content) {
          localStorage.removeItem(key);
        }
      }
    });
  } else {
    let id = localStorage.length + 1;
    finishedTask.classList.remove("done");
    doneButton.innerText = "Done";
    //recuperar o value que seria exluida da local storage
    //criar um novo item na local storage com o value recuperado
    const content = finishedTask.querySelector(".content").innerText;
    localStorage.setItem(id, content);
    id + 2;
  }
};
