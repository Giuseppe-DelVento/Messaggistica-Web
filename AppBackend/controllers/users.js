const Users = require('../models/user')
const bcrypt = require("bcryptjs")

/*
module.exports = 
{
  loginUser: (req, res) => 
    {
      let result
      console.log("prova")
      console.log(req.body.username)
       Users.findOne({ username: req.body.username,
                      //password: req.body.password
                     })
      .then(r=>{
        console.log(req.body.password)
        console.log(r.password)
        result=r
        return bcrypt.compare(req.body.password, r.password);
        })
      .then(b=>{
        console.log(b)
        console.log(result)
        if(b) return res.json(result)
        else return res.json("Non Trovato")
      })
    }
}

*/





module.exports = 
{
  loginUser: (req, res) => 
    {
      let result
      console.log("prova")
      console.log(req.body.username)
       Users.findOne({ username: req.body.username,
                      //password: req.body.password
                     })
      .then(r=>{
        result=r
        return r.passwordComparison(req.body.password)
        })
      .then(b=>{
        console.log(b)
        console.log(result)
        if(b) return res.json(result)
        else return res.json("Non Trovato")
      })
    }
}


  