import { sendRequest } from "./postToDo"

export function controlImgDelete () {
    const deleteItem = document.querySelector('.deleteImg')
    deleteItem.addEventListener('click', deleteLi)
}

function deleteLi () {
    sendRequest('DELETE', this.id)
    .then(() => {
        this.parentNode.remove()
    })
}