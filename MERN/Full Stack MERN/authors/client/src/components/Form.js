import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Form = (props) => {
    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const navigate = useNavigate();

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        onSubmitProp({name});
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name:</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </p>
                <button onClick={(e) => navigate("/")}>Cancel</button>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;