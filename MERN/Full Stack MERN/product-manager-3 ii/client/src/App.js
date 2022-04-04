import logo from './logo.svg';
import './App.css';
import OneProduct from "./components/OneProduct";
import Main from "./view/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/product/:id" element={<OneProduct />}/>
          <Route path="/product/edit/:id" element={<UpdateProduct />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

