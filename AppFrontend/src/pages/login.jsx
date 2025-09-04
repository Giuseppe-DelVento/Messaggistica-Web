import React from "react";
import { useState, useEffect } from "react";
import Verifica from "../components/login";
import Button from "../components/Button";
//sessionStorage.removeItem("key");
// Remove all saved data from sessionStorage
//sessionStorage.clear();

export default function Login({imposta}) {
  const [utlog, setUtlog] = useState({})


   function verifica(username,password) {
     fetch('https://backbozza1.giuseppedlv.repl.co/chat/login', 
    {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password})
        })
        .then(res => {
      console.log(res.status); 
      console.log(res.ok); 
      console.log(res.headers.get("Content-Type")); 
      return res.json();})
    .then(text=>{
        console.log(text)
        return text})
    .then(obj => {
      console.log(obj)
      setUtlog(obj)
      imposta(utlog)
      sessionStorage.setItem('utente', JSON.stringify(obj));
  const parsedObject = JSON.parse(sessionStorage.getItem('utente'));
      console.log("indizio")
      console.log(parsedObject);
     

    }).then(()=>{location.href = "/Amici"})
    }
     return (
    <div id="login-container">
      <Verifica verifica= {verifica} />
    </div>
  )
}
/*fetch('https://backbozza1.giuseppedlv.repl.co/chat/login/'+name)
     .then(res => {
        if (res.ok) return res.json();
        else throw new Error('Si è verificato un errore nella comunicazione con il server');
    })
    .then(() => { setUtlog("Prova")})
   }*/

 /*.then(res => {
        if (res.ok) return res.json();
        else throw new Error('Si è verificato un errore nella comunicazione con il server');
    })*/

    // qui devo poi inserire del codice per prendere la risposta se esiste lutente e passare questo nome alla page home

  