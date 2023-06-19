import { sendRequest } from "./postToDo"

export function controlImgDelete (): void {
    const deleteItem = document.querySelector('.deleteImg') as HTMLDivElement
    deleteItem.addEventListener('click', deleteLi)
}

function deleteLi (event : Event): void {
    const target = event.target as HTMLDivElement
    sendRequest('DELETE', `todos/${target.id}`)
    .then(() => {
        target.parentElement?.remove()
    })
}