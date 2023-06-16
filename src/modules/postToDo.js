import { createLi } from "./createToDo";

const URL_TODOS ='https://jsonplaceholder.typicode.com/todos'

export function sendRequest(method, itemId = '',  bodyElement = null, value){
    if (method = 'GET' || 'DELETE') {
     return fetch(`${URL_TODOS}/${itemId}`, {
             method: method, 
           })
           .then((response) => response.json())
           .catch (err => console.log(`sorry problem with server, try later.`))
    }

    if (method = 'PATCH') {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${itemId}`, {
        method: method,
        body: JSON.stringify({
            "completed": value
        }),
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
        },
        })
    } else {
      return fetch(URL_TODOS, {
        method: method, 
        body: JSON.stringify(bodyElement),
         
        headers: {
         'Content-type': 'application/json; charset=UTF-8',
        },
   })
     .then((response) => response.json())
     .catch (err => console.log(`sorry problem with server, try later.`))
    }
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
    sendRequest ('POST', '', body)
    .then(() => {
        createLi(valuePost, id) 
    })
}
