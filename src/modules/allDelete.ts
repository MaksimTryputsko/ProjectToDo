import { sendRequest } from './sendRequest';
import { TodoModel } from './toDoModel';

export function allDelete(): void {
  const liItems: NodeListOf<HTMLInputElement> =
    document.querySelectorAll('.checkBoxToDo');
  liItems.forEach((item): void => {
    if (item.checked) {
      sendRequest<TodoModel, void>('DELETE', `todos/${item.id}`).then(() => {
        item?.parentElement?.remove();
      });
    }
  });
}
