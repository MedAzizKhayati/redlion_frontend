import { createContext, useEffect, useReducer } from "react";
import DEFAULT_AUTH_STATE from "./initial-states/AuthState";
import AuthReducer from "./reducers/AuthReducer";
import { getAuthUser, logout } from "../services/auth.service";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(AuthReducer, DEFAULT_AUTH_STATE);

    const init = async () => {
        const startTime = +new Date();
        try {
            const user = await getAuthUser();
            const endTime = +new Date();
            setTimeout(() => {
                authDispatch({
                    type: "LOGIN",
                    payload: user
                });
            }, Math.max(1000 - endTime + startTime, 0));

        } catch (error) {
            const endTime = +new Date();
            console.log(error?.response?.data);
            setTimeout(() => {
                authDispatch({
                    type: "LOADED"
                });
                logout();
            }, Math.max(1000 - endTime + startTime, 0));
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