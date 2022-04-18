import { useEffect, useState } from "react";
import LocalNav from "./LocalNav";
import axios from 'axios';

const ListPlayers = (props) => {
    const [playerData, setPlayerData]=useState([]);
    // const {
    //     listPageIsActive,
    //     setListPageIsActive,
    //     setManagePlayerStatusTabisActive,
    // } = props;

    // useEffect(() => {
    //     setListPageIsActive(true);
    //     setManagePlayerStatusTabisActive(false);
    // }, []);

    useEffect(() => {
        axios.get("http://localhost:8000/api/team")
            .then(res =>{
                console.log(res.data);
                setPlayerData(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    const handleDelete = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/team/${idFromBelow}`)
            .then((res) => {
                const newList = playerData.filter(
                    (player, index) => player._id !== idFromBelow
                );
                alert("Player has been deleted.")
                setPlayerData(newList)
            })
            .catch((err) => console.log(err.res));
    };

    return(
        <div>
            <LocalNav
                // listPageIsActive={listPageIsActive}
                // setListPageIsActive={setListPageIsActive}
            />
            <table>
                <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Preferred Position:</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {playerData.map((player, index) => {
                        return (
                            <tr key={player._id}>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                <td>
                                    <button onClick={() => handleDelete(player._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ListPlayers;