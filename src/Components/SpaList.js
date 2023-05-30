import React from 'react';
import Spas from './Spas';


function SpaList({ spaData }) {

    const spas = spaData.map(spa => {
       
        return (<Spas key={spa.id} spa={spa}/>)
    })

   
    return(
        <div>
          {spas}
          
        </div>
    )
}

export default SpaList;