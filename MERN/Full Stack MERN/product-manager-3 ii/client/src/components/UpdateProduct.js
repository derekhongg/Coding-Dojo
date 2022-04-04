import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import DeleteButton from './DeleteButton';


const UpdateProduct = (props) => {
    const { id } = props;

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [product, setProduct] = useState();
    const navigate = useNavigate();
    const [headerTitle, setHeaderTitle] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setHeaderTitle(res.data.title);
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, []);

    const submitHandler = productParam => {
        axios.put(`http://localhost:8000/api/products/${id}`, productParam, {
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                console.log(err)
            });
    };
    return(
        <div class="form-fields">
            <h1>Update {headerTitle}</h1>
                {
                loaded && <Form onSubmitProp={submitHandler} initialTitle = {title}
                initialPrice={price} initialDescription={description}/>
                }
        </div>
    )
}

export default UpdateProduct;