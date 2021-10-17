// import './App.css';
import React from 'react'
import { Link } from 'react-router-dom';



export default function Navbar() {
    return (

        <header className="App-header">
            <ul className='"nav-style"'>

                <li><Link to='/'>Countries List</Link></li>
                <li><Link to='details'>Countries Details</Link></li>


            </ul>


        </header>

    )
}

