import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";


const LocalNav = (props) => {
    const { listPageIsActive, setListPageIsActive } = props;
    const [listTabStyle, setListTabStyle] = useState({});
    const [addPlayerStyle, setAddPlayerStyle] = useState({});
    // const styleObjBold = {
    //     fontWeight: "800"
    // };

    // useEffect(() => {
    //     if(listPageIsActive){
    //         setListTabStyle(styleObjBold);
    //         setAddPlayerStyle({});
    //     } else{
    //         setListTabStyle({});
    //         setAddPlayerStyle(styleObjBold);
    //     }
    // }, [listPageIsActive]);

    return(
        <div>
            <span style={{...listTabStyle}} className="local-nav" >
                <NavLink to="/players/list">Player List | </NavLink>
            </span>
            <span style={{...addPlayerStyle}} className="local-nav" >
                <NavLink to="/players/add">Add Player</NavLink>
            </span>
        </div>
    )
}

export default LocalNav;