import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
      lastName = {"Doe"} firstName = {"Jane"}
      age = {45}
      hairColor = {"Black"}
      />
      <PersonCard 
      lastName = {"Smith"} firstName = {"John"}
      age = {88}
      hairColor = {"Brown"}
      />
      <PersonCard 
      lastName = {"Smith"} firstName = {"Maria"}
      age = {62}
      hairColor = {"Brown"}
      />
      <button onClick = { ()=> alert("This button has been clicked!") }> Click Me! </button>
    </div>
  );
}

export default App;
