import { createContext, useState } from "react";

export const WorkoutContext = createContext();

const WorkoutsContextProvider = (props) => {

    const [gstate, setGstate] = useState(null);


    return ( 
            <WorkoutContext.Provider value={{gstate, setGstate}}>
                { props.children }
            </WorkoutContext.Provider> 
        );
}
 
export default WorkoutsContextProvider;