import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage";

class App extends React.Component {
  render() {
    return (
      <HomePage firstName = "Nicole"/>
    );
  }
}

export default App;
