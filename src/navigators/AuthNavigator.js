import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FbAiFormPage, LoginPage, SignUpPage } from "../pages";

export default () => {
    return (
        <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path="/register" element={<SignUpPage/>} />
            <Route path="/form" element={<FbAiFormPage/>} />
        </Routes>
    );
}