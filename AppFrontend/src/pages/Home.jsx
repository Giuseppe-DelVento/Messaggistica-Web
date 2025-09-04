import React from "react";
import { useState } from "react";
import NewUser from "../components/NewUser";

export default function Home() {

   function addUser(username,password) {  
    fetch('https://backbozza1.giuseppedlv.repl.co/chat/newuser', 
    {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password})
        }) 
     .then(res=>res.json())
     .then(text=>console.log(text))
     //.then(()=>{location.href = "/Login"})
    }

  return (
    <div id="chat-container">
      <NewUser addUser= {addUser} />
    </div>
  )
}

 /* useEffect(() => {
    fetch('https://backbozza1.giuseppedlv.repl.co/chat/all')
    .then(res => {
        if (res.ok) return res.json();
        else throw new Error('Si è verificato un errore nella comunicazione con il server');
    })
    .then(obj => {
      setLoading(false)
      setChats(obj)
    })
    .catch(error => {
      setLoading(false)
      setError(true)
    })
  }, [])*/
//{loading ? <span>Caricamento in corso...</span> : error ? <span>Errore nel caricamento delle chat</span> : <ChatContainer chats={chats} />}