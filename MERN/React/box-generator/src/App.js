import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  // holding an array of strings for the colors input
  const [ boxColorArray, setBoxColorArray ] = useState([]);

  return (
    <div className="App">
      <h1>Add a Color!</h1>
      <Form boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray } />
      <Display boxColorArray={ boxColorArray } />
      <hr />
    </div>
  );
}

export default App;