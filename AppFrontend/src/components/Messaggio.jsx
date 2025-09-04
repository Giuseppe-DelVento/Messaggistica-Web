import React from "react";
import Button from "./Button"

export default function Messaggio({invio}) {
  console.log("Prova Messaggio")
  const parsedObject = JSON.parse(sessionStorage.getItem('utente'));
  return (
    <>
        <div className="chat">
            <h3>Inserisci il nuovo messaggio</h3>
            <form onSubmit={e => {
                e.preventDefault()
                invio(parsedObject.username,e.target.destinatario.value,e.target.messaggio.value)
                e.target.destinatario.value = ''
                e.target.messaggio.value = ''
              }}>
              
              <input type="text" name="destinatario" placeholder="Destinatario" />
              <input type="text" name="messaggio" placeholder="messaggio" />
                <input type="submit" value="Invio" />
            </form>
        </div>  
    </>
  )
}
