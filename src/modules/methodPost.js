const URL_TODOS ='https://jsonplaceholder.typicode.com/todos'
const ul = document.querySelector('.toDos');

export function sendRequest(method, url, bodyElement = null, itemId = '', value){
    if (method = 'GET' || 'DELETE') {
     return fetch(`${url}\ ${itemId}`, {
             method: method, 
           })
           .then((response) => response.json())
           .catch (err => console.log(`sorry problem with server, try later.`))
    }

    if (method = 'PATCH') {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${itemId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            "completed": value
        }),
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
        },
        })
    } else {
      return fetch(url, {
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

    sendToServe(valuePost);
    id++
    return id
}

const sendToServe = (valuePost) => {
    const body = {
        userId: 1,
        completed: false,
        title: valuePost,
    }
    sendRequest ('POST', URL_TODOS, body)
    .then(
        criateLi(valuePost, id)
    )
}

const criateLi = (valuePost, id) => {
    const li = document.createElement('li')
    li.innerHTML = `<input id="${id}" type="checkbox"><label id="firstLabel" class="firstStyle" for="${id}">${valuePost}</label><div id="${id}" class="deleteImg"></div>`
    ul.prepend(li)
    controlCheckBox()
    controlImgDelete()
}

export function controlCheckBox () {
    const label = document.querySelector('.firstStyle');
    const testCheckBox = document.querySelector('input[type="checkbox"]')
    testCheckBox.addEventListener('click', () => label.classList.toggle('checked'))
    testCheckBox.addEventListener('change', () => patch(label.className.includes('checked'), testCheckBox.id))
}

function patch (value, id) {
    sendRequest('PATCH', URL_TODOS, id, '', value)
}

export function controlImgDelete () {
    const deleteItem = document.querySelector('.deleteImg')
    deleteItem.addEventListener('click', deleteLi)
}

export function deleteLi () {
    sendRequest('DELETE', URL_TODOS, this.id)
    .then(() => {
        this.parentNode.remove()
    })
}