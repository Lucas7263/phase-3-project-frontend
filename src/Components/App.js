import React, {useState, useEffect} from 'react';
import SpaList from './SpaList';
// import DogList from './DogList';

function App() {
  const [spaData, setSpaData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/spas`)
    .then(res => res.json())
    .then(data => setSpaData(data))
  }, []);


  return (
    <div>
      <SpaList spaData={spaData}/>
      {/* <DogList dogData={spaData}/> */}
    </div>
  );
}

export default App;
