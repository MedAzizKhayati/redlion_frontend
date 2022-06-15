import { createContext, useEffect, useReducer } from "react";
import DEFAULT_AUTH_STATE from "./initial-states/AuthState";
import AuthReducer from "./reducers/AuthReducer";
import { getAuthUser, logout } from "../services/auth.service";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(AuthReducer, DEFAULT_AUTH_STATE);

    const init = async () => {
        try {
            const user = await getAuthUser();
            authDispatch({
                type: "LOGIN",
                payload: user
            });
        } catch (error) {
            console.log(error?.response?.data);
            authDispatch({
                type: "LOADED"
            });
            logout();
        }
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <GlobalContext.Provider value={{
            authState,
            authDispatch
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;