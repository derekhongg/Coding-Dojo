import React, { useState } from 'react';
import axios from 'axios';

const Product = (props) => {
    const [title, setTitle] = useState(""); //default value of the input
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const createProduct = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
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
        })
        .catch((err) => {
            console.log("Something went wrong",err);
        })
    };

    return(
        <form onSubmit = { createProduct } class="form">
            <h2 class="header">Product Manager</h2>
            <div class = "form-fields">
                <label>Title: </label>
                <input type="text" value={title} onChange={ (e) => setTitle(e.target.value)} />
            </div>
            <div class = "form-fields"> 
                <label>Price: </label>
                <input type="number" value={price} onChange={ (e) => setPrice(e.target.value) }/>
            </div>
            <div class = "form-fields">
                <label>Description: </label>
                <input type="text" value={description} onChange={ (e) => setDescription(e.target.value) } />
            </div>
            <input type = "submit" value="Create" class="submit-input"/>
        </form>
    );
};

export default Product;