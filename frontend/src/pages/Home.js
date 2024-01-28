

import { useContext, useEffect, useState } from "react";
import { WorkoutContext } from "../context/NewContext";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutDetails from "../components/WorkoutDetails";
import { useAuthContext } from "../hooks/useAuthContext";
 


const Home = () => {

    const { user } = useAuthContext();
    const { gstate } = useContext(WorkoutContext);
    const [ workouts, setWorkouts] = useState(null);



    const fetchWorkouts = async()=>{
        const response = await fetch("/api/workouts", {
            headers: { 'Authorization': `Bearer ${ user.token }`}
        }
        );
        const json = await response.json();

        if(response.ok){
            setWorkouts(json);
        } 
    }

    useEffect(()=>{
        if (user) {
            fetchWorkouts();
        }
    }, [gstate, user]);

    console.log(gstate);
    
    return ( 
        <div className="home">
        <div className="workouts">
            {workouts && workouts.map(workout=>(
                <WorkoutDetails key={workout._id} workout= {workout} />
            ))}
        </div>
        { <WorkoutForm /> }
    </div>
     );
}
  
export default Home;  