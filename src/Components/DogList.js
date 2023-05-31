import React, {useState, useEffect} from 'react';
import Dogs from './Dogs'

function DogList() {
const [dogData, setDogData] = useState([]);


useEffect(() => {
    fetch(`http://localhost:9292/dogs`)
    .then (res => res.json())
    .then (dogs => setDogData(dogs))
}, [])

    const dogs = dogData.map(dog => {
        return (<Dogs key={dog.id} dogs={dog}/>)
    })
    return(
        <div>
            {dogs}
        </div>
    )
}

export default DogList;