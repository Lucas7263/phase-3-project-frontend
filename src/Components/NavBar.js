import React from 'react';
import { NavLink } from 'react-router-dom'


function NavBar() {

    return (
        <div>
            <nav className='navbar'>
                <ul className='list'>
                    <ol><NavLink to="/spas">Spa List</NavLink></ol>
                    <ol><NavLink to="/add-spa">Add Spa</NavLink></ol>
                    <ol><NavLink to="/all-dogs">All Dogs</NavLink></ol>
                    <ol><NavLink to="/check-in">Check-in</NavLink></ol>
                </ul>
            </nav>
        </div>
    )
}


export default NavBar;