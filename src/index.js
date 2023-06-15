import './main.scss';
import  { controlCheckBox, controlImgDelete, sendRequest }  from './modules/reExport'

const URL_TODOS ='https://jsonplaceholder.typicode.com/todos'
const ul = document.querySelector('.toDos');

function controlChecked (completed) {
    if (completed) {
        return "checked"
    } 
}

sendRequest('GET', URL_TODOS)
    .then(data => {
        data.splice(10, data.length - 1)
        data.forEach( function({completed,id,title,userId}) {
            const li = document.createElement('li')
            li.innerHTML = `<input id="${id}" type="checkbox" ${controlChecked(completed)}><label class="firstStyle ${controlChecked(completed)}" for="${id}">${title}</label><div id=${id} class="deleteImg"></div>`
            ul.prepend(li) 

            controlCheckBox()
            controlImgDelete()
            })            
    })