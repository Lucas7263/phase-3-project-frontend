import React from 'react';
import Dogs from './Dogs'

function DogList({ dogGuests }) {
    
    let dogsArr = ["Abbey", "Lan", "Bear", "Tilly"];

    console.log(dogGuests)
    // const dogs = dogGuests.map(dog => (<Dogs key={dog.id} dogs={dog}/>))
    const dogs = dogsArr.map(dog => {
        console.log(dog)
        return (<Dogs key={dog.id} dogs={dog}/>)
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