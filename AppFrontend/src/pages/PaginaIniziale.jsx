import React from "react";
import Button from "../components/Button"

export default function PaginaIniziale() {
 

  return (
    <div id="chat-container">
      <Button url="/Login" description="Login" />
       <Button url="/Home" description="Registrati" />
    </div>
  )
}