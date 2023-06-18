import { sendRequest } from "./postToDo"

export function controlImgDelete (): void {
    const deleteItem = document.querySelector('.deleteImg') as HTMLDivElement
    deleteItem.addEventListener('click', deleteLi)
}

function deleteLi (event : Event): void {

    sendRequest('DELETE', `todos/${(event.target as HTMLDivElement).id}`)
    .then(() => {
        (event.target as HTMLDivElement)?.parentNode?.remove()
        // this.parentNode.remove()
    })
}