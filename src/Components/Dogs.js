import React from 'react';

function Dogs({ dogs }) {
    console.log(dogs)
    const {dog_name, breed, age, description, dog_image} = dogs
    return (
        <div>
            <h2>{dog_name}</h2>
            <h3>{breed}</h3>
            <h3>Age: {age}</h3>
            <p>{description}</p>
            <img style={{  width: 200, height: 200 }} src={dog_image} alt={dog_name}></img>
            <button>Update Info</button>
            <button>Check-Out</button>
        </div>
    )
}

export default Dogs;