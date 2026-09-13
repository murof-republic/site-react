import { useEffect } from 'react'
import { Link } from 'react-router-dom'
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/artes">Artes</Link></li>
                <li><Link to="/projetos">Projetos</Link></li>
                <li><Link to="/apoiadores">Apoiadores</Link></li>
            </ul>

            <div id="server-widget">
                <span id="server-dot"></span>
                <span id="server-address"></span>
            </div>
        </nav>
    )  
}

export default Navbar