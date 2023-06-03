import React from 'react';
import Spas from './Spas';


function SpaList({ spaData, viewGuests  }) {

    const spas = spaData.map(spa => {
        
        return (<Spas key={spa.id} spa={spa} viewGuests={viewGuests}/> )
        
    })

  
   
    return(
        <div>
          {spas}
          
        </div>
    )
}

export default SpaList;