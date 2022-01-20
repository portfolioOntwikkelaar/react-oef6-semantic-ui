import React from 'react'

class Navbar extends React.Component {
  render() {
  return (
    <nav>
      <h2 className='ui centered header'>Lima Academy</h2>
      <div className='ui four buttons'>
        <button className='ui violet button'>Overview</button>
        <button className='ui inverted red button'>Contact</button>
        <button className='ui violet button'>Support</button>
        <button className='ui inverted red button'>Books</button>
      </div>
      
    </nav>
  )
}}

export default Navbar
