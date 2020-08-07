//using routes inside express
const router = require('express').Router();

//using models
let Exercise = require('../models/exercise.model');

// GET REQUEST (ALL)
router.route('/').get((req,res) => {
    Exercise.find() //mongoose query or method
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
}); 

// POST REQUEST
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
    .catch(err => res.status(400).json('Error: ' + err));
})

// GET REQUEST (by id)
router.route('/:id').get((req,res) => {
    Exercise.findById(req.params.id) //mongoose query or method
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
}); 

// DELETE REQUEST (by id)
router.route('/:id').delete((req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
})

// POST REQUEST (update by id)
router.route('/update/:id').post((req,res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username,
        exercise.description = req.body.description,
        exercise.duration = Number(req.body.duration),
        exercise.date = Date.parse(req.body.date)

        exercise.save()
        .then(() => res.json('Exercise updated'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;