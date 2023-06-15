import { sendRequest } from './methodPost.js'

const ul = document.querySelector('.toDos');
const deleteAllBtn = document.querySelector('.deleteBtn')
const URL_TODOS ='https://jsonplaceholder.typicode.com/todos'
deleteAllBtn.addEventListener('click', allDelete)

function allDelete () {
    const liItems = document.querySelectorAll('input[type=checkbox]')
    liItems.forEach(item => {
        sendRequest ('DELETE', URL_TODOS, item.id)
         .then(() => ul.innerHTML = '')
    })
}
