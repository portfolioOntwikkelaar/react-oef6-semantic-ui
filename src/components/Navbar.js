import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class Navbar extends React.Component {
  // static contextType = ThemeContext;
  render() {
    return (
      <ThemeContext.Consumer>{(context) => {
      const { isDarkTheme, darkTheme, lightTheme} = context;
      const theme = isDarkTheme ? darkTheme : lightTheme;
      return (


    <nav style={{ background: theme.background, color: theme.text, height: '120px'}}>
      <h2 style={{textAlign: 'center'}}>Lima Academy</h2>
      {/* <h2 className='ui centered header'>Lima Academy</h2> */}
      <div className='ui four buttons'>
        <button className='ui violet button'>Overview</button>
        <button className='ui inverted red button'>Contact</button>
        <button className='ui violet button'>Support</button>
        <button className='ui inverted red button'>Books</button>
      </div>
      
    </nav>
      )
    }}

    </ThemeContext.Consumer>
  )
}}

export default Navbar
