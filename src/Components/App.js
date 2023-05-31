import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import SpaList from './SpaList';
import DogList from './DogList';
import Home from './Home';
import NavBar from './NavBar';

function App() {
  const [spaData, setSpaData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/spas`)
    .then(res => res.json())
    .then(data => setSpaData(data))
  }, []);


  return (
    <div>
      <NavBar />
      <Switch>
       
        <Route path="/spas">
             <SpaList spaData={spaData}/>  
        </Route>

        <Route path="/dogs">
             <DogList /> 
        </Route>  
      

        <Route path="/">
             <Home />
             
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
