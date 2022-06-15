import { logout } from "../../services/auth.service";

const AuthReducer = (state, { type, payload }) => {
    switch (type) {
        case 'LOGIN':
        case 'SET_USER':
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload,
            };
        case 'LOADING':
            return {
                ...state,
                loading: true,
            };
        case 'LOADED':
            return {
                ...state,
                loading: false,
            };
        case 'LOGOUT':
            logout();
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
}

// export const setUserContext = async (authDispatch) => {
//     authDispatch({
//         type: 'SET_USER',
//         payload: await getUserMe()
//     });
// }

export default AuthReducer;