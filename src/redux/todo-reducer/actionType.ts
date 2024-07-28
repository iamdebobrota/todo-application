// constrains
export interface TodoType {
  id?: string | number;
  userId: string | number;
  title: string;
  completed: boolean;
}
export interface TodoState {
  isLoading: boolean;
  isError: boolean;
  todos: TodoType[];
}

// todo action type
export enum TodoActionType {
  GET_TODO = "GET_TODO",
  POST_TODO = "POST_TODO",
  LOADING = "LOADING",
  ERROR = "ERROR",
  TOGGLE_TODO = "TOGGLE_TODO",
  DELETE_TODO = "DELETE_TODO",
}

interface getTodoActionType {
  type: TodoActionType.GET_TODO;
  payload: TodoType[];
}
interface postTodoActionType {
  type: TodoActionType.POST_TODO;
  payload: TodoType
}
interface loadingTodoActionType {
  type: TodoActionType.LOADING;
}
interface errorTodoActionType {
  type: TodoActionType.ERROR;
}
interface toggleTodoActionType {
  type: TodoActionType.TOGGLE_TODO;
}
interface deleteTodoActionType {
  type: TodoActionType.DELETE_TODO;
  payload: string | number | undefined;
}

// difference between type and interface
export type TodoAction =
  | getTodoActionType
  | postTodoActionType
  | loadingTodoActionType
  | errorTodoActionType
  | toggleTodoActionType 
  | deleteTodoActionType;
