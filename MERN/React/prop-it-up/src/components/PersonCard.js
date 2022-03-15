import React, { useState } from "react";

const PersonCard = (props) => {
    const [ currentAge, ageAddOne ] = useState(props.age);
    return (
        <div>
            <h2> { props.lastName }, { props.firstName } </h2>
            <p> Age: { currentAge } </p>
            <p> Hair Color: { props.hairColor } </p>
            <button onClick = { (event) => ageAddOne(currentAge + 1) }> Birthday Button for {props.firstName}! </button>
        </div>
    )
}

export default PersonCard