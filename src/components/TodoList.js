import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoListContext } from '../contexts/TodoListContext'



const TodoList = () => {
  const [todo, setTodo ] = useState('')
  const {todos, addTodo, removeTodo } = useContext(TodoListContext);
  const { isDarkTheme, lightTheme, darkTheme, changeTheme }  = useContext(ThemeContext)
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    addTodo(todo);
  }
  const handleRemoveTodo = (e) => {
    const id = e.target.id;
    removeTodo(id);
  }
  return (
    <div style={{ background: theme.background, color: theme.text,  textAlign: 'center'}} >
        {
          todos.length ? (
            todos.map((todo) => {
              return <p  className='item'>{todo.text}<div class="ui small basic icon buttons"><button onClick={handleRemoveTodo} id={todo.id} key={todo.id}  class="ui button"><i class="close icon red"></i></button></div></p>
            })

          ) : (
            <div>You don't have liars</div>
          )
        }
        <form onSubmit={handleFormSubmit} className='forpdn'>
          <label className='formrgn' htmlFor="todo">Blacklist:</label>
          <input className='btn' onChange={handleChange} type="text" id='todo' />
          <input type="submit" value='Add liar to blacklist'  className='ui black button'  />
        </form>
        
        <button className='circular ui icon button' onClick={changeTheme}><i class="icon settings"></i></button>
        
      </div>
  )
}

export default TodoList
