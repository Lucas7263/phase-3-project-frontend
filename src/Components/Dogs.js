import React from 'react';
import { useHistory } from 'react-router-dom'




function Dogs({ dogs, checkOut, amendDog }) {
    
    const {dog_name, breed, age, description, dog_image, id} = dogs

   
    function deletesDog() {
        fetch(`http://localhost:9292/dogs/${id}`, {
            method: "DELETE",
      
        })   
            
            // checkOut(id)
            checkOut(dogs)
            let path = '/spas'
            history.push(path)
           
    }

    const history = useHistory()
    
    function updateDog() {
        
        let path = '/update'
        history.push(path)

        amendDog(dogs)
}
    
    
    return (
        <div class="flexbox-item flexbox-dog">
            <h2>{dog_name}</h2>
            <img style={{  width: 200, height: 200 }} src={dog_image} alt={dog_name}></img>
            <h3>{breed}</h3>
            <h3>Age: {age}</h3>
            <p>{description}</p>
            
            
            <button class="btn1" onClick={updateDog}>Update Info</button> 
          
            <button class="btn2" className='checkout' onClick={deletesDog}>Check-Out</button>
        </div>
    )
}

export default Dogs;