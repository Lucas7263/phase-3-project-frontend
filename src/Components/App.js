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
     console.log(spa)
       if(spa.id === newDog.spa_id) {
        // If spa.id is the same as the new dogs spa_id add it to it's dog array
        // console.log(spa.dogs)
        
      
      //  const addedDog =  spa.dogs.map(dogs => {
      //        return [...spa.dogs, newDog]
      //  })
        console.log(spa)
       const addedDog = [...spa.dogs, newDog]
        console.log(...spa.dogs, newDog)
        console.log(addedDog)
        // console.log(spa.dogs)
        spa.dogs = addedDog
          return spa
       } else {
        return spa
       }
       
    })

    const newDogsArr = spaData.map(spa => { //
      spa.dogs
    })
    console.log(newGuest)
    setSpaData(newGuest)
    // setSpaData([...spaData, newDog])
    // setSpaData(newGuest)
    // setDogState([...dogState, newDog])
    // [...spaData, newDog]
  }; 
  



  function handleDeleteDog(id) {

    const deleteDog = spaData.map(dog => {
        
    })
    // const deleteDog = spaData.filter((dog) => dog.id !== id)
    
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
    
    console.log(updatedDog)
    const updatedDogsArr = dogState.map(dog => dog.id === updatedDog.id ? updatedDog : dog) // if dog.id matches updatedDog.id then updatedDog is returned if not then dog is returned
       
        const updatedSpadata = spaData.map(spa => {
          if (spa.id === updatedDog.spa_id) {
            // spa.dogs ? updatedDog.spa_id :   
            // Go to the dogs array from this spa
            // find the dog that I want to change 
            const updatedInfo = spa.dogs.map((dog) => dog.id === updatedDog.id ? updatedDog : dog) 

            spa.dogs = updatedInfo
            return spa
            // set dogs key of spa to be updated info
            
          } else {
            return spa
          }

          
              
        }) 
        setSpaData(updatedSpadata) 
        
        setDogState(updatedDogsArr) //two state updates
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
