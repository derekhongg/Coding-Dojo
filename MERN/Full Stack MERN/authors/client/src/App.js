import './App.css';
import OneAuthor from './components/OneAuthor';
import Main from './view/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateAuthor from './components/UpdateAuthor';
import NewAuthor from './components/CreateAuthor';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/new" element={<NewAuthor/>} />
          <Route path="/author/:id" element={<OneAuthor/>} />
          <Route path="/author/edit/:id" element={<UpdateAuthor/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
