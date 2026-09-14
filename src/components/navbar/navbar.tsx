import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { status } from '../../services/minecraft'
import './navbar.css'

function Navbar() {
    useEffect(() => {
        status()
    }, [])

    return (
        <nav>
            <h1>Murof</h1>

            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/artes">Artes</NavLink></li>
                <li><NavLink to="/projetos">Projetos</NavLink></li>
                <li><NavLink to="/apoiadores">Apoiadores</NavLink></li>
            </ul>

            <div id="server-widget">
                <span id="server-dot"></span>
                <span id="server-address"></span>
            </div>
        </nav>
    )  
}

export default Navbar