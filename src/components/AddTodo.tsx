import { useEffect, useRef, useState } from "react";

interface AddTodoProps {
  onAddTask: (text: string) => void;
}

const AddTodo = ({ onAddTask }: AddTodoProps) => {
  const [text, setText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);

  const handleOnAddTask = () => {
    const newTask = text.trim();
    if (newTask === "") return;
    onAddTask(text);
    setText("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="form">
      <input
        ref={inputRef}
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
