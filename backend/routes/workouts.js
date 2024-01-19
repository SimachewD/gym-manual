
const express = require('express');
const { getWorkouts,
        getWorkout,
        createWorkout,
        updateWorkout,
        deleteWorkout,
        deleteAllWorkouts} = require('../controllers/workoutController');

const router = express.Router();
 
//GET method
router.get('/', getWorkouts);

//GET method
router.get('/:id', getWorkout);

//POST method
router.post('/', createWorkout);
 
//PUT method
router.patch('/:id', updateWorkout);

//DELETE method
router.delete('/:id', deleteWorkout);

//DELETE method 
router.delete('/', deleteAllWorkouts);

 module.exports = router;