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
        
    //Look up Flexbox video for CSS!
   
    // class="flexbox-item flexbox-item-2"
   

    return (
        <div  class="flexbox-container">
            <div  class="flexbox-item flexbox-item">
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h4>Number of Employees: {employees}</h4>
            <p>{description}</p>
            <h4>Price: ${price}/day</h4>
            <img style={{  width: 100, height: 100 }} src={image} alt={name}></img>
            <button onClick={thisDogsSpa}>View current residents</button>
            </div>
      
           
        
        </div>
    )
}

export default Spas

