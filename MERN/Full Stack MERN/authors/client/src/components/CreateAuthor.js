import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from "../components/Form"

const NewAuthor = (props) => {
    const [errors, setErrors] = useState({});
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const createAuthor = authorParam => {
        axios.post('http://localhost:8000/api/authors', authorParam,{
            name
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setName("");
            navigate('/');
        })
        .catch((err) => {
            console.log("Something went wrong", err);
            setErrors(err.response.data.errors);
        });
    };
    return(
        <div>
            <h2>Add an Author</h2>
            <Link to={'/'}>Home</Link>
            {
                <Form onSubmitProp={createAuthor}/>
            }
            {errors.authorName ? <span>{errors.authorName.message}</span> : null}
        </div>
    );
};

export default NewAuthor;