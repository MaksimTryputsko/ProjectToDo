import { sendRequest } from './sendRequest';
import { TodoModel, DeleteBoolean } from './toDoModel';

export function controlCheckBox(): void {
  const label: HTMLLabelElement | null = document.querySelector('.firstStyle');
  const testCheckBox: HTMLInputElement | null =
    document.querySelector('.checkBoxToDo');
  testCheckBox?.addEventListener('click', () =>
    label?.classList.toggle('checked')
  );
  testCheckBox?.addEventListener('change', () =>
    patch(label!.className.includes('checked'), Number(testCheckBox.id))
  );
}

function patch(value: boolean, id: number) {
  sendRequest<TodoModel, DeleteBoolean>('PATCH', `todos/${id}`, {
    completed: value,
  });
}
