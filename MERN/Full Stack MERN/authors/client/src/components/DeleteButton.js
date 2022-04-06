import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const DeleteButton = (props) => {
    const navigate = useNavigate();
    const { authorId, successfulCallback } = props;
    const deleteAuthor = e => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res => {
                successfulCallback();
                navigate('/');
            })
            .catch(err => console.log("Something went wrong", err))
    }
    return(
        <button onClick = {deleteAuthor}>
            Delete
        </button>
    )
}

export default DeleteButton;