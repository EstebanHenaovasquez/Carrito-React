import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import './proyec.css'
import App from '../App';
import Carro from '../carac/carro/carro';

export function Nav() {
    return (
        <Router>
          <nav>
            <img src="/public/logoPerfumes.jpg" alt="Logo" />
            <ul> <Link to="/">INICIO</Link></ul>
            <ul> <Link to="/Carrito">CARRITO</Link></ul>
          </nav>
          <Routes>
            <Route path="/"element={<App />} />
            <Route path="/Carrito"element={<Carro />} />
          </Routes>
        
        </Router>
      )
};