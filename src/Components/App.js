import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import SpaList from './SpaList';
import DogList from './DogList';
import Home from './Home';
import NavBar from './NavBar';
import AddDog from './AddDog';
import AllDogs from './AllDogs';

function App() {
  const [spaData, setSpaData] = useState([]);
  const [guestList, setGuestList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/spas`)
    .then(res => res.json())
    .then(data => setSpaData(data))
  }, []);


  



  function viewGuests(guests) {
    console.log(guests)
    setGuestList(guests)
  };



  return (
    <div>
      <NavBar />
      <Switch>
       
        <Route path="/spas">
             <SpaList spaData={spaData} viewGuests={viewGuests}/>  
        </Route>

        <Route path="/guests"> 
             <DogList dogGuests={guestList}/> 
        </Route>  
      {/* change to guests path */}

        <Route path="/all-dogs">
              <AllDogs />
        </Route>

        <Route path="/check-in">
              <AddDog />
        </Route>

        <Route path="/">
             <Home />
             
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
