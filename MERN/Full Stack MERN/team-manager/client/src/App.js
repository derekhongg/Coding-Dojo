
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListPlayers from './components/ListPlayers';
import AddPlayer from './components/AddPlayer';
import PlayerStatus from './components/PlayerStatus';
import { useState } from 'react';
import GlobalNav from './components/GlobalNav';

function App() {
  const [listPageIsActive, setListPageIsActive] = useState(true);
  const [managePlayerStatusTabIsActive, setManagePlayerStatusTabisActive] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Team Manager</h1>
        <GlobalNav 
          managePlayerStatusTabIsActive={managePlayerStatusTabIsActive}
          setManagePlayerStatusTabisActive={setManagePlayerStatusTabisActive}
        />
        <Routes>
          <Route path="/" element={<ListPlayers/>}/>
          <Route path="/players/list" element={<ListPlayers
            default
            listPageIsActive={listPageIsActive}
            setListPageIsActive={setListPageIsActive}
            setManagePlayerStatusTabisActive={setManagePlayerStatusTabisActive}/>}
          />
          <Route path="/players/add" element={<AddPlayer
            listPageIsActive={listPageIsActive}
            setListPageIsActive={setListPageIsActive}
            setManagePlayerStatusTabisActive={setManagePlayerStatusTabisActive}/>}
          />
          <Route path="/status/game/:gameId" element={<PlayerStatus 
            setManagePlayerStatusTabisActive={setManagePlayerStatusTabisActive}/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
