import React from 'react';

function Spas({spa}) {
    const {name, location, employees, description, price, image, dogs} = spa
        console.log(dogs)
    return (
        <div className='spa'>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h4>Number of Employees: {employees}</h4>
            <p>{description}</p>
            <h4>Price: ${price}/day</h4>
            <img style={{  width: 300, height: 300 }} src={image} alt={name}></img>
            <button>View current residents</button>
        
        </div>
    )
}

export default Spas