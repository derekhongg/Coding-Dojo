import React from "react";

const Groceries = (props) => {
    const groceryList = ['pearl onions', 'thyme', 'cremini mushrooms', 'milk', 'butter', 'potatoes'];
    return (
        <ul>
            {
                groceryList.map( (item, index) =>
                    <li key={ index }> { item } </li>
                )
            }
        </ul>
    );
}

export default Groceries;