import React from "react";
import Button from "./Button"
import { useState} from "react";
import { Link } from "react-router-dom"

export default function NewUser({ addUser }) {
 const [visibilita,setVisibilita] = useState(true)
  const [visibilita2,setVisibilita2] = useState(false)
    return (
        <div className="chat">
            <h3 hidden={visibilita2}>Carica un nuovo Utente</h3>
            <form onSubmit={e => {
                e.preventDefault()
                addUser(e.target.username.value,
                        e.target.password.value)
                e.target.username.value = ''
                e.target.password.value = ''
                setVisibilita(false)
                setVisibilita2(true)
              }}>
                <input type="text" name="username" placeholder="Inserisci il tuo nome utente" hidden={visibilita2}/>
              <input type="text" name="password" placeholder="Inserisci la tua password" hidden={visibilita2}/>
              <Link to="/Login" hidden={visibilita}>Utente registrato. Effettua il login</Link>
                <input type="submit" value="Registra" hidden={visibilita2} />
            </form>
          <Button url="/Login" description="Login" />
          <Button url="/" description="PaginaIniziale" />
        </div>
    )
}