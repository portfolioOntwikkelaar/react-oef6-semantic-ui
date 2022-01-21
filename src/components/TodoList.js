import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export class TodoList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkTheme, lightTheme, darkTheme, changeTheme } = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
      <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}} >
        <p className='item'>Plan the travel</p>
        <p className='item'>Go for shopping</p>
        <p className='item'>Go for a walk</p>
        <button className='ui button primary' onClick={changeTheme}>change the theme</button>
        
      </div>
    )
  }
}

export default TodoList
