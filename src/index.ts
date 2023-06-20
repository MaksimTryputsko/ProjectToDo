import './main.scss';
import { allDelete } from './modules/allDelete';
import { sendToDo } from './modules/postToDo';
import { getToDos } from './modules/getToDos';

getToDos()

const deleteAllBtn: HTMLInputElement | null = document.querySelector('.deleteBtn')
deleteAllBtn?.addEventListener('click', allDelete)

const postBtn: HTMLInputElement | null = document.querySelector('#postBtn')
postBtn?.addEventListener('click', sendToDo) 