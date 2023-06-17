import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import SpaList from './SpaList';
import DogList from './DogList';
import Home from './Home';
import NavBar from './NavBar';
import AddDog from './AddDog';
import AllDogs from './AllDogs';
import UpdateDog from './UpdateDog';

function App() {
  const [spaData, setSpaData] = useState([]);
  const [guestList, setGuestList] = useState([]);
  const [dogState, setDogState] = useState([]);
  const [dogInfo, setDogInfo] = useState([]);

  
  

   useEffect(() => {
     fetch(`http://localhost:9292/spas`)
    .then(res => res.json())
    .then(data => setSpaData(data))
  }, []);



  

  function addDog(newDog) {
  
    const newGuest = spaData.map(spa => { //Drill down into the assocatied dogs array. Then make copy of array then add the newDog to that copy

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



  function viewGuests(guests) {
   
    setGuestList(guests)
   
  };


  function amendDog(dog) {
    setDogInfo(dog)
  }



  function handleChange(name, value) {
    setDogInfo({
      ...dogInfo,  [name]: value //Shallow copy
    
    })
  }

  function editDog(updatedDog) {
    
  
    const updatedDogsArr = dogState.map(dog => dog.id === updatedDog.id ? updatedDog : dog) 
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
        
        setDogState(updatedDogsArr) 
}

  return (
    <div>
      <NavBar />
      <Switch>
    
        <Route path="/spas">
             <SpaList    spaData={spaData} viewGuests={viewGuests}/>  
        </Route>

        <Route path="/guests"> 
             <DogList dogGuests={guestList} checkOut={handleDeleteDog} amendDog={amendDog}  /> 
        </Route>  
      

        <Route path="/all-dogs">
              <AllDogs />
        </Route>

        <Route path="/check-in">
              <AddDog spaData={spaData} addDog={addDog}/>
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
