import { createLi } from "./createToDo";
import { Item } from '../index';
const URL: string ='https://jsonplaceholder.typicode.com/'


export function sendRequest<RESULT, BODY> (method: string, path: string, body?: BODY | null): Promise<RESULT> {
    const bodyControl: string | undefined = body ? JSON.stringify(body) : undefined
    return fetch(`${URL}${path}`, {
        method,
        body: bodyControl,
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    .then((response) => response.json())
    .catch (err => console.log(`sorry problem with server, try later.`))
}

let id: number = 11;

export function sendToDo (): number {
    const valuePostElement : HTMLInputElement | null = document.querySelector('#postInput')
    const valuePost: string  = valuePostElement!.value
    sendToServer(valuePost, id);
    id++
    return id
}

interface Body {
    userId?: number,
    completed: boolean,
    title?: string,
}

const sendToServer = (valuePost: string, id: number): void => {
    const body = {
        userId: 1,
        completed: false,
        title: valuePost,
    }
    sendRequest<Item, Body> ('POST', 'todos', body)
    .then(() => {
        createLi(valuePost, id, false) 
    })
}
