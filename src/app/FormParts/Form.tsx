import { useState } from "react";

export function Form({ onSubmit }: any) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
      <button>+</button>
    </form>
  );
}
