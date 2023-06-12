const toDoList ='https://jsonplaceholder.typicode.com/todos'
const ul = document.querySelector('.toDos');

function sendRequestPost (method, url, body = null){
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    })
    .then(response => {
        return response.json()
    })
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
    sendRequestPost ('POST', toDoList, body)
    .then(
        criateLi(valuePost, id)
    )
    .catch(err => console.log(`Error, try latter`)) 
}

const criateLi = (valuePost, id) => {
    const li = document.createElement('li')
    li.innerHTML = `<input id="${id}" type="checkbox"><label id="firstLabel" class="firstStyle" for="${id}">${valuePost}</label><div id="${id}" class="deleteImg"></div>`
    ul.prepend(li)
    controleCheckBox()
    controleImgDelete()
}

export function controleCheckBox () {
    const label = document.querySelector('.firstStyle');
    const testCheckBox = document.querySelector('input[type="checkbox"]')
    testCheckBox.addEventListener('click', () => label.classList.toggle('checked'))
    testCheckBox.addEventListener('change', () => {
        if (label.className.includes('checked')) {
            patch(true, testCheckBox.id)
        } else {
            patch(false, testCheckBox.id)
        }
    })
}

function checkValue () {
    if (label.className.includes('checked')) {
       return patch(true, testCheckBox.id)
    } else {
       return patch(false, testCheckBox.id)
    }
}

function patch (value, id) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            "completed": value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
    .catch(err => console.log('Try latter, problem with serve'))
}

export function controleImgDelete () {
    const deleteItem = document.querySelector('.deleteImg')
    deleteItem.addEventListener('click', deleteLi)
}

export function deleteLi () {
    fetch(`https:jsonplaceholder.typicode.com/todos/${this.id}`, { method: 'DELETE' })
    .then(() => {
        this.parentNode.remove()
    })
    .catch(err => 'Problem with serve, try latter')
}