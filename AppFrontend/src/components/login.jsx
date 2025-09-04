import React from "react";
import Button from "./Button"

export default function Verifica({ verifica}) {
  console.log("Prova login")
  return (
    <>
        <div className="chat">
            <h3>Inserisci il tuo username</h3>
            <form onSubmit={e => {
                e.preventDefault()
                //localStorage.setItem("utente",e.target.username.value)
     
                verifica(e.target.username.value,e.target.password.value)
                e.target.username.value = ''
                e.target.password.value = ''
              }}>
                <input type="text" name="username" placeholder="Inserisci il tuo nome utente" />
              <input type="text" name="password" placeholder="Password" />
                <input type="submit" value="Accedi" />
            </form>
           <Button url="/Home" description="Registrati" />
          <Button url="/" description="PaginaIniziale" />
        </div>  
    </>
  )
}
// con il populate lato backend su mittente e destinatario, nell'array json verrano passate anche tutti i valori degli attributi del mitt e del dest e che quindi poi potremo usare nei tag

// <input type="submit" value="Accedi" onClick={<Redirect to="/Home" />} />
// <input type="submit" value="Accedi" onClick={<Redirect to="/Home" />} />