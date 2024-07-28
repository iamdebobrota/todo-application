import axios from "axios";
import { AppDispatch } from "../store";
import { TodoAction, TodoActionType, TodoType } from "./actionType";

export const getTodoAction = (payload: TodoType[]): TodoAction => ({
  type: TodoActionType.GET_TODO,
  payload,
});

export const postTodoAction = (payload: TodoType): TodoAction => ({
  type: TodoActionType.POST_TODO,
  payload: payload
});

export const loadingTodoAction = (): TodoAction => ({
  type: TodoActionType.LOADING,
});

export const errorTodoAction = (): TodoAction => ({
  type: TodoActionType.ERROR,
});

export const toggleTodoAction = (): TodoAction => ({
  type: TodoActionType.TOGGLE_TODO,
});
export const deleteTodoAction = (id: string | number | undefined): TodoAction => ({
  type: TodoActionType.DELETE_TODO,
  payload: id
});

const URL = "https://jsonplaceholder.typicode.com/todos";

export const getData = (page: number) => (dispatch: AppDispatch) => {
  dispatch(loadingTodoAction());
  axios
    .get(URL, {
      params: {
        _page: page,
        _limit: 10
      }
    })
    .then((res) => {
      console.log(res.data);
      dispatch(getTodoAction(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(errorTodoAction());
    });
};

export const postData =
  ({ payload }: { payload: TodoType }) =>
  (dispatch: AppDispatch) => {
    console.log(payload);
    dispatch(loadingTodoAction());

    axios
      .post(URL, payload)
      .then((res) => {
        console.log(res.data);
        dispatch(postTodoAction(payload))
        // dispatch(getData(1));
      })
      .catch((err) => {
        console.log(err);
        dispatch(errorTodoAction());
      });
  };



  // export const toggleTodo =({payload} : {payload: TodoType})=>(dispatch: AppDispatch)=>{
  //   axios.patch(`${URL}/${payload.id}`, {status: !payload.status});
  // } 

  export const deleteTodo =(id : string | number | undefined)=>(dispatch: AppDispatch)=>{
    axios.delete(`${URL}/${id}`).then((res)=>{
      console.log(res);
      dispatch(deleteTodoAction(id));
    }).catch((err)=>{
      console.log(err);
      dispatch(errorTodoAction());
    });
  } 