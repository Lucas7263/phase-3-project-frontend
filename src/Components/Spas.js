import React, {useState} from 'react';

function Spas({spa}) {
    const [viewDog, setViewDog] = useState("");

    const {name, location, employees, description, price, image, dogs} = spa
      

    return (
        <div  >
            <section  className="flexbox-item flexbox-spa">
            <h2>{name}</h2>
            <img style={{  width: 200, height: 150 }} src={image} alt={name}></img>
            <h3>{location}</h3>
            <h4>Number of Employees: {employees}</h4>
            <p>{description}</p>
            <h4>Price: ${price}/day</h4>
            
          
            <select className="dropdown"
                      onChange={(e) => {
                        const selectedDog = e.target.value;
                        setViewDog(selectedDog);
                    }}
                    value={viewDog}
            >
            
            <option  defaultValue={true}>-- View Guests --</option>
                      {dogs.map((dog) => (
                        <option key={dog.id} value={dog.dog_name}>{dog.dog_name}</option>
                      ))}

            </select>
           
            </section>
                    
          <section>
            
        <h2>{viewDog}</h2>

          </section>
        
        </div>
    )
}

export default Spas

// https://images.ctfassets.net/7ybtdzdgha5d/5kqxj8zUBnDo32jJ1znBKH/1384b07cec8aeb3768e1558d2e54b4e0/Canva_-_Dog_Spa_Wellness.jpg?w=599&h=599&fl=progressive&q=65&fm=jpg
//dog spa image

// Paw-topia
// Dallas, Texas
// Highly trained and wonderful staff that cater to your pups every need.
//30
// 175