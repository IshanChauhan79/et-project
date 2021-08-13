import React, { useState } from "react";
import classes from "./Form.module.css";

function Form(props) {
  const [newData, setNewData] = useState("");
  const todoInputChange = (e) => {
    e.preventDefault();
    setNewData(e.target.value);
  };

  const addTodoElement = (e) => {
    e.preventDefault();
    props.add(newData);
    setNewData("");
  };
  return (
    <div className={classes.Form}>
      <form onSubmit={addTodoElement}>
        <input
          type="text"
          onChange={todoInputChange}
          value={newData}
          placeholder="Task"
          required
        />
        <button type="submit">
          <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
}

export default Form;
