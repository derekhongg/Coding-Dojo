import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OneAuthor = (props) => {
    const { id } = useParams();
    const [oneAuthor, setOneAuthor] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneAuthor(res.data);
            })
            .catch((err) => console.log(err))
    }, [id]);
    
    return(
        <div>
            <h2>{oneAuthor.name}</h2>
            <h4>Quotes by {oneAuthor.name}: </h4>
        </div>
    )
}

export default OneAuthor;