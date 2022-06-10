import { createContext, useEffect, useReducer } from "react";
import DEFAULT_AUTH_STATE from "./initial-states/AuthState";
import AuthReducer from "./reducers/AuthReducer";


export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(AuthReducer, DEFAULT_AUTH_STATE);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user")); 
        if(user){
            authDispatch({
                type: "LOGIN",
                payload: user
            });
            console.log("Logged in");
        }
        
            
    }, []);

    return(
        <GlobalContext.Provider value={{
            authState,
            authDispatch
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;