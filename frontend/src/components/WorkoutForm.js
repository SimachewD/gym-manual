import { useState } from "react"

const WorkoutForm = ({ change, setChange })=>{
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [errors, setErrors] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const workout = { title, load, reps};

        const response = await fetch('/api/workouts',{
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {'Content-Type': 'application/json'}
        });
        const json = await response.json();
        if (response.ok) {
            setTitle('');
            setLoad('');
            setReps('');            
            setErrors(null);
            setEmptyFields([]);
            console.log('New Workout Added', json);
            setChange(!change);//updating global state (change) to re-render a DOM

        } else {
            setErrors(json.ERROR);
            setEmptyFields(json.emptyFields)
            console.error('ERROR', json.ERROR);
        }
    }


    return (
        <form onSubmit= { handleSubmit } className="create">
            <h3>Add a New Workout</h3>

            <label htmlFor="">Exercise Title: </label>
            <input 
                type="text"
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
                className= {emptyFields.includes('title') ? 'error' : ''}
            />

            <label htmlFor="">Load (KG): </label>
            <input 
                type="number"
                onChange={(e)=>setLoad(e.target.value)}
                value={load}
                className= {emptyFields.includes('load') ? 'error' : ''}
            />

            <label htmlFor="">Reps: </label>
            <input 
                type="number"
                onChange={(e)=>setReps(e.target.value)}
                value={reps}
                className= {emptyFields.includes('reps') ? 'error' : ''}
            />

            <button>Add Workout</button>

            {errors && <div className="error">{errors}</div>}

        </form>
    )
}

export default WorkoutForm;  