import React from 'react';
import Spas from './Spas';



// , {useState, useEffect}
// spaData,
function SpaList({  spaData, viewGuests  }) {
    // const [spaData, setSpaData] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:9292/spas`)
    //     .then(res => res.json())
    //     .then(data => setSpaData(data))
    //   }, [setSpaData]);
       
    const spas = spaData.map(spa => {
       
        return (<Spas key={spa.id} spa={spa} viewGuests={viewGuests}/> ) //Error for POST occurs here
    })

  
  console.log(spaData)
   
    return(
        <div>
          {spas}
          
        </div>
    )
}

export default SpaList;