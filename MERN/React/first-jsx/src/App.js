import './App.css';
import React from 'react';
import Person from './components/Person';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h3>Things I need to do:</h3>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dog</li>
        <li><Person /></li>
      </ul>
      <Product 
      title={"Dehydrated Water"} 
      desc={"Just add 2 cups of water for a refreshing drink"} 
      cost = {49.99} />
      <Product 
      title={"Toy Car"} 
      desc={"Plastic Car"} 
      cost = {19.99} />
      <Product 
      title={"NFT"} 
      desc={"Picture"} 
      cost = {249.99} />
    </div>
  );
}

export default App;
