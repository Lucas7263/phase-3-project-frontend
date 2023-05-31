import React from 'react';
import { NavLink } from 'react-router-dom'


function NavBar() {

    return (
        <div>
            <nav className='navbar'>
                <ul className='list'>
                    <ol><NavLink to="/spas">Spa List</NavLink></ol>
                    <ol><NavLink to="/dogs">Dogs</NavLink></ol>
                </ul>
            </nav>
        </div>
    )
}


export default NavBar;