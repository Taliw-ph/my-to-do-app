export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  task: Task;
  onTaskToggle: (id: string) => void;
}

const TodoItem = ({ task, onTaskToggle }: TodoItemProps) => {
  return (
    <li
      style={{
        listStyleType: "none",
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onTaskToggle(task.id)}
      />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>
    </li>
  );
};

export default TodoItem;
