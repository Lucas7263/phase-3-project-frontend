import React, {useState, useEffect} from 'react';
import Spas from './Spas';




// , {useState, useEffect}
// spaData,
function SpaList({   viewGuests  }) {
  const [spaData, setSpaData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/spas`)
    .then(res => res.json())
    .then(data => setSpaData(data))
  }, []);
       
    const spas = spaData.map(spa => {
       
        return (
        <Spas key={spa.id} spa={spa} viewGuests={viewGuests}/>
        
        ) 
    })

  
    return(
        <div class="flexbox-container">
           
           {spas}
        
        
        </div>
    )
}

export default SpaList;