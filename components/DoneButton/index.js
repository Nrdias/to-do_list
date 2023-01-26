export const DoneButton = () =>{
    const button = document.createElement('button')
    button.classList.add('task__button')
    button.innerText = 'Done'
    button.addEventListener('click', finishTask)

    return button

}

const finishTask = (event) => {
    const doneButton = event.target
    const finishedTask = doneButton.parentElement
    finishedTask.classList.toggle('done')
    if(doneButton.innerText == "Done"){
        doneButton.innerText = 'Undo'
    } else{
        doneButton.innerText = 'Done'
    }
}

