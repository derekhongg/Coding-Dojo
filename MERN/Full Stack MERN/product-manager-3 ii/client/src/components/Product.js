import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from "../components/Form"

const Product = (props) => {
    const [title, setTitle] = useState(""); //default value of the input
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const createProduct = productParam => {
        axios.post("http://localhost:8000/api/products", productParam ,{
            title, //ticket title
            price,
            description
        })
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            setTitle("");
            setPrice("");
            setDescription("");
            navigate('/');
        })
        .catch((err) => {
            console.log("Something went wrong",err);
        })
    };

    return(
        <div>
            <h2>Create Product</h2>
            {
                <Form onSubmitProp={createProduct}/>
            }
        </div>
    );
};

export default Product;