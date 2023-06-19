import { sendRequest } from "./postToDo";
import { Item } from '../index';

export function controlCheckBox (): void {
    const label : HTMLLabelElement | null = document.querySelector('.firstStyle');
    const testCheckBox : HTMLInputElement | null = document.querySelector('.checkBoxToDo');
    testCheckBox?.addEventListener('click', () => label?.classList.toggle('checked'))
    testCheckBox?.addEventListener('change', () => patch(label!.className.includes('checked'), Number(testCheckBox.id)))
}

function patch (value: boolean, id: number) {
    sendRequest<Item, DeleteBoolen>('PATCH', `todos/${id}`, { completed: value })
}

type DeleteBoolen = {
    completed: boolean
}