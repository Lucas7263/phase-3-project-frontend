import React from 'react';
import {useHistory} from 'react-router-dom';

// clickedDog,
function UpdateDog({  handleChange, editDog, dogInfo}) {
    const history = useHistory();
    
        console.log(dogInfo)

       console.log(dogInfo.dog_name)

        function editDoggo(e) {
            handleChange(e.target.name, e.target.value)
        }
   
  
      function updateDog(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/dogs/${dogInfo.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                
                dog_name: dogInfo.dog_name,
                breed: dogInfo.breed,
                age: dogInfo.age,
                description: dogInfo.description,
                dog_image: dogInfo.dog_image,
                spa_id: dogInfo.spa_id
            })
        })
        .then((res) => res.json())
        .then(editDog);
        history.push("/spas")
    }
    return (
        // clickedDog.dogName
            <div>
            <form className="addDog" onSubmit={updateDog}>
                <h2>Check-in your Dog!</h2>

                <label className="label">
                    Name 
                    <input className="input" type="text" name="dog_name" placeholder="Name" onChange={editDoggo} value={dogInfo.dog_name}></input>
                </label>

                <label className="label">
                    Breed 
                    <input className="input" type="text" name="breed" placeholder="Breed" onChange={editDoggo} value={dogInfo.breed}></input>
                </label>

                <label className="label">
                    Age 
                    <input className="input" type="text" name="age" placeholder="Age" onChange={editDoggo} value={dogInfo.age}></input>
                </label>

                <label className="label">
                    Doggy Bio
                    <input className="input" type="text" name="description" placeholder="Bio" onChange={editDoggo} value={dogInfo.description}></input>
                </label>

                <label className="label">
                    Selfie 
                    <input className="input" type="text" name="dog_image" placeholder="Image" onChange={editDoggo} value={dogInfo.dog_image}></input>
                </label>

                {/* <label className='label'>
                    <select className='dropdown' 
                        onChange={(e) => {
                            const selectedSpa = e.target.value;
                            setSpa(selectedSpa);
                        }}
                        value={spa_id}
                    >
                    <option disabled selected="true">-- Select Spa --</option>
                      {spaData.map((spa) => (
                        <option key={spa.id} value={spa.id}>{spa.name}</option>
                      ))}
                    </select>
                </label> */}
                <button type="submit">Check-in!!</button>
            </form>
        </div>
    )
    
   
}

export default UpdateDog;



