import './main.scss';
import  { sumTest }  from './modules/reExport'

const toDoList ='https://jsonplaceholder.typicode.com/todos'

const ul = document.querySelector('.toDos');

function controleChecked (completed) {
    if (completed) {
        return "checked"
    } 
}

function sendReques(method, url) {
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.onload = () => {
            if (xhr.status >= 400){
                reject('Sorry, we have problems with serve')
            } else {
            resolve((xhr.response))
            }
        }
        xhr.error = () => {
            reject(xhr.response)
        }
        xhr.send() 
    })
}

sendReques('GET', toDoList)
    .then(data => {
            data.splice(10, data.length - 1)
            data.forEach(
                function({completed,id,title,userId}) {
                    const li = document.createElement('li')
                    li.innerHTML = `<input id="${id}" type="checkbox" ${controleChecked(completed)}><label class="firstStyle ${controleChecked(completed)}" for="${id}">${title}</label><div class="deleteImg"></div>`
                    ul.prepend(li) 
                    // controleCheckBox()
                }
            )
    })
    .catch(err => console.log(err))

//1) all inputCheckBox with forEach, toggle style from label

// function controleCheckBox(){
//     const testCheckBox = document.querySelectorAll('input[type="checkbox"]')
//     testCheckBox.forEach((item)=>{
//         if(item.checked === true){
//             console.log(item)
//         }
//     })
// }
