
import formatDistanceToNow from 'date-fns/formatDistanceToNow';


const WorkoutDetails = ({workout, change, setChange})=>{



    const handleClick = async ()=>{

        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        });
        const json = await response.json();

        if (response.ok) {
            console.log('Workout Deleted', json);
            setChange(!change);//updating global state (change) to re-render a DOM

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