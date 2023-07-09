import React from 'react';
import Spas from './Spas';




function SpaList({  spaData, checkOut, amendDog, viewGuests  }) {
       
    const spas = spaData.map(spa => {
       
        return (
        <Spas key={spa.id} spa={spa} checkOut={checkOut} amendDog={amendDog} viewGuests={viewGuests}/>
        
        ) 
    })

  
    return(
        <div className="flexbox-container-spas">
           {spas}
        </div>
    )
}

export default SpaList;