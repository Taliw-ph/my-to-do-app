import TodoItem, { Task } from "./TodoItem";

interface TodoListProps {
  items: Task[];
  onTaskToggle: (id: string) => void;
}

const TodoList = ({ items, onTaskToggle }: TodoListProps) => {
  return (
    <ul
      style={{
        padding: 0,
      }}
    >
      {items.map((task) => (
        <TodoItem key={task.id} task={task} onTaskToggle={onTaskToggle} />
      ))}
    </ul>
  );
};

export default TodoList;
