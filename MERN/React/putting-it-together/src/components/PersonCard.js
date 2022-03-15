import React, { useState } from "react";

const PersonCard = (props) => {
    const [ currentAge, ageAddOne ] = useState(props.age);
    const {firstName, lastName, age, hairColor} = props; // This can save some lines of code
    return (
        <div>
            <h2> { lastName }, { firstName } </h2>
            <p> Age: { currentAge } </p>
            <p> Hair Color: { hairColor } </p>
            <button onClick = { (event) => ageAddOne(currentAge + 1) }> Birthday Button for {firstName}! </button>
        </div>
    )
}

export default PersonCard