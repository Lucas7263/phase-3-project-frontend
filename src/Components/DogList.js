import React from 'react';
import Dogs from './Dogs'

function DogList({ dogGuests, checkOut, amendDog }) {
    
    // let dogsArr = ["Abbey", "Lan", "Bear", "Tilly"];

    
    // const dogs = dogGuests.map(dog => (<Dogs key={dog.id} dogs={dog}/>))
    const dogs = dogGuests.map(dog => {
       
        return (<Dogs key={dog.id} dogs={dog} checkOut={checkOut} amendDog={amendDog}/>)
    })
    return(
        <div>
            {dogs}
        </div>
    )
}

export default DogList;


   








// , {useState, useEffect}
// const [dogData, setDogData] = useState([]);

// // {dogData}
// useEffect(() => {
//     fetch(`http://localhost:9292/dogs`)
//     .then (res => res.json())
//     .then (dogs => setDogData(dogs))
// }, [])