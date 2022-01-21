import React, {createContext} from 'react'

export const ThemeContext = createContext();


class ThemeContextProvider extends React.Component {
  state = {
    isDarkTheme: true,
    lightTheme: {
      text: '#222',
      background: 'linear-gradient(to right, #dae2f8, #d6a4a4)'
      // background: '#d8ddf1'
      
    },
    darkTheme: {
      text: '#fff',
      // background: '#5c5c5c'
      background: 'linear-gradient(to right, #000000, #434343)'
    }
  };

  changeTheme = () => {
    this.setState({ isDarkTheme: !this.state.isDarkTheme });
  }
  render() {
    return(
      <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
// function ThemeContext() {
//   return (
//     <div>
      
//     </div>
//   )
// }

export default ThemeContextProvider
