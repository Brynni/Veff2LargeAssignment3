import React from 'react';

const PickupForm = ({handleSubmit, saveInfo}) => {
    return (
        <form name="myForm" onSubmit={(e)=>handleSubmit(e)}>
            <p>Please fill out the form and continue</p> 
            Name: <input 
                type="text" 
                id="name"
                placeholder="Enter name"
                minLength="3"
                onChange={saveInfo}
                required/> <br/>
            Phone number: <input
                type="text"
                id="phoneNumber"
                pattern="\d*"
                onChange={saveInfo}
                placeholder="Enter phonenumber"
                minLength="7"
                title="Please enter only numbers"
                required/> <br/>
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default PickupForm;


