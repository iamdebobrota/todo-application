import React from "react";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { postData } from "../../redux/todo-reducer/action";

const TodoInput = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formdata = new FormData(form);
    const data = {
      userId: 1,
      title: formdata.get("title") as string,
      completed: formdata.get("completed") === "true",
    };
    dispatch(postData({ payload: data }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Titles" name="title" style={{padding: "6px", margin: "5px"}}/>
      <select name="completed" style={{padding: "6px", margin: "5px"}}>
        <option value="">Select the status</option>
        <option value="false">Completed</option>
        <option value="true">Pending</option>
      </select>
      <button
        type="submit"
        style={{
          padding: "8px",
          border: "none",
          background: "red",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
          margin: "5px"
        }}>
        Add
      </button>
    </form>
  );
};

export default TodoInput;
