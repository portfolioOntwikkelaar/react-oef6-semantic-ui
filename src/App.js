import React from 'react'
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (

    <div className="App">
    <div className='ui raised very padded text container segment'>
    <AuthContextProvider>
    <ThemeContextProvider>

    <Navbar />  
    <TodoList />
    </ThemeContextProvider>
    </AuthContextProvider>
    </div>
    </div>
  );
}

export default App;
