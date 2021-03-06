import React from 'react';

const DeliveryForm = ({handleSubmit, saveInfo}) => {
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
            Address: <input 
                type="text" 
                id="address"
                placeholder="Enter address"
                minLength="3"
                onChange={saveInfo}
                required/> <br/>
            City: <input 
                type="text" 
                id="name"
                placeholder="Enter city"
                minLength="3"
                onChange={saveInfo}
                required/> <br/>
            Postal code: <input
                type="text"
                id="postalCode"
                pattern="\d*"
                placeholder="Enter postal code"
                minLength="3"
                title="Please enter only numbers"
                onChange={saveInfo}
                required/> <br/>
            Phone number: <input
                type="text"
                id="phoneNumber"
                pattern="\d*"
                placeholder="Enter phonenumber"
                minLength="7"
                title="Please enter only numbers"
                onChange={saveInfo}
                required/> <br/>
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default DeliveryForm;