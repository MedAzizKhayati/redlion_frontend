import { Route, Routes } from "react-router-dom";
import { FbAiFormPage, HomePage, LoginPage, SignUpPage, StatisticsPage } from "../pages";
import { ProtectedRoute } from "../shared/components";

const MainNavigator = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path='/' element={<HomePage />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/predict-facebook-compaign" element={<FbAiFormPage />} />
                <Route path="/contact" element={<h1>Contact</h1>} />
                <Route path="/statistics" element={<StatisticsPage />} />
            </Route>
            <Route path="*" element={<h1> 404 Not Found </h1>} />
        </Routes>
    );
}

export default MainNavigator;