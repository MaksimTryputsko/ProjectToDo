import { TodoModel } from './toDoModel';
import { sendRequest } from './sendRequest';
import { createLi } from './createToDo';

export function getToDos(): void {
  sendRequest<TodoModel[], void>('GET', 'todos').then((data): void => {
    const elements = data.slice(0, 10);
    elements.forEach((item: TodoModel): void => {
      const { completed, id, title, userId } = item;
      createLi(title, id, completed, userId);
    });
  });
}
