import { useState } from "react";
import { useLogin } from "../hooks/useLogin";


const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { login, isLoading, error } = useLogin();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await login( email, password );
        setEmail('');
        setPassword('');
    }


    return ( 
    <form onSubmit= { handleSubmit } className="login">
        <h3>Log In</h3>

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
        <button disabled = {isLoading}>Login</button>
        {error && <div className="error">{error}</div>}
    </form> );
}
 
export default Login;