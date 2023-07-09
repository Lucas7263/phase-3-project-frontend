import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';

function AddSpa({addSpa}) {
    const [spaName, setSpaName] = useState("");
    const [spaLocation, setSpaLocation] = useState("");
    const [spaEmployees, setSpaEmployees] = useState("");
    const [spaDescription, setSpaDescription] = useState("");
    const [spaPrice, setSpaPrice] = useState("");
    const [spaImage, setSpaImage] = useState("");

    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault() 
         
 
         fetch('http://localhost:9292/spas', {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({
 
               name: spaName,
               location: spaLocation,
               employees: spaEmployees,
               description: spaDescription,
               price: spaPrice,
               image: spaImage 
             }
         
             ),
           })
             .then((res) => res.json())
             .then((newSpa) => {
                addSpa(newSpa)
                 history.push(`/spas`)
             })
            
        }

    return(
        <div>
            <form className="add-Dog" onSubmit={handleSubmit}>
                <h2>Add a new favorite spa!</h2>

                <div class="flexbox-container-form">

                <label className="label">
                    Name 
                    <input className="input" type="text" placeholder="Name" onChange={(e) => setSpaName(e.target.value)} value={spaName}></input>
                </label>

                <label className="label">
                    Location 
                    <input className="input" type="text" placeholder="Location" onChange={(e) => setSpaLocation(e.target.value)} value={spaLocation}></input>
                </label>

                <label className="label">
                    Employees 
                    <input className="input" type="text" placeholder="Employees" onChange={(e) => setSpaEmployees(e.target.value)} value={spaEmployees}></input>
                </label>

                <label className="label">
                    Description
                    <input className="input" type="text" placeholder="Description" onChange={(e) => setSpaDescription(e.target.value)} value={spaDescription}></input>
                </label>

                <label className="label">
                    Price 
                    <input className="input" type="text" placeholder="Price" onChange={(e) => setSpaPrice(e.target.value)} value={spaPrice}></input>
                </label>

                <label className="label">
                    Image 
                    <input className="input" type="text" placeholder="Image" onChange={(e) => setSpaImage(e.target.value)} value={spaImage}></input>
                </label>
                </div>
                <button className="check-in-btn" type="submit">Add Spa!!</button>
            </form>
        </div>
    )
}

export default AddSpa;