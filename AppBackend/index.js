const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

mongoose.connect("mongodb+srv://gdelvento:Nuova789%3F%21@cluster0.jfufh8i.mongodb.net/Progetto")

const db = mongoose.connection
db.once("open", () => {
  console.log("Connesso al DB")
  app.listen(3000, () => {
    console.log("App in ascolto")
  })
})

const router = require('./router/chat')

app.use(cors())
app.use(express.json())

app.use(express.static("static"))

app.use('/chat', router)