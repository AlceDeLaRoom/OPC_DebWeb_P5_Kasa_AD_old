import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import FicheLogement from './Pages/FicheLogement'
import Lost from './Pages/Lost'
import About from './Pages/About'

import Header from './Components/Header'
import Footer from './Components/Footer'


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Fiche-logement/:number" element={<FicheLogement />} />
                <Route path="/A-propos" element={<About />} />
                <Route path="*" element={<Lost />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)