import { useState } from "react";

interface AddTodoProps {
  onAddTask: (text: string) => void;
}

const AddTodo = ({ onAddTask }: AddTodoProps) => {
  const [text, setText] = useState<string>("");

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);

  const handleOnAddTask = () => {
    const newTask = text.trim();
    if (newTask === "") return;
    onAddTask(text);
    setText("");
  };

  return (
    <div className="form">
      <input
        type="text"
        id="todo-input"
        placeholder="Enter your todo"
        value={text}
        onChange={onTextChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleOnAddTask();
          }
        }}
      />
      <button id="todo-add-button" onClick={handleOnAddTask}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
