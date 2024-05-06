import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement'
import Error404 from './pages/Error404'
import About from './pages/About'

import Header from './components/Header'
import Footer from './components/Footer'

import logements from "./datas/logements.json"



const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home logements={logements}/>} />
                <Route path="/fiche-logement/:id" element={<FicheLogement logements={logements}/>} />
                <Route path="/a-propos" element={<About />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);