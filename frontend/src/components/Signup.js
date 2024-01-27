import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";


const Signup = () => {

    const { dispatch } = useContext(AuthContext); 

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setErrors] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const credintials = { email, password };
        console.log(credintials);
        // const response = await fetch('/api/user/signup',{
        //     method: 'POST',
        //     body: JSON.stringify(credintials),
        //     headers: {'Content-Type': 'application/json'}
        // });

        // const json = await response.json();
        // if (response.ok) {
        //     setEmail('');
        //     setPassword('');            
        //     setErrors(null);
        //     setEmptyFields([]);
        //     console.log('New User Added', json);
        //     setGstate('NEW USER ADDED: '+ json.email);//updating global state (change) to re-render a DOM

        // } else {
        //     setErrors(json.ERROR);
        //     setEmptyFields(json.emptyFields)
        //     console.error('ERROR', json.ERROR);
        // }

    }


    return ( 
    <form onSubmit= { handleSubmit } className="signup">
        <h3>Sign Up</h3>

        <label htmlFor="">E-mail: </label>
        <input 
            type="text"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            className= {emptyFields.includes('email') ? 'error' : ''}
        />

        <label htmlFor="">Password: </label>
        <input 
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            className= {emptyFields.includes('password') ? 'error' : ''}
        />

        <button>Signup</button>
    </form> 
    );
}
 
export default Signup;