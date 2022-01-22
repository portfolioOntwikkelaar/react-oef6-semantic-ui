import React, {createContext, useState} from 'react'

export const TodoListContext = createContext()

const TodoListContextProvider = ({children}) => {
  const [todos, setTodos] = useState([
    {text: 'Ethan Summers', id: 1},
    {text: 'Oliver Timmerman', id: 2},
    {text: 'Mateo Dikkens', id: 3}
  ]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { text: todo, id: Math.random() }
    ])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => {
      return todo.id !== Number(id);
    }));
  }

  return (
    <TodoListContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider
