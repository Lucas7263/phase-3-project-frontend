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
  const [clickedDog, setClickedDog] = useState("");
  

  useEffect(() => {
    fetch(`http://localhost:9292/spas`)
    .then(res => res.json())
    .then(data => setSpaData(data))
  }, []);

//   useEffect(() => {
//     fetch(`http://localhost:9292/dogs`)
//     .then (res => res.json())
//     .then (dogs => setDogData(dogs))
// }, [])

  // const history = useHistory();

  function addDog(newDog) {
    console.log(newDog)
    console.log(spaData)
    setSpaData([...spaData, newDog])
  
  }; 
  

  // function handleDelete(id) {
  //     const deleteDog = spaData.filter((dog) => dog.id === !id)
  //     setSpaData(deleteDog)
  // }
  

  function handleDeleteDog(id) {
    // console.log(id)
    const deleteDog = spaData.filter((dog) => console.log(dog))
    // console.log(deleteDog)
    setSpaData(deleteDog)
    // dog.id !== id
}



  function viewGuests(guests) {
   
    setGuestList(guests)
  };


  function handleChange(name, value) {
    setClickedDog({
      ...clickedDog, 
      [name]: value
    })
  }

  function editDog(updatedDog) {
    const updatedDogsArr = dogState.map(dog => dog.id === updatedDog.id ? updatedDog : dog)
        setClickedDog(updatedDogsArr)
        setDogState(updatedDogsArr)
}
  // deleteDog={handleDelete}

  // spaData={spaData}
  return (
    <div>
      <NavBar />
      <Switch>
       
        <Route path="/spas">
             <SpaList spaData={spaData} viewGuests={viewGuests}/>  
        </Route>

        <Route path="/guests"> 
             <DogList dogGuests={guestList} checkOut={handleDeleteDog}/> 
        </Route>  
      {/* change to guests path */}

        <Route path="/all-dogs">
              <AllDogs />
        </Route>

        <Route path="/check-in">
              <AddDog spaData={spaData} addDog={addDog}/>
        </Route>

        <Route path="/update">
              <UpdateDog  clickedDog={clickedDog} handleChange={handleChange} editDog={editDog}/>
        </Route>

        <Route path="/">
             <Home />   
        </Route>
      </Switch>
      
    </div>
  );
}



  // fetch('http://localhost:9292/dogs', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     dog_name: dogName,
    //     breed: dogBreed,
    //     age: dogAge,
    //     description: dogDesc,
    //     dog_image: dogImage,
    //     spa_id: spa
    //   }
    //   // need local state possibly to fix state not being updated.
    //   ),
    // })
    //   .then((res) => res.json())
    //   .then((newDog) => setSpaData(dogs => [...dogs, newDog]))
    //   .then(history.push(`/spas`))
export default App;
