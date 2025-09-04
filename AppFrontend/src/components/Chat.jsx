import React from "react";
import Utenti from "./Utenti"; 

export default function Chat({ data }) {
  return (
    <>
        <div className="elenco">
          <p>{data.messaggio}
            <Utenti username={data.mittente} /> 
            <Utenti username={data.destinatario} />
          </p>  
        </div>  
    </>
  )
}
// con il populate lato backend su mittente e destinatario, nell'array json verrano passate anche tutti i valori degli attributi del mitt e del dest e che quindi poi potremo usare nei tag