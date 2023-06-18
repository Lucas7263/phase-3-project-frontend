import React from 'react';


function EveryDog({ dogs }) {
  
    const {dog_name, breed, age, description, dog_image} = dogs



    return (
        <div class="flexbox-item flexbox-all-dogs">
            <h2>{dog_name}</h2>
            <img style={{  width: 200, height: 200 }} src={dog_image} alt={dog_name}></img>
            <h3>{breed}</h3>
            <h3>Age: {age}</h3>
            <p>{description}</p>
          
        </div>
    )
}

export default EveryDog;