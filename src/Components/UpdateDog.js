import React from 'react';
import {useHistory} from 'react-router-dom';


function UpdateDog({ clickedDog, handleChange, editDog }) {
    const history = useHistory();
    // const [formData, setFormData] = useState({
    //     dog_name: "",
    //     breed: "",
    //     age: "",
    //     description: "",
    //     dog_image: "",
    //     spa_id: ""

    // })
        function ChangeDog(e) {
            handleChange(e.target.name, e.target.value)
        }
   
  
      function updateDog() {
        fetch(`http://localhost:9292/dogs/${clickedDog.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                
                dog_name: clickedDog.name,
                breed: clickedDog.dogBreed,
                age: clickedDog.dogAge,
                description: clickedDog.dogDesc,
                dog_image: clickedDog.dogImage,
                spa_id: clickedDog.spa_id
            })
        })
        .then((res) => res.json())
        .then(editDog);
        history.push("/spas")
    }
    return (
       
            <div>
            <form className="addDog" onSubmit={updateDog}>
                <h2>Check-in your Dog!</h2>

                <label className="label">
                    Name 
                    <input className="input" type="text" name="dog_name" placeholder="Name" onChange={ChangeDog} value={clickedDog.dogName}></input>
                </label>

                <label className="label">
                    Breed 
                    <input className="input" type="text" name="breed" placeholder="Breed" onChange={ChangeDog} value={clickedDog.dogBreed}></input>
                </label>

                <label className="label">
                    Age 
                    <input className="input" type="text" name="age" placeholder="Age" onChange={ChangeDog} value={clickedDog.dogAge}></input>
                </label>

                <label className="label">
                    Doggy Bio
                    <input className="input" type="text" name="description" placeholder="Bio" onChange={ChangeDog} value={clickedDog.dogDesc}></input>
                </label>

                <label className="label">
                    Selfie 
                    <input className="input" type="text" name="dog_image" placeholder="Image" onChange={ChangeDog} value={clickedDog.dogImage}></input>
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



