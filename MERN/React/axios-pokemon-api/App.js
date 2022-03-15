import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect((e) => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {setPokemon(response.data.results)
      })
      .catch(error => console.log(error))
  }, []);  

  return (
    <div className="App" style={{ width: "200px", margin: "auto" }}>
      <ul>
        {
          pokemon.map((pokemon, index) =>{
            return (<li key={index}>{pokemon.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;

