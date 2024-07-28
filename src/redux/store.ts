import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer } from "./todo-reducer/reducer";
import { thunk, ThunkMiddleware, ThunkDispatch } from "redux-thunk";
import { TodoAction, TodoState } from "./todo-reducer/actionType";

export interface RootState {
  todo: TodoState;
}

const rootReducer = combineReducers<RootState>({
  todo: reducer as any,
});

export type AppState = ReturnType<typeof rootReducer>;

const middleware: ThunkMiddleware<AppState, TodoAction> = thunk;

export const store = legacy_createStore<AppState, TodoAction>(
  rootReducer,
  applyMiddleware(middleware)
);

export type AppDispatch = ThunkDispatch<RootState, void, TodoAction>;
