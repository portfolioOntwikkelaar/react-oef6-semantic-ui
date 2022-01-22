import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext'

// class Navbar extends React.Component {
//   // static contextType = ThemeContext;
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => {
//           return (

//       <ThemeContext.Consumer>{(themeContext) => {
//       const { isDarkTheme, darkTheme, lightTheme} = themeContext;
//       const { isLoggedIn, changeAuthStatus } = authContext;
//       const theme = isDarkTheme ? darkTheme : lightTheme;
//       return (


//     <nav style={{ background: theme.background, color: theme.text, height: '120px'}}>
//       <h2 style={{textAlign: 'center'}}>Lima Academy</h2>
//       <p onClick={changeAuthStatus} style={{ textAlign: 'center',  }}>{ isLoggedIn ? 'logged in' : 'logged out'}</p>
//       {/* <h2 className='ui centered header'>Lima Academy</h2> */}
//       <div className='ui four buttons'>
        
//         <button className='ui violet button'>Overview</button>
//         <button className='ui inverted red button'>Contact</button>
//         <button className='ui violet button'>Support</button>
//         <button className='ui inverted red button'>Books</button>
//       </div>
      
//     </nav>
//       )
//     }}

//     </ThemeContext.Consumer>
//           )

//         }}
//       </AuthContext.Consumer>
//   )
// }}

const Navbar = () => {
  const { isDarkTheme, darkTheme, lightTheme} = useContext(ThemeContext)
  const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <nav style={{ background: theme.background, color: theme.text, height: '120px'}}>
      <h2 style={{textAlign: 'center'}}>Lima Academy</h2>
      <p onClick={changeAuthStatus} style={{ textAlign: 'center',  }}>{ isLoggedIn ? 'logged in' : 'logged out'}</p>
      
      <div className='ui four buttons'>
        
        <button className='ui violet button'>Overview</button>
        <button className='ui inverted red button'>Contact</button>
        <button className='ui violet button'>Support</button>
        <button className='ui inverted red button'>Books</button>
      </div>
      
    </nav>
  )
}

export default Navbar
