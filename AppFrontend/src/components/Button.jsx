import React from "react";
import { Link } from "react-router-dom"

export default function Button({ url, description }) {
  return <li><Link to={url}>{description}</Link></li>
}