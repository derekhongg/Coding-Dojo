import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Display from './components/Display';
import Display2 from './components/Display2';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/:value" element={<Display/>}/>
          <Route path="/:value/:color1/:color2" element={<Display2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
