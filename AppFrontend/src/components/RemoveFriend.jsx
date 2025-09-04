import React from "react";
import Button from "./Button"
import { useState} from "react";
import { Link } from "react-router-dom"

export default function RemoveFriend({ removeFriend }) {
 const [visibilita,setVisibilita] = useState(true)
  const [visibilita2,setVisibilita2] = useState(false)
    return (
        <div className="chat">
            <h3 hidden={visibilita2}>Inserisci lo username dell'amico</h3>
            <form onSubmit={e => {
                e.preventDefault()
                removeFriend(e.target.username.value)
                e.target.username.value = ''
                setVisibilita(false)
                setVisibilita2(true)
              }}>
                <input type="text" name="username" placeholder="Inserisci il nome dell'utente da rimuovere" />
              
                <input type="submit" value="Rimuovi"  />
            </form>
          <span hidden={visibilita}>Amico Rimosso</span>
          <Button url="/Amici" description="Amici" />
        </div>
    )
}