import { createLi } from "./createToDo";

export const URL ='https://jsonplaceholder.typicode.com/'

export function sendRequest (method, url, path, body = null) {
    const bodyControle = body ? JSON.stringify(body) : undefined
    return fetch(`${url}${path}`, {
        method,
        budy: bodyControle,
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    .then((response) => response.json())
    .catch (err => console.log(`sorry problem with server, try later.`))
}

document.querySelector('#postBtn').addEventListener('click', sendToDo)

let id = 11;

function sendToDo () {
    const valuePost = document.querySelector('#postInput').value

    sendToServer(valuePost, id);
    id++
    return id
}

const sendToServer = (valuePost, id) => {
    const body = {
        userId: 1,
        completed: false,
        title: valuePost,
    }
    sendRequest ('POST', URL, 'todos', body)
    .then(() => {
        createLi(valuePost, id) 
    })
}
