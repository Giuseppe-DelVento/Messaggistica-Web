import './App.css'
import Home from './pages/Home'
import NuovoAmico from './pages/NuovoAmico'
import RimuoviAmico from './pages/RimuoviAmico'
import Amici from './pages/Amici'
import Mex from './pages/Messaggio'
import Chat from './pages/chat'
import Login from './pages/login'
import PaginaIniziale from './pages/PaginaIniziale'
import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';


export default function App() {
const [utlog, setUtlog] = useState([])
const [dest, setDest] = useState("")
  
  
  function imposta(utente){
  setUtlog(utente)
}
 
  return (
    <div id="container">
    <main id="main-content">
      <Routes>
        <Route path="/" element={<PaginaIniziale />} />
        <Route path="/Home" element={<Home  />} />
        <Route path="/Login" element={<Login imposta={imposta} />} />
        <Route path="/Chat" element={<Chat dest={dest} />} />
        <Route path="/Messaggio" element={<Mex />} />
        <Route path="/Amici" element={<Amici setDest={setDest} />} />
        <Route path="/NuovoAmico" element={<NuovoAmico />} />
        <Route path="/RimuoviAmico" element={<RimuoviAmico />} />
      </Routes>
    </main>
    </div>
  )
}
//Le route specificano quale elemento richiamare quando si accede a quel percorso