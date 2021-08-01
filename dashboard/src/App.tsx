import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Topics</h2>
        <form>
          <input type="checkbox"/> Set up
          <input type="checkbox"/> JavaScript XML (JSX)
          <input type="checkbox"/> Rendering Elements
          <input type="checkbox"/> Components & Props
          <input type="checkbox"/> State & Lifecycle
          <input type="checkbox"/> Handling Events
          <input type="checkbox"/> Conditional Rendering
          <input type="checkbox"/> Lists & keys
          <input type="checkbox"/> Forms
          <input type="checkbox"/> Lifting State up
          <input type="checkbox"/> Composition vs Inheritance
          <input type="checkbox"/> Thinking in React
        </form>
      </header>
    </div>
  );
}

export default App;
