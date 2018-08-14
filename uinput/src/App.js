import React, { Component } from 'react';
import logo from './logo.svg';
import Input from './components/input.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Input label="Введите текст" required />
      </div>
    );
  }
}

export default App;
