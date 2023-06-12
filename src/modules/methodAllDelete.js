const ul = document.querySelector('.toDos');
const deleteAllBtn = document.querySelector('.deleteBtn')

deleteAllBtn.addEventListener('click', allDelete)

function allDelete () {
    const liItems = document.querySelectorAll('input[type=checkbox]')
    liItems.forEach(item => {
         fetch(`https:jsonplaceholder.typicode.com/todos/${item.id}`, { method: 'DELETE' })
         .then(() => ul.innerHTML = '')
         .catch(err => 'Problem with serve, try latter')
    })
}
