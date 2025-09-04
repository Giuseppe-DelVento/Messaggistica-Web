const mongoose = require('mongoose')

const chatSchema = mongoose.Schema({
  mittente:{type: mongoose.Schema.Types.ObjectId,
            ref: "Users"},
  messaggio: String,
  destinatario: {type: mongoose.Schema.Types.ObjectId,
            ref: "Users"}
})

module.exports = mongoose.model("Chats", chatSchema)

//user1: {type: mongoose.Schema.Types.ObjectId, ref: "User"