"use client";
import { useEffect, useState } from "react";
import { Form } from "./FormParts/Form";
import { List } from "./FormParts/List";

export default function Home() {
  const [todos, setTodos] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      const localValue = localStorage.getItem("ITEMS");
      if (localValue == null) return [];

      return JSON.parse(localValue);
    } else {
      return [];
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("ITEMS", JSON.stringify(todos));
    }
  }, [todos]);

  function addTodo(title: any) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }

  function toggleTodo(id: any, completed: any) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id: any) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <main>
      <div className="form-holder">
        <Form onSubmit={addTodo} />
      </div>
      <div>
        <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </main>
  );
}
