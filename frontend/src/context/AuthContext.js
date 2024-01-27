import { createContext, useReducer } from "react";
import { AuthReducer } from "../reducer/AuthReducer";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children })=>{

    const [ state, dispatch ] = useReducer( AuthReducer, { user: null } );

    console.log('AuthContext state: ', state);

    return(
        <AuthContext.Provider value={{ ...state, dispatch}}> 
            { children }  
        </AuthContext.Provider>
    ); //the spread syntax is used to find all the state objects, but in this case we only have one property (user: null)
}