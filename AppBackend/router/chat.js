const express = require('express')
const router = express.Router()
const chatControllers=  require("../controllers/chat")
const UsersControllers=  require("../controllers/users")

router.get('/', (req, res) => {
  res.json({message: 'Sei nel router'})
})

router.get('/all', chatControllers.getAllMessaggi)
router.post('/allUtenti', chatControllers.getAllUtenti)
router.post('/newuser', chatControllers.addUser)
router.post('/newFriend', chatControllers.addFriend)
router.post('/RemoveFriend', chatControllers.removeFriend)
router.post('/login', UsersControllers.loginUser)
router.post('/getByUsername',  chatControllers.getByUsername)
router.post('/newMex',  chatControllers.newMex)
router.post('/getAmici',  chatControllers.getAmici)

/*
// 3. REALIZZARE LA ROUTE PER IL CONTROLLER getPostsByUserId
router.get('/byUserId/:userId', postsController.getPostsByUserId)

router.get('/byUsername/:username', postsController.getPostsByUsername)*/

module.exports = router