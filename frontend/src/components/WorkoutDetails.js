
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useContext } from 'react';
import { WorkoutContext } from '../context/NewContext';
import { useAuthContext } from '../hooks/useAuthContext';

  
const WorkoutDetails = ({workout})=>{

    const { user } = useAuthContext();
    const { setGstate } = useContext(WorkoutContext);

    if (!user) {
        return
    }

    const handleClick = async ()=>{

        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${ user.token }`}
        });
        const json = await response.json();

        if (response.ok) {
            setGstate('WORKOUT DELETED: '+ json._id);//updating global state (change) to re-render a DOM

        } else {
           // setErrors(json.ERROR);
            console.error('ERROR', json.ERROR);
        }

    }


    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg):</strong>{workout.load}</p>
            <p><strong>Reps:</strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true} )}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    );
}

export default WorkoutDetails;