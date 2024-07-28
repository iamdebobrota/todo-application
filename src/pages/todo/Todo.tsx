import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { getData } from "../../redux/todo-reducer/action";
import TodoItem from "./TodoItem";
import LoadingIndicator from "../../components/LoadingIndicator";
import ErrorIndicator from "../../components/ErrorIndicator";
import Pagination from "../../components/Pagination";

const Todo = () => {
  const { isLoading, isError, todos } = useSelector(
    (state: RootState) => state.todo
  );
  const dispatch: AppDispatch = useDispatch();
  const [page, setPage] = useState(1);

  const totalPage = 200 / 10; 

  useEffect(() => {
    dispatch(getData(page));
  }, [page]);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (isError) {
    return <ErrorIndicator />;
  }

  return (
    <div style={{ padding: "20px", marginTop: "25px" }}>
      <h1>Todo application</h1>
      <TodoInput />
      <div style={{ margin: "10px" }}>
        {todos &&
          todos.map((el) => {
            return <TodoItem key={el.id} {...el} />;
          })}
      </div>
      <div>
        <Pagination page={page} totalPage={totalPage} setPage={setPage} />
      </div>
    </div>
  );
};

export default Todo;
