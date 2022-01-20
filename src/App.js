import React from 'react'
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (

    <div className="App">
    <div className='ui raised very padded text container segment'>

    <Navbar />  
    <TodoList />
    </div>
    </div>
  );
}

export default App;
