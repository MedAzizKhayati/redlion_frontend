import { Route, Routes } from "react-router-dom";
import { FbAiFormPage } from "../pages";

const MainNavigator = () => {
    return (
        <Routes>
            <Route path="/" element={<FbAiFormPage />} />
            <Route path="/form" element={<FbAiFormPage />} />
            <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
    );
}

export default MainNavigator;