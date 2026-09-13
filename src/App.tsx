import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'

import Home from './pages/home'
import Artes from './pages/artes'
import Projetos from './pages/projetos'
import Apoiadores from './pages/apoiadores'

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artes" element={<Artes />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/apoiadores" element={<Apoiadores />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App