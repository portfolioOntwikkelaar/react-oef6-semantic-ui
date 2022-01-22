import React, {createContext, useReducer, useState} from 'react'
import { todosReducer } from '../reducers/todosReducer';

export const TodoListContext = createContext()



const TodoListContextProvider = ({children}) => {
  const [todos, dispatch] = useReducer(todosReducer, [
    {text: 'Ethan Summers', id: 1},
    {text: 'Oliver Timmerman', id: 2},
    {text: 'Mateo Dikkens', id: 3}
  ]);

  

  return (
    <TodoListContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider
