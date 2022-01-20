import React, { Component } from 'react'

export class TodoList extends Component {
  render() {
    return (
      <div className='ui list'>
        <p className='item'>Plan the travel</p>
        <p className='item'>Go for shopping</p>
        <p className='item'>Go for a walk</p>
        
      </div>
    )
  }
}

export default TodoList
