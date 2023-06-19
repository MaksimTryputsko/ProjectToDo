import { sendRequest } from './postToDo';

const deleteAllBtn = document.querySelector('.deleteBtn') as HTMLInputElement
deleteAllBtn.addEventListener('click', allDelete)

function allDelete (): void {
    const liItems = document.querySelectorAll('.checkBoxToDo') as NodeListOf<HTMLInputElement>
    console.log(liItems)
    liItems.forEach( (item): void => { 
        if(item.checked) {
            sendRequest ('DELETE', `todos/${item.id}`)
         .then(() => {
                item?.parentElement?.remove()
            }
        )} 
    })
}