import { useContext, useEffect, useState } from "react";
import { WorkoutContext } from "../context/NewContext";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {

    const { gstate } = useContext(WorkoutContext);
    const [ workouts, setWorkouts] = useState(null);



    const fetchWorkouts = async()=>{
        const response = await fetch("/api/workouts");
        const json = await response.json();

        if(response.ok){
            setWorkouts(json);
        }
    }



    useEffect(()=>{
        fetchWorkouts();
        console.log(gstate);
    }, [gstate]);

 

    
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