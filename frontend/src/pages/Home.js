
import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {

    const [workouts, setWorkouts] = useState(null);
    const [change, setChange] = useState(false);


    const fetchWorkouts = async()=>{
        const response = await fetch("/api/workouts");
        const json = await response.json();

        if(response.ok){
            setWorkouts(json);
        }
    }


    useEffect(()=>{
        fetchWorkouts();
    }, [change]);



    return ( 
    <div className="home">
        <div className="workouts">
            {workouts && workouts.map(workout=>(
                <WorkoutDetails key={workout._id} workout= {workout} setChange= {setChange} change= {change}/>
            ))}
        </div>
        { <WorkoutForm change = {change} setChange = {setChange}/> /*sending a global state (change) as a prop to re-render a DOM on Add a workout */}
    </div>
     );
}
 
export default Home;