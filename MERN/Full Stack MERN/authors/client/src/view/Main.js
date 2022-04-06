import React, { useState } from "react";
import { Link } from "react-router-dom";
import DisplayAll from "../components/AllAuthors"
import Form from "../components/Form";

const Main = (props) => {
    const [authorList, setAuthorList] = useState([]);

    return(
        <div>
            <DisplayAll
                authorList={authorList}
                setAuthorList={setAuthorList}
            />
        </div>
    )
}

export default Main;