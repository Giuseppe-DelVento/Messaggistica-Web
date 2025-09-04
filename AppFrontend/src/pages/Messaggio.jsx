import React from "react";
import Messaggio from "../components/Messaggio";
import Button from "../components/Button"

export default function Mex() {

   function invio(mittente,destinatario,mex) {
     fetch('https://backbozza1.giuseppedlv.repl.co/chat/newMex', 
    {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                mittente: mittente,
                destinatario: destinatario,
                mex: mex})
        })
      .then(res => {
        console.log(res.status);
        console.log(res.ok);
        console.log(res.headers.get("Content-Type"));
        return res.json();})
     .then(text=>{
        console.log(text)
        return text})
    }
     return (
    <div id="login-container">
      <Messaggio invio={invio}/>
      <Button url="/Amici" description="Amici" />
    </div>
  )
}


  