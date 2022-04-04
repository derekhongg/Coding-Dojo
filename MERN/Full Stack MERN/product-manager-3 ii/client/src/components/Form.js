import React, { useState } from 'react';

const Form = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ title, price, description });
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title:</label>
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price:</label>
                    <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description:</label>
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;