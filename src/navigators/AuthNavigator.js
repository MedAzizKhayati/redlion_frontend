import { Route, Routes } from "react-router-dom";
import { FbAiFormPage, LoginPage, SignUpPage } from "../pages";


const AuthNavigator = () => {
    return (
        <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path="/register" element={<SignUpPage/>} />
            <Route path="/form" element={<FbAiFormPage/>} />
        </Routes>
    );
}

export default AuthNavigator;