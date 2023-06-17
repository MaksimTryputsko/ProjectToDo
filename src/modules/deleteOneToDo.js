import { sendRequest } from "./postToDo"

export function controlImgDelete () {
    const deleteItem = document.querySelector('.deleteImg')
    deleteItem.addEventListener('click', deleteLi)
}

function deleteLi (event) {
    sendRequest('DELETE', `todos/${event.target.id}`)
    .then(() => {
        this.parentNode.remove()
    })
}