import React from 'react';
import { useHistory } from 'react-router-dom';

function Spas({spa, viewGuests}) {
    

    const {name, location, employees, description, price, image, dogs} = spa
        
        const history = useHistory();
         
         
        function thisDogsSpa() {
   

            console.log(dogs) 
            let path = '/guests'
            history.push(path)


            viewGuests(dogs)

    }
        
    

    return (
        <div className='spa'>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h4>Number of Employees: {employees}</h4>
            <p>{description}</p>
            <h4>Price: ${price}/day</h4>
            <img style={{  width: 300, height: 300 }} src={image} alt={name}></img>
            <button onClick={thisDogsSpa}>View current residents</button>
            <button>Check-in</button>
        
        </div>
    )
}

export default Spas

