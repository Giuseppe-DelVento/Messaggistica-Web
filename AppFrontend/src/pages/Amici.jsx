import React from "react";
import AmiciContainer from "../components/AmiciContainer";
import { useState, useEffect } from "react";
import Button from  "../components/Button";

export default function Amici({setDest}) {
  const [amici, setAmici] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  
  useEffect(() => { 
  const parsedObject = JSON.parse(sessionStorage.getItem('utente'));
    fetch('https://backbozza1.giuseppedlv.repl.co/chat/getAmici',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: parsedObject._id})
        })
    .then(res => {
      console.log(res.status); 
      console.log(res.ok);
      console.log(res.headers.get("Content-Type"));
      return res.json();
        })
    .then(text=>{
       console.log(text)
        return text})
    .then(obj => {
      setLoading(false)
      setAmici(obj)
    })
    .catch(error => {
      setLoading(false)
      setError(true)
    })
  },[])

 function Logout(){
   sessionStorage.removeItem('utente');
   location.href = "/Login";
 }

  return (
    <div id="chat-container">
      {loading ? <span>Caricamento in corso...</span> : error ? <span>Errore nel caricamento delle chat</span> : <AmiciContainer amici={amici} setDest={setDest}/>}
      <Button url="/Messaggio" description="Nuovo Messaggio" />
      <Button url="/RimuoviAmico" description="Rimuovi un amico" />
      <Button url="/NuovoAmico" description="Aggiungi nuovo amico" />
      <button onClick={Logout} >LogOut</button>
      </div>
  )
}