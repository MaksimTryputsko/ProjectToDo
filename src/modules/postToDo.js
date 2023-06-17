import { createLi } from "./createToDo";

const URL ='https://jsonplaceholder.typicode.com/'

export function sendRequest (method, path, body = null) {
    const bodyControl = body ? JSON.stringify(body) : undefined
    return fetch(`${URL}${path}`, {
        method,
        budy: bodyControl,
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
    sendRequest ('POST', 'todos', body)
    .then(() => {
        createLi(valuePost, id) 
    })
}
