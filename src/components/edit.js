import React from "react";

export default function edit(props) {
  const { task, closeEdit, handleEditOnChange, saveEdit } = props;

  return (
    <div>
      <input value={task} onChange={(e) => handleEditOnChange(e)} />
      <div>
        <button onClick={closeEdit}>X</button>
        <button onClick={saveEdit}>save</button>
      </div>
    </div>
  );
}
