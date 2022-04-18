import { useEffect, useState } from "react";
import axios from 'axios';

const PlayerStatus = (props) => {
    const [playerData, setPlayerData] = useState([]);

    return(
        <div>
            <h1>Player Status</h1>
            <p>gameId is {props.gameId}</p>
        </div>
    )
}

export default PlayerStatus;