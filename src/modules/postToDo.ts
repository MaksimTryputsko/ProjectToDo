import { createLi } from "./createToDo";

const URL: string ='https://jsonplaceholder.typicode.com/'

interface Body<A, B> {
    userId?: number,
    completed: A,
    title?: B,
}
interface TEST <A, B, C>{
    completed?: A,
    id: B,
    title: C,
    userId: B,
}
export function sendRequest<TEST> (method: string, path: string, body?: Body<boolean, string> | null): Promise<TEST> {
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
    const body: Body<boolean, string> = {
        userId: 1,
        completed: false,
        title: valuePost,
    }
    sendRequest ('POST', 'todos', body)
    .then(() => {
        createLi(valuePost, id, false) 
    })
}
