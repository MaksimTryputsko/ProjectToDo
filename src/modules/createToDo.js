import { controlCheckBox } from "./controlCheckBox";
import { controlImgDelete } from "./deleteOneToDo";

function controlChecked (completed) {
     if (completed) {
         return "checked"
     } 
}

export function createLi (title,id,completed,userId) {
        const li = document.createElement('li')
        const ul = document.querySelector('.toDos');
         li.innerHTML = `<input id="${id}" class="checkBoxToDo" type="checkbox" ${controlChecked(completed)}><label class="firstStyle ${controlChecked(completed)}" for="${id}">${title}</label><div id=${id} class="deleteImg"></div>`
         ul.prepend(li)
         controlCheckBox()
         controlImgDelete()
}


