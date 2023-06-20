import { sendRequest } from './sendRequest';
import { TodoModel } from './toDoModel';

export function controlImgDelete (): void {
    const deleteItem :HTMLDListElement | null = document.querySelector('.deleteImg')
    deleteItem?.addEventListener('click', deleteLi)
}

function deleteLi (event : Event): void {
    const target = event.target as HTMLDivElement
    sendRequest<TodoModel, void>('DELETE', `todos/${target.id}`)
    .then(() => {
        target.parentElement?.remove()
    })
}
