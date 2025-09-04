import React from "react";
import { Link } from "react-router-dom"
import { useState} from "react";

export default function Amico({ username,setDest }) {
  const [user,setUser]= useState(username)
  const [visibilita,setVisibilita] = useState(true)
  return (
    <>
           <form onSubmit={e=>{
                e.preventDefault()
                setDest(user)
                setVisibilita(false)
                //location.href = "/Chat"
                } }>
             <input type="submit" value={user} />
             <Link to="/Chat" hidden={visibilita}>Accesso alla chat</Link>
             
           </form>
    </>
  )
}
// forse non posso impostare la variabile del setDest perchè non posso farlo  in contemporane al reindirizzamento verso /Chat