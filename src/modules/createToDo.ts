import { controlCheckBox } from "./controlCheckBox";
import { controlImgDelete } from "./deleteOneToDo";

function controlChecked (completed: boolean): string | undefined { 
     if (completed) {
         return "checked"
     }
}

export function createLi (title: string, id: number, completed: boolean, userId?: number): void {
    const li: HTMLLIElement = document.createElement('li');
    const ul: HTMLUListElement | null = document.querySelector('.toDos');
    li.innerHTML = `<input id="${id}" class="checkBoxToDo" type="checkbox" ${controlChecked(completed)}><label class="firstStyle ${controlChecked(completed)}" for="${id}">${title}</label><div id=${id} class="deleteImg"></div>`
    ul?.prepend(li)  
    controlCheckBox()
    controlImgDelete()
}
