import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const GlobalNav = (props) => {
    // const {managePlayerStatusTabIsActive, setManagePlayerStatusTabisActive} = props;
    const [managePlayerTabStyle, setManagePlayerTabStyle] = useState({});
    const [managePlayerStatusTabStyle, setManagePlayerStatusTabStyle] = useState({});

    // const styleObjBold = {
    //     fontWeight:"800"
    // }

    // useEffect(() => {
    //     if(managePlayerStatusTabIsActive) {
    //         setManagePlayerStatusTabStyle(styleObjBold);
    //         setManagePlayerTabStyle();
    //     } else{
    //         setManagePlayerStatusTabStyle({});
    //         setManagePlayerTabStyle(styleObjBold);
    //     }
    // }, [managePlayerStatusTabIsActive]);

    return (
        <div class="global-nav-text">
            <span>
                <NavLink to="/players/list">Manage Players|</NavLink>
            </span>
            <span>
                <NavLink to="/status/game/1">Manage Player Status</NavLink>
            </span>
        </div>
    )
}

export default GlobalNav;