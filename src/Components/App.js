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
  
    setSpaData([...spaData, newDog])
      
  }; 
  



  function handleDeleteDog(id) {
 
    const deleteDog = spaData.filter((dog) => dog.id !== id)
    
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
      ...dogInfo,  
      [name]: value
    })
  }

  function editDog(updatedDog) {
    const updatedDogsArr = dogState.map(dog => dog.id === updatedDog.id ? updatedDog : dog)
        setDogInfo(updatedDogsArr) 
        setDogState(updatedDogsArr)
}

  return (
    <div>
      <NavBar />
      <Switch>
    
        <Route path="/spas">
             <SpaList viewGuests={viewGuests}/>  
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
