import React from "react";
import RemoveFriend from "../components/RemoveFriend";

export default function RimuoviAmico() {

  function removeFriend(username) { 
     const parsedObject = JSON.parse(sessionStorage.getItem('utente'));
    fetch('https://backbozza1.giuseppedlv.repl.co/chat/RemoveFriend', 
    {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                id:parsedObject._id})
        }) 
     .then(res=>res.json())
     .then(text=>console.log(text))
     //.then(()=>{location.href = "/Login"})
    }

  return (
    <div id="chat-container">
      <RemoveFriend removeFriend={removeFriend} />
    </div>
  )
}

 