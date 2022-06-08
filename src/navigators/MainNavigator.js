import { Route, Routes } from "react-router-dom";
import { FbAiFormPage } from "../pages";

export default () => {
    return (
        <Routes>
            <Route path="/" element={<FbAiFormPage />} />
            <Route path="/about" element={<FbAiFormPage />} />
            <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
    );
}