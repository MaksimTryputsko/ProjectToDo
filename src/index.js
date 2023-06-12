import './main.scss';
import  { controleCheckBox, controleImgDelete }  from './modules/reExport'

const toDoList ='https://jsonplaceholder.typicode.com/todos'
const ul = document.querySelector('.toDos');

function controleChecked (completed) {
    if (completed) {
        return "checked"
    } 
}

function sendRequest (method, url) {
    return fetch(url).then(resopnse => {
        return resopnse.json()
    })
}

sendRequest('GET', toDoList)
    .then(data => {
            data.splice(10, data.length - 1)
            data.forEach( function({completed,id,title,userId}) {
                            const li = document.createElement('li')
                            li.innerHTML = `<input id="${id}" type="checkbox" ${controleChecked(completed)}><label class="firstStyle ${controleChecked(completed)}" for="${id}">${title}</label><div id=${id} class="deleteImg"></div>`
                            ul.prepend(li) 

                            controleCheckBox()
                            controleImgDelete()
            })            
    })
    .catch(err => `Sorry problem with serve`)
