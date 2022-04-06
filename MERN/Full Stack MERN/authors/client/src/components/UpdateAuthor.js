import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const UpdateAuthor = (props) => {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data);
                setName(res.data.name);
                setLoaded(true);
            })
            .catch((err) => console.log(err))
    }, [id]);

    const submitHandler = authorParam => {
        axios.put(`http://localhost:8000/api/authors/${id}`, authorParam, {
            name
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.res.data.errors);
            });
    };
    return(
        <div>
            <h1>Update {name}</h1>
            <Link to={'/'}>Home</Link>
            {
                loaded && <Form onSubmitProp={submitHandler} initialName = {name} />
            }
            {errors.name ? <span>{errors.name.message}</span> : null}
        </div>
    )
}

export default UpdateAuthor;