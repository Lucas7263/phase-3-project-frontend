import React, {useState, useEffect} from 'react';
import SpaList from './SpaList';


function App() {
  const [spaData, setSpaData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/spas`)
    .then(res => res.json())
    .then(data => setSpaData(data))
  }, []);

  const spas = spaData.map(spa => {
    
      return (
        <div>
           <h3 key={spa.id}>{spa.name}</h3>
           <h4 key={spa.id}>{spa.location}</h4>
           <h5 key={spa.id}>{spa.price}</h5>
           
        <img style={{  width: 300, height: 300 }} key={spa.id}  src={spa.image} alt={spa.name}></img>
          
            {spa.dogs.map(dog => (
             <div key={spa.id}>
              <ul>
                <li>
                {dog.dog_name}
                </li>
                <li> {dog.breed}</li>
                </ul>
              
           </div>  
          
  ))}
          
        </div>
       
      )
            
  })
   
 

  return (
    <div>
      <SpaList spaData={spaData}/>
      <h2>Phase-3 Project</h2>
      <p>{spas}</p>
    </div>
  );
}

export default App;
