import React from "react";

const Product = (props) => {
    return (
        <div>
            <h2>{ props.title }</h2>
            <p>Description: { props.desc }</p>
            <p>Cost: ${ props.cost }</p>
        </div>
    )
}

export default Product;