//using routes inside express
const router = require('express').Router();

//using models
let Exercise = require('../models/exercise.model');

//make get request happen for /users/ endpoint
router.route('/').get((req,res) => {
    Exercise.find() //mongoose query or method
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: '+ err));
}); 

//make post request happen for /users/add endpoint
router.route('/add').post((req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercises = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercises.save() //mongoose query or method
    .then(() => res.json('Exercise Added'))
    .catch(err => res.status(400).json('Error: '+ err));
})

module.exports = router;