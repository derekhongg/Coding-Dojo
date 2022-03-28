import logo from './logo.svg';
import './App.css';
import OneProduct from "./components/OneProduct";
import Main from "./view/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/product/:_id" element={<OneProduct/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
