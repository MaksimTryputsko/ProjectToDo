import { createLi } from "./createToDo";

const URL: string ='https://jsonplaceholder.typicode.com/'

type Body = {
    userId?: number,
    completed: boolean,
    title?: string
}

interface Response {
    completed: boolean,
    id: number,
    title: string,
    userId: number,
}

export function sendRequest<Response> (method: string, path: string, body?: Body | null): Promise<Response> {
    const bodyControl: string | undefined = body ? JSON.stringify(body) : undefined
    return fetch(`${URL}${path}`, {
        method,
        body: bodyControl,
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    .then((response) => response.json())
    .catch (err => console.log(`sorry problem with server, try later.`))
}

const postBtn = document.querySelector('#postBtn') as HTMLInputElement
postBtn.addEventListener('click', sendToDo) 

let id: number = 11;

function sendToDo (): number {
    const valuePostElement = document.querySelector('#postInput') as HTMLInputElement
    const valuePost: string = valuePostElement.value
    sendToServer(valuePost, id);
    id++
    return id
}

const sendToServer = (valuePost: string, id: number): void => {
    const body: Body = {
        userId: 1,
        completed: false,
        title: valuePost,
    }
    sendRequest ('POST', 'todos', body)
    .then(() => {
        createLi(valuePost, id, false) 
    })
}
