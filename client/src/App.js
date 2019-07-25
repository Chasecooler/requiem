import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Students from './students/students.jsx';
import Employees from './employee/employee.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Employees/>
        {/* <Students /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reac
        </a>
      </header>
    </div>
  );
}

export default App;
