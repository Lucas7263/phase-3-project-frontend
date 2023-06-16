import React from 'react';
import Spas from './Spas';

// , {useState, useEffect} 



function SpaList({  spaData, viewGuests  }) {
  // const [spaData, setSpaData] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:9292/spas`)
  //   .then(res => res.json())
  //   .then(data => setSpaData(data))
  // }, []);
       
    const spas = spaData.map(spa => {
       
        return (
        <Spas key={spa.id} spa={spa} viewGuests={viewGuests}/>
        
        ) 
    })

  
    return(
        <div class="flexbox-container-spas">
           {spas}
        </div>
    )
}

export default SpaList;