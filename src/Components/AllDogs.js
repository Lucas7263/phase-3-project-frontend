import React, {useState, useEffect} from 'react';
import EveryDog from './EveryDog';

// , {useState, useEffect} 
function AllDogs() {
    
    // { allDogs }
const [dogData, setDogData] = useState([]);

// {dogData}
useEffect(() => {
    fetch(`http://localhost:9292/dogs`)
    .then (res => res.json())
    .then (dogs => setDogData(dogs))
}, [])
    
    
const dogs = dogData.map(dog => {
         console.log(dog)
         return (<EveryDog key={dog.id} dogs={dog}/>)
     })

   

     return(
         <div>
             {dogs}
          
         </div>
     )
 
 
};


export default AllDogs;