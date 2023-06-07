import React from 'react';


function EveryDog({ dogs, checkOut }) {
  
    const {dog_name, breed, age, description, dog_image, id} = dogs


    function deletesDog() {
        fetch(`http://localhost:9292/dogs/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((deletedDog) => checkOut(deletedDog))
    }

    return (
        <div>
            <h2>{dog_name}</h2>
            <h3>{breed}</h3>
            <h3>Age: {age}</h3>
            <p>{description}</p>
            <img style={{  width: 200, height: 200 }} src={dog_image} alt={dog_name}></img>
            <button>Update Info</button>
            <button className='checkout' onClick={deletesDog}>Check-Out</button>
        </div>
    )
}

export default EveryDog;