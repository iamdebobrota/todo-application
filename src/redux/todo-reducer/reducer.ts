import { TodoAction, TodoActionType, TodoState } from "./actionType";


const initState:TodoState  = {
    isLoading : false,
    isError: false,
    todos: []
}


export const reducer = (state: TodoState = initState, action: TodoAction): TodoState =>{ 

    switch(action.type){
        case TodoActionType.GET_TODO : return {
            ...state,
            isLoading: false,
            isError: false,
            todos: action.payload
        }
        case TodoActionType.LOADING: return {
            ...state,
            isLoading: true,
        }
        case TodoActionType.ERROR: return {
            ...state,
            isError: true,
        }
        case TodoActionType.POST_TODO: return {
            ...state,
            isLoading: false,
            isError: false,
            todos: [action.payload, ...state.todos]
        }
        case TodoActionType.TOGGLE_TODO: return {
            ...state,
            isLoading: false,
            isError: false,
        }
        case TodoActionType.DELETE_TODO: return {
            ...state,
            isLoading: false,
            isError: false,
            todos: state.todos.filter((el)=> el.id != action.payload)

        }
        default: return state;
    }
}





