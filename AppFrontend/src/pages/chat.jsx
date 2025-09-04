import React from "react";
import ChatContainer from "../components/ChatContainer";
import { useState, useEffect } from "react";
import Button from "../components/Button";


export default function Chat({dest}) {
  const [chats, setChats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  
  useEffect(() => {
    console.log(dest)
const parsedObject = JSON.parse(sessionStorage.getItem('utente'));
      console.log("indizio2")
      console.log(parsedObject.username);
    fetch('https://backbozza1.giuseppedlv.repl.co/chat/getByUsername',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                mittente: parsedObject.username,
                destinatario: dest})
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
      setChats(obj)
    })
    .catch(error => {
      setLoading(false)
      setError(true)
    })
  },[])

 

  return (
    <div id="chat-container">
      <Button url="/" description="PaginaIniziale" />
      <Button url="/Amici" description="Amici" />
      {loading ? <span>Caricamento in corso...</span> : error ? <span>Errore nel caricamento delle chat</span> : <ChatContainer chats={chats} />}
    </div>
  )
}