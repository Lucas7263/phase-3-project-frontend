import React from 'react';
import Dogs from './Dogs'

function DogList({  dogGuests, checkOut, amendDog}) {
  
   
    const dogs = dogGuests.map(dog => { 
       
        return (<Dogs key={dog.id} dogs={dog} checkOut={checkOut} amendDog={amendDog}/>)
        
    })
  
 
   
    return(
        
        
        <div class="flexbox-container-dogs">
                {dogs} 
        </div>
        
    )
}

export default DogList;