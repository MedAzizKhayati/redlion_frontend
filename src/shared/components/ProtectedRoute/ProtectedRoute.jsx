import { useContext } from "react";
import {  useLocation, Navigate, Outlet } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalProvider";
import { toast } from 'react-toastify';

const ProtectedRoute = () => {
    const {
        authState: {
            isAuthenticated
        }
    } = useContext(GlobalContext);
    const location = useLocation();

    return isAuthenticated ? (
        <Outlet />
    ) : (
        toast.info('Log in to continue!') &&
        <Navigate replace to="/login" state={{ from: location }} />
    );
}

export default ProtectedRoute;