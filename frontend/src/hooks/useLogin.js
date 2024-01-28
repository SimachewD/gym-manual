import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

    
export const useLogin = () => {

    const { dispatch } = useAuthContext();

    const [ error, setErrors] = useState(null);
    const [ isLoading, setIsLoading] = useState(null);

    const login = async ( email, password)=>{

        setIsLoading(true);
        setErrors(null); 

        const response = await fetch('/api/user/login',{
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {'Content-Type': 'application/json'}
            });

        const json = await response.json();
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json)); // save the user to local storage
            console.log('User Logged in', json);
            dispatch({type: 'LOGIN', payload: json});//updating global state (user status) to re-render a DOM
            setIsLoading(false);
        } else {
            setIsLoading(false);
            setErrors(json.ERROR);
            console.error('ERROR', json.ERROR);
        }
    }

    return { login, isLoading, error };
}
