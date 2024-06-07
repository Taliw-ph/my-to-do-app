import { useState } from "react";
import AddTodo from "./AddTodo";
import { Task } from "./TodoItem";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const onAddTask = (text: string) => {
    const newTask: Task = {
      id:
        new Date().getTime().toString(36) + Math.random().toString(36).slice(2),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const onTaskToggle = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <section className="app">
      <h1
        id="title"
        onClick={() => {
          console.log("tasks", tasks);
        }}
      >
        Todo app
      </h1>
      <div id="content">
        <AddTodo onAddTask={onAddTask} />
        <TodoList items={tasks} onTaskToggle={onTaskToggle} />
      </div>
    </section>
  );
};

export default TodoApp;
