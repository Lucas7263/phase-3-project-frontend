import React, { useState } from 'react';


function AddDog({ spaData, addDog }) {
    const [dogName, setDogName] = useState("");
    const [dogBreed, setDogBreed] = useState("");
    const [dogAge, setDogAge] = useState("");
    const [dogDesc, setDogDesc] = useState("");
    const [dogImage, setDogImage] = useState("");
    const [spa, setSpa] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        
        addDog({
            dogName,
            dogBreed,
            dogAge,
            dogDesc,
            dogImage,
            spa
        });
        
        setDogName("");
        setDogBreed("");
        setDogAge("");
        setDogDesc("");
        setDogImage("");
        setSpa("");
        
       }

    return (
        <div>
            <form className="addDog" onSubmit={handleSubmit}>
                <h2>Check-in your Dog!</h2>

                <label className="label">
                    Name 
                    <input className="input" type="text" placeholder="Name" onChange={(e) => setDogName(e.target.value)} value={dogName}></input>
                </label>

                <label className="label">
                    Breed 
                    <input className="input" type="text" placeholder="Breed" onChange={(e) => setDogBreed(e.target.value)} value={dogBreed}></input>
                </label>

                <label className="label">
                    Age 
                    <input className="input" type="text" placeholder="Age" onChange={(e) => setDogAge(e.target.value)} value={dogAge}></input>
                </label>

                <label className="label">
                    Doggy Bio
                    <input className="input" type="text" placeholder="Bio" onChange={(e) => setDogDesc(e.target.value)} value={dogDesc}></input>
                </label>

                <label className="label">
                    Selfie 
                    <input className="input" type="text" placeholder="Image" onChange={(e) => setDogImage(e.target.value)} value={dogImage}></input>
                </label>

                <label className='label'>
                    <select className='dropdown' 
                        onChange={(e) => {
                            const selectedSpa = e.target.value;
                            setSpa(selectedSpa);
                        }}
                        value={spa}
                    >
                    <option disabled selected="true">-- Select Spa --</option>
                      {spaData.map((spa) => (
                        <option key={spa.id} value={spa.id}>{spa.name}</option>
                      ))}
                    </select>
                </label>
                <button type="submit">Check-in!!</button>
            </form>

        </div>
    )
}


export default AddDog




// onChange={(e) => {
//     const selectedSpa = e.target.value;
//     setSpa(selectedSpa);
// }}
// value={spa}