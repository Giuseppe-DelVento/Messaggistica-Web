const Users = require('../models/user')
const Chats = require('../models/chat')
const bcrypt = require("bcryptjs")

module.exports = {
  getAllMessaggi: (req, res) => {
     console.log('Ricevuta richiesta')
    Chats.find().populate('mittente')
      .then(r => {
        res.json(r)})
    //.then(res.send("Messaggi"))
    },

  addUser:  async (req, res) => {
        try {
          console .log("AddUser")
          let password= await bcrypt.hash(req.body.password, 10);
           console .log(password)
         // bcrypt.hash(req.body.password, 10).then(hash => {
 //password = hash; });
            console.log('Ricevuta richiesta')
            let user = await Users.create({
                username: req.body.username,
                password: password
              //versionKey: false
            })
           
            console.log('Richiesta soddisfatta con contenuto ' + user)
            res.json(user)
        } catch (error) {
            res.json({"message": "errore"})
        }
    },

  loginUser: (req,res)=>{
        console.log("prova")
         console.log(req.body.username)
      Users.findOne({ username: req.body.username})
      .then(r => res.json(r))
      },    
  
  getAllUtenti: (req, res) => {
    
    console.log("prova")
         console.log(req.body.username)
      Users.findOne({ username: req.body.username})
      .then(r => {
        console.log(r);
        res.json(r)})
  },
  
  getByUsername: async (req, res) => {
    let temp1={}
    let temp2={}
    console.log("getByUsername")
    console.log(req.body.mittente)
    console.log(req.body.destinatario)
    Users.findOne({username: req.body.mittente})
    .then(r=>{temp1=r
              return Users.findOne({username: req.body.destinatario})})
    .then(b=>{
       temp2=b
       console.log(temp1)
       console.log(temp2)
     return Chats.find({mittente: temp1._id,
                        destinatario: temp2._id})
    })
    .then(c=>{res.json(c)}) 
  },

  newMex: async (req, res) => {
        try {
            let id_mittente= await Users.findOne({username: req.body.mittente})
          let id_destinatario= await Users.findOne({username: req.body.destinatario})
            console.log("NewMex")
            let mex = await Chats.create({
                mittente: id_mittente._id,
                messaggio:req.body.mex,
                destinatario:id_destinatario._id
            })
        
            console.log('Richiesta soddisfatta con contenuto ' + mex)
            res.json(mex)
        } catch (error) {
            res.json({"message": "errore"})
        }
    },

  getAmici: async (req, res) => {
        try {console.log("GetAmici")
             console.log(req.body.id)
            let utente= await Users.findOne({_id: req.body.id}).populate('amici')
            console.log(utente)
            res.json(utente)
        } catch (error) {
            res.json({"message": "errore"})
        }
    },

    addFriend: async (req, res) => {
    try {
      console.log('Aggiungi Amico')
      console.log(req.body.id)
      console.log(req.body.username)
      const utente = await Users.findOne({_id: req.body.id})
      const friend = await Users.findOne({username: req.body.username})
      utente.amici.push(friend._id)
      utente.save()
      res.json(utente)
    } catch (error) {
        res.json({"message": "errore"})
    }
},
  removeFriend: async (req, res) => {
    try {
      console.log('Rimuovi Amico')
      console.log(req.body.id)
      console.log(req.body.username)
      const utente = await Users.findOne({_id: req.body.id})
      const friend = await Users.findOne({username: req.body.username})
      
      utente.amici.slice(utente.amici.findIndex(el=>{return el===friend._id}),1)
      utente.save()
      res.json(utente)
    } catch (error) {
        res.json({"message": "errore"})
    }
}

}
    
// metto await in modo  tale da avere l'oggetto restituito dato che findOne non restituisce niente
  

/*  
sito per capire populate https://dev.to/paras594/how-to-use-populate-in-mongoose-node-js-mo0
  // 3. REALIZZARE IL CONTROLLER getPostsByUserId
  getPostsByUserId: (req, res) => {
    Post.find({author: req.params.userId}).populate(['author', {path: 'comments', populate: {path: 'author', model: 'User'}}])
    .then(r => res.json(r))
  },
  
  getPostsByUsername: (req, res) => {
    User.findOne({username: req.params.username})
      .then(u => Post.find({author: u._id}).populate(['author', {path: 'comments', populate: {path: 'author', model: 'User'}}]))
      .then(r => res.json(r))
    }*/

/* FUNZIONA ANCHE COSI
  newMex: (req, res) => {
    let id_mittente
    let id_destinatario
            Users.findOne({username: req.body.mittente})
    .then(m=>id_mittente=m)
    .then(()=> Users.findOne({username: req.body.destinatario}))       
    .then(d=>{id_destinatario=d
            console.log("NewMex")
            let mex = Chats.create({
                mittente: id_mittente._id,
                messaggio:req.body.mex,
                destinatario:id_destinatario._id
            })
        
            console.log('Richiesta soddisfatta con contenuto ' + mex)
            res.json(mex)})
        } 
        
        
        console.log("getByUsername")
    console.log(req.body.mittente)
    console.log(req.body.destinatario)
    let id_mittente= await Users.findOne({username: req.body.mittente})
    let id_destinatario= await Users.findOne({username: req.body.destinatario})
    console.log(id_mittente)
    console.log(id_destinatario)
    let messaggi= Chats.find({mittente: id_mittente._id})
    console.log(messaggi)
    res.json(messaggi)*/