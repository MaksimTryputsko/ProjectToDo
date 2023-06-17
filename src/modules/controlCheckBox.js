import { sendRequest } from "./postToDo";

export function controlCheckBox () {
    const label = document.querySelector('.firstStyle');
    const testCheckBox = document.querySelector('.checkBoxToDo')
    testCheckBox.addEventListener('click', () => label.classList.toggle('checked'))
    testCheckBox.addEventListener('change', () => patch(label.className.includes('checked'), testCheckBox.id))
}

function patch (value, id) {
    sendRequest('PATCH', `todos/${id}`, { completed: value })
}