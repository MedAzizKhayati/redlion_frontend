import { useContext } from "react";
import {  useLocation, Navigate, Outlet } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalProvider";

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
        <Navigate replace to="/login" state={{ from: location }} />
    );
}

export default ProtectedRoute;