//using routes inside express
const router = require('express').Router();

//using models
let User = require('../models/user.model');

//make get request happen for /users/ endpoint
router.route('/').get((req,res) => {
    User.find() //mongoose query or method
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+ err));
});

//make post request happen for /users/add endpoint
router.route('/add').post((req,res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save() //mongoose query or method
    .then(() => res.json('User Added'))
    .catch(err => res.status(400).json('Error: '+ err));
})

module.exports = router;