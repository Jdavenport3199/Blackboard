import { ListItem } from "./ListItem";

export function List({ todos, toggleTodo, deleteTodo }: any) {
  return (
    <ul>
      {todos.length === 0 && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>Blackboard.</h1>
          <p>Add your first item. Hover and click items to mark as complete.</p>
        </div>
      )}
      {todos.map((todo: { id: any }) => {
        return (
          <ListItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
