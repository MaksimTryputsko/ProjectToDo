import { createLi } from './createToDo';
import { TodoModel, Body } from './toDoModel';
import { sendRequest } from './sendRequest';

let id = 11;

export function sendToDo(): number {
  const valuePostElement: HTMLInputElement | null =
    document.querySelector('#postInput');
  const valuePost: string = valuePostElement!.value;
  sendToServer(valuePost, id);
  id++;
  return id;
}

const sendToServer = (valuePost: string, id: number): void => {
  const body = {
    userId: 1,
    completed: false,
    title: valuePost,
  };
  sendRequest<TodoModel, Body>('POST', 'todos', body).then(() => {
    createLi(valuePost, id, false);
  });
};
