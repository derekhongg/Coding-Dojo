import React, { useState } from 'react';

const Form = (props) => {
  // using the getter and setter that were passed from my parent (App.js) component
    const { boxColorArray, setBoxColorArray } = props;

  // create state that can only be seen by this component
  //    this is the state to keep track of the text box input value
    const [ color, setColor] = useState("");
  //create setter and getter for size of the box
    const [ height, setHeight] = useState(50) //50 is the default size
    const [ width, setWidth] = useState(50)
    const submitHandler = (e) => {
    // we must prevent the browser from refreshing the page when a form is submitted
    //    if we do not prevent the default behavior we will lose all values in state
    e.preventDefault();

    // add our new color to the boxArray WITHOUT losing what is already in there
    //    we need to create a new array and spread out the current values first
    //    then we add the new color as the last element in the array
    setBoxColorArray( [ ...boxColorArray, {color: color, height: height + "px", width: width + "px",} ] ); // Add options for adding height and width
    setColor("Pick a Color!");
    setHeight(50);
    setWidth(50); // This will set height and width to default amounts
}

return (
    <div>
        <form onSubmit={ submitHandler } style={{ margin: "20px" }}>
            <div>
            <label htmlFor="color">Color: </label>
            <input 
                type="text" 
                name="color"
                onChange={ (e) => setColor(e.target.value) }
            />
            </div>
            <div>
            <label htmlFor="height">Height: </label>
            <input
                type = "text"
                name = "height"
                value = {height}
                onChange = { (e) => setHeight(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="width">Width: </label>
            <input
                type = "text"
                name = "width"
                value = {width}
                onChange = { (e) => setWidth(e.target.value)}
            />
            </div>
            <button>Add</button>
        </form>
    </div>
    )
}

export default Form;