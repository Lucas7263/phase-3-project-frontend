import React from 'react';
import { useHistory } from 'react-router-dom';

function Spas({spa, viewGuests}) {
    

    const {name, location, employees, description, price, image, dogs} = spa
        
        const history = useHistory();
         
         
        function thisDogsSpa() {
    
        
            
            let path = '/guests'
            history.push(path)


            viewGuests(dogs)

    }
        
   

    return (
        <div  >
            <div  class="flexbox-item flexbox-spa">
            <h2>{name}</h2>
            <img style={{  width: 200, height: 150 }} src={image} alt={name}></img>
            <h3>{location}</h3>
            <h4>Number of Employees: {employees}</h4>
            <p>{description}</p>
            <h4>Price: ${price}/day</h4>
            
            <button className="guest-btn" onClick={thisDogsSpa}>View guests</button>
            </div>
      
           
        
        </div>
    )
}

export default Spas

