import React from "react";
import Amico from "./Amico";

export default function AmiciContainer({ amici,setDest }) {
  function imposta(user){
    setDest(user)
  }
  return amici.amici.map(a => <Amico username={a.username} setDest={imposta} key={a._id} />)
}


//https://reacttraining.com/react-router/web/api/Redirect