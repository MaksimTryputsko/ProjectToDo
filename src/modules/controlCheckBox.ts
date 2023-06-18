import { sendRequest } from "./postToDo";

export function controlCheckBox (): void {
    const label = document.querySelector('.firstStyle') as HTMLLabelElement;
    const testCheckBox = document.querySelector('.checkBoxToDo') as HTMLInputElement;
    testCheckBox.addEventListener('click', () => label.classList.toggle('checked'))
    testCheckBox.addEventListener('change', () => patch(label.className.includes('checked'), Number(testCheckBox.id)))
}

function patch (value: boolean, id: number) {
    sendRequest('PATCH', `todos/${id}`, { completed: value })
}