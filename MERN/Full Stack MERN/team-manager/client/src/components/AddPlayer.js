import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocalNav from './LocalNav';
import { useNavigate } from 'react-router-dom';


const AddPlayer = (props) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState([]);

    const {
        listPageIsActive,
        setListPageIsActive,
        setManagePlayerStatusTabisActive,
    } = props;
    const navigate = useNavigate();

    useEffect(() => {
        setListPageIsActive();
        setManagePlayerStatusTabisActive(false);
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/team", {name, position})
            .then((res) => {
                console.log(res.data);
                navigate("/players/list");
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
            })
    };

    return (
        <div>
            <LocalNav
                listPageIsActive={listPageIsActive}
                setListPageIsActive={setListPageIsActive}
            />
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name}/>
                    { errors.name ? 
                        <p class="error-message">{errors.name.message}</p>
                        : null
                    }
                </div>
                <div>
                    <label htmlFor="position">Position:</label>
                    <input type="text" id="position" onChange={(e) => setPosition(e.target.value)} value={position}/>
                    { errors.position ? 
                        <p class="error-message">{errors.position.message}</p>
                        : null
                    }
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddPlayer;