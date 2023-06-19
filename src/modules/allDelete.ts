import { sendRequest } from './postToDo';
import { Item } from '../index';

export function allDelete (): void {
    const liItems : NodeListOf<HTMLInputElement> = document.querySelectorAll('.checkBoxToDo')
    liItems.forEach( (item): void => { 
        if(item.checked) {
            sendRequest <Item, void>('DELETE', `todos/${item.id}`)
         .then(() => {
                item?.parentElement?.remove()
            }
        )} 
    })
}