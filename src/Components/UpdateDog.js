import React from 'react';
import {useHistory} from 'react-router-dom';


function UpdateDog({  handleChange, editDog, dogInfo}) {
    const history = useHistory();
    
  

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
        
            <div>
            <form className="update-Dog" onSubmit={updateDog}>
                <h2>Update your dog info</h2>

                <div class="flexbox-container-update-form">
                <label className="label">
                    <img  className="input" style={{  width: 200, height: 200 }} src={dogInfo.dog_image} alt={dogInfo.dog_name}></img>
                </label>

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
                </div>
                <button className="update-btn" type="submit">Update</button>
            </form>
            
        </div>
    )
    
   
}

export default UpdateDog;



