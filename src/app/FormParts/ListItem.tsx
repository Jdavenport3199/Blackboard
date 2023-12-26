export function ListItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
}: any) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />

        <label>{title}</label>
      </li>
      <button className="btn-delete" onClick={() => deleteTodo(id)}>
        X
      </button>
    </>
  );
}
