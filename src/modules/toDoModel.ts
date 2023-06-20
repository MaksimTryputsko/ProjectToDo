export type TodoModel = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export interface Body {
  userId?: number;
  completed: boolean;
  title?: string;
}

export type DeleteBoolean = {
  completed: boolean;
};
