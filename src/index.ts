import './main.scss';
import { sendRequest } from './modules/postToDo';
import { createLi } from './modules/createToDo';
import { allDelete } from './modules/allDelete';
import { sendToDo } from './modules/postToDo';

export type Item = {
    completed: boolean,
    id: number,
    title: string,
    userId: number,
}

sendRequest<Item[], void>('GET', "todos")
    .then((data): void => {
        const elements = data.slice(0,10) 
        elements.forEach(
          (item: Item): void => {
            const {completed, id, title, userId} = item
            createLi(title, id, completed, userId)
          }
        )            
    })

const deleteAllBtn : HTMLInputElement | null = document.querySelector('.deleteBtn')
deleteAllBtn?.addEventListener('click', allDelete)

const postBtn : HTMLInputElement | null = document.querySelector('#postBtn')
postBtn?.addEventListener('click', sendToDo) 