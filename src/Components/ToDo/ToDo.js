import React, { useState, useEffect } from "react";
import Form from "./Form/Form";
import classes from "./ToDo.module.css";

function ToDo() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todoData"));
    if (data === null || data.length === 0) {
      setList([
        {
          text: "Demo Task- Only appear when no task- Remove this and Add new Task",
          id: "1",
        },
      ]);
    } else {
      setList(data);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(list));
  }, [list]);

  const addTodo = (data) => {
    setList((prev) => [...prev, { text: data, id: Math.random().toString() }]);
  };
  const deleteTask = (id) => {
    const newList = list.filter((data) => data.id !== id);
    setList(newList);
  };

  const todoList = list.map((data, i) => (
    <div key={i} className={classes.TodoList}>
      <div> {data.text}</div>
      <div className={classes.Delete} onClick={() => deleteTask(data.id)}>
        <i className="far fa-trash-alt"></i>
      </div>
    </div>
  ));
  return (
    <div className={classes.ToDo}>
      <div className={classes.Title}>ToDo</div>
      <Form add={addTodo} />

      {todoList}
    </div>
  );
}

export default ToDo;
