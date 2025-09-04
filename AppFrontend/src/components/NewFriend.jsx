import React from "react";
import Button from "./Button"
import { useState} from "react";
import { Link } from "react-router-dom"

export default function NewFriend({ addFriend }) {
 const [visibilita,setVisibilita] = useState(true)
  const [visibilita2,setVisibilita2] = useState(false)
    return (
        <div className="chat">
            <h3 hidden={visibilita2}>Inserisci lo username del nuovo amico</h3>
            <form onSubmit={e => {
                e.preventDefault()
                addFriend(e.target.username.value)
                e.target.username.value = ''
                setVisibilita(false)
                setVisibilita2(true)
              }}>
                <input type="text" name="username" placeholder="Inserisci il nome utente del nuovo amico" />
              
                <input type="submit" value="Aggiungi"  />
            </form>
          <span hidden={visibilita}>Amico Aggiunto</span>
          <Button url="/Amici" description="Amici" />
        </div>
    )
}