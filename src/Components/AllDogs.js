import React, {useState, useEffect} from 'react';
import EveryDog from './EveryDog';

 
function AllDogs({checkOut, amendDog}) {
    
   
const [dogData, setDogData] = useState([]);


useEffect(() => {
    fetch(`http://localhost:9292/dogs`)
    .then (res => res.json())
    .then (dogs => setDogData(dogs))
}, [])
    
    
const dogs = dogData.map(dog => {
        
         return (<EveryDog key={dog.id} dogs={dog} checkOut={checkOut} amendDog={amendDog}/>)
     })

   

     return(
         <div className="flexbox-container-all-dogs">
             {dogs}
          
         </div>
     )
 
 
};


export default AllDogs;