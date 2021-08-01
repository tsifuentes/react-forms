import logo from './logo.svg';
import './App.css';
import ControlledForm from './ControlledForm';
import UncontrolledForm from './UncontrolledForm.js';
import Patient from './Patient';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Patient></Patient>
        <ControlledForm></ControlledForm><br></br>
        <UncontrolledForm></UncontrolledForm>
      </header>
    </div>
  );
}

export default App;
