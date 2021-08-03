import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Topics</h2>
        <form className="topics">
          <a><input type="checkbox"/> Set up</a>
          <a><input type="checkbox"/> JavaScript XML (JSX)</a>
          <a><input type="checkbox"/> Rendering Elements</a>
          <a><input type="checkbox"/> Components & Props</a>
          <a><input type="checkbox"/> State & Lifecycle</a>
          <a><input type="checkbox"/> Handling Events</a>
          <a><input type="checkbox"/> Conditional Rendering</a>
          <a><input type="checkbox"/> Lists & keys</a>
          <a><input type="checkbox"/> Forms</a>
          <a><input type="checkbox"/> Lifting State up</a>
          <a><input type="checkbox"/> Composition vs Inheritance</a>
          <a><input type="checkbox"/> Thinking in React</a>
        </form>
      </header>
    </div>
  );
}

export default App;
