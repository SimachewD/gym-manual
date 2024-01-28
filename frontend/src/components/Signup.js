import { useState } from "react";
import { useSignup } from "../hooks/useSignup";


const Signup = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { signup, isLoading, error } = useSignup();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await signup( email, password );
        setEmail('');
        setPassword('');
    }


    return ( 
    <form onSubmit= { handleSubmit } className="signup">
        <h3>Sign Up</h3>

        <label htmlFor="">E-mail: </label>
        <input 
            type="text"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
        />

        <label htmlFor="">Password: </label>
        <input 
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
        />

        <button disabled = {isLoading}>Signup</button>
        {error && <div className="error">{error}</div>}
    </form> 
    );
}
 
export default Signup;