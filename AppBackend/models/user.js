const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  amici : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  }]
}
  //,{collection:'User', versionKey: false }
)
/*userSchema.pre("save", function(next) { 
 let users = this;
 bcrypt.hash(users.password, 10).then(hash => {
 users.password = hash;
 next();
 });
});*/

userSchema.methods.passwordComparison =
 function(inputPassword) {
 let user = this;
   console.log(inputPassword)
    console.log(user.password)
 return bcrypt.compare(inputPassword, user.password);
 };



/*userSchema.methods.passwordComparison =
 function(inputPassword) {
 let users = this;
   let temp;
  bcrypt.compare(inputPassword, users.password, function(err, res) {
  if (err){
    // handle error
      temp="Errore"
  }
  if (res) {
    // Send JWT
    temp="true"
  } else {
    // response is OutgoingMessage object that server response http request
    return response.json({success: false, message: 'passwords do not match'});
  }
})
   console.log("INTERNO "+ temp)
 return temp
 };*/

module.exports = mongoose.model("Users", userSchema)


