import { TodoType } from "../../redux/todo-reducer/actionType";
import { deleteTodo } from "../../redux/todo-reducer/action";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

const TodoItem = (el: TodoType) => {
  const dispatch: AppDispatch = useDispatch();
  const handleDelete = (id: string | number | undefined) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div style={{ border: "1px solid red", padding: "5px", margin: "5px" }}>
      <h3>
        {el.title} - {el.completed ? "Completed" : "Pending"}
      </h3>
      <button onClick={() => handleDelete(el.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
