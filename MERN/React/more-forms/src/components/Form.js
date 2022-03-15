import React, { useState } from  'react';
    
    
const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object
        const newUser = { firstName, lastName, age, email, password, confirmPassword };
        console.log("Welcome", newUser);
            setFirstName("");
            setLastName("");
            setAge("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

        // updating state will change the message to be displayed in the form
        setHasBeenSubmitted( true );
    };
    const formMessage = () => {
        if( hasBeenSubmitted ) {
	return "Thank you for submitting the form!";
	} else {
	return "Welcome, please submit the form";
	}
    };
    
    return (
        <form onSubmit={ createUser }>
            <h3>{ formMessage() }</h3>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            {firstName.length < 2 && firstName.length > 0 ? (<p>First name must be at least 2 characters long.</p>) : null}
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            {lastName.length < 2 && lastName.length > 0 ? (<p>Last name must be at least 2 characters long.</p>) : null}
            <div>
                <label>Age: </label> 
                <input type="number"  value={age} onChange={ (e) => setAge(e.target.value) } />
            </div>
            {age < 13 && age.length > 0 ?  (<p>Must be at least 13 years old to submit.</p>): null}
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            {email.length < 5 && email.length> 0? (<p>Email must be at least 5 characters.</p>): null}
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            {password.length < 8 && password.length > 0 ? (<p>Password must be at least 8 characters</p>): null}
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            {confirmPassword !== password ? <p>Passwords must match</p> : null}
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default Form;
