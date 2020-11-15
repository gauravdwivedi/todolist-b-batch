// @flow
import * as React from "react";

export const Task = (props) => {
  const { task, handleDelete, handleEdit } = props;
  return (
    <div className="taskItem">
      <p>{task}</p>
      <div className="taskItem_btns">
        <button onClick={() => handleEdit(task)}>edit</button>
        <button onClick={() => handleDelete(task)}>Delete</button>
      </div>
    </div>
  );
};
