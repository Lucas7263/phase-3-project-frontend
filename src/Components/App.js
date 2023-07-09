import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import SpaList from './SpaList';
import Home from './Home';
import NavBar from './NavBar';
import AddDog from './AddDog';
import AddSpa from './AddSpa';
import AllDogs from './AllDogs';
import UpdateDog from './UpdateDog';

function App() {
  const [spaData, setSpaData] = useState([]);
  const [dogInfo, setDogInfo] = useState([]);

  
  

   useEffect(() => {
     fetch(`http://localhost:9292/spas`)
    .then(res => res.json())
    .then(data => setSpaData(data))
  }, []);




  function addDog(newDog) {
  
    const newGuest = spaData.map(spa => { 
       if(spa.id === newDog.spa_id) {
   
       const addedDog = [...spa.dogs, newDog]
    
        spa.dogs = addedDog
          return spa
       } else {
        return spa
       }
       
    })
    
    setSpaData(newGuest)
  }; 
  
  function addSpa(newSpa) {
    setSpaData([...spaData, newSpa])
  }

  
  function amendDog(dog) {
    setDogInfo(dog)
  }



  function handleChange(name, value) {
    setDogInfo({
      ...dogInfo,  [name]: value 
    
    })
  }

  function editDog(updatedDog) {
    
        const updatedSpadata = spaData.map(spa => {
          if (spa.id === updatedDog.spa_id) {
       
            const updatedInfo = spa.dogs.map((dog) => dog.id === updatedDog.id ? updatedDog : dog) 

            spa.dogs = updatedInfo
            return spa
          
            
          } else {
            return spa
          }

        }) 
        setSpaData(updatedSpadata) 
        
       
}
  
  
  
  function handleDeleteDog(deletedDog) {
   
    const deleteDog = spaData.map(spa => {
      
        if(spa.id === deletedDog.spa_id) {
          
         const checkOut = spa.dogs.filter((dog) => dog.id !== deletedDog.id)
        
          
          spa.dogs = checkOut
          return spa
    }
    else {
      return spa
    }
    })
  
    setSpaData(deleteDog)
}



  return (
    <div>
      <NavBar />
      <Switch>
    
        <Route path="/spas">
             <SpaList    spaData={spaData} />  
        </Route>

       
      

        <Route path="/all-dogs">
              <AllDogs checkOut={handleDeleteDog} amendDog={amendDog}/>
        </Route>

        <Route path="/check-in">
              <AddDog spaData={spaData} addDog={addDog}/>
        </Route>

        <Route path='/add-spa'>
            <AddSpa  addSpa={addSpa}/>
        </Route>

        <Route path="/update">
              <UpdateDog   dogInfo={dogInfo}  handleChange={handleChange} editDog={editDog}/>
        </Route>

        <Route path="/">
             <Home />   
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;


// https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*