import React from 'react';



const ChildComponent = (props) => {
    return(
    <div>
        <p>Hii This is From the Child Component We are sending the data to the Parent component :{props.name}</p>
        <p>Your age is : {props.age}</p>
        <p>Your Contact No  is : {props.Pno}</p>
        <p>Your State  is : {props.state}</p>
        <p>Your Country is : {props.Country}</p>
        
    </div>
    );

};


export default ChildComponent