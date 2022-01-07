import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="inputTodo">
      <h1 className="title">Todo list</h1>
      <form onSubmit={onSubmitForm}>
        <div className="input">
          <input
            type="text"
            placeholder="Add Task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};

export default InputTodo;
