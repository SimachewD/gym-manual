const workoutModel = require('../models/workout-model');
const mongoose = ('mongoose');


//get all workouts
const getWorkouts = async (req, res)=>{
    const workouts = await workoutModel.find({}).sort({createdAt: -1});
    res.status(200).json(workouts); 
}

//get a single workout 
const getWorkout = async (req, res)=>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) 
    {
       return res.status(404).json({ERROR:`No such workout: ${id}`});
    }

    const workout = await workoutModel.findById(id);
    if (!workout) {
        return res.status(404).json({ERROR:`No such workout: ${id}`});
    }

    res.status(200).json(workout); 
}
 
//post / create a workout
const createWorkout = async (req, res)=>{ 
    const { title, reps, load } = req.body;

    const emptyFields = [];

    if(!title){
      emptyFields.push('title');
    }
    if(!load){
        emptyFields.push('load');
      }
      if(!reps){ 
        emptyFields.push('reps');
      }
      if(emptyFields.length>0){
       return res.status(400).json({ERROR:'Please fill in all the fields',emptyFields});
      }  

    try {
        const workout = await workoutModel.create({title, reps, load});
        return res.status(200).json(workout);
    } catch (error) {
        return res.status(400).json({ERROR: error.message});
    }
 
}

//update a workout
const updateWorkout = async (req, res)=>{
    const { id } = req.params;         

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ERROR:`No such workout: ${id}`});
    }

    await workoutModel.findByIdAndUpdate(id, { ...req.body });
    const updated = await workoutModel.findById(id);      
    if (!updated) {  
        return res.status(404).json({ERROR:`No such workout: ${id}`});
    }   

    res.status(200).json(updated); 

}  

//delete a workout
const deleteWorkout = async (req, res)=>{
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id))
     {
       return res.status(404).json({ERROR:`No such workout: ${id}`});
     }

    try {
        const deleted = await workoutModel.findByIdAndDelete(id);     
        res.status(200).json(deleted); 
    } catch (error) {
        res.status(404).json({ERROR:error.message})
    } 
}  

//delete all workouts
const deleteAllWorkouts = async (req, res)=>{
    try {
        const deleted = await workoutModel.deleteMany({}); 
        if (!deleted) {  
            return res.status(404).json({ERROR:`Nothing to delete`});
        }
        res.status(200).json(deleted); 
    } catch (error) {
        res.status(404).json({ERROR:error.message})
    }
}
 
 
module.exports = {
                    getWorkouts,
                    getWorkout, 
                    createWorkout,
                    updateWorkout,
                    deleteWorkout,
                    deleteAllWorkouts
                 };