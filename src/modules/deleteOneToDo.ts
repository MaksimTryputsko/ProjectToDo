import { sendRequest } from "./postToDo"
import { Item } from '../index';

export function controlImgDelete (): void {
    const deleteItem : HTMLDListElement | null = document.querySelector('.deleteImg')
    deleteItem?.addEventListener('click', deleteLi)
}

function deleteLi (event : Event): void {
    const target = event.target as HTMLDivElement
    sendRequest<Item, void>('DELETE', `todos/${target.id}`)
    .then(() => {
        target.parentElement?.remove()
    })
}
