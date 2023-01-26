export const DeleteButton = () =>{
    const button = document.createElement('button')
    button.classList.add('task__button')
    button.innerText = 'Delete'
    button.addEventListener('click', deleteTask)

    return button
}

const deleteTask = (event) => {
    const deleteButton = event.target
    const completeTask = deleteButton.parentElement
    completeTask.remove()

    return deleteButton
}
