import { sendRequest } from './postToDo.js'

const deleteAllBtn = document.querySelector('.deleteBtn')
deleteAllBtn.addEventListener('click', allDelete)

function allDelete () {
    const liItems = document.querySelectorAll('.checkBoxToDo')
    liItems.forEach( item => {
        if(item.checked) {
            sendRequest ('DELETE', `todos/${item.id}`)
         .then(() => {
                item.parentElement.remove()
            }
        )}
    })
}
