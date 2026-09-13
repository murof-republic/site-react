    import { useEffect } from 'react'
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
                    <li id="active"><a href="#">Home</a></li>
                    <li><a href="pages/artes.html">Artes</a></li>
                    <li><a href="pages/projetos.html">Projetos</a></li>
                    <li><a href="pages/apoiadores.html">Apoiadores</a></li>
                </ul>

                <div id="server-widget">
                    <span id="server-dot"></span>
                    <span id="server-address"></span>
                </div>
            </nav>
        )
    }

    export default Navbar