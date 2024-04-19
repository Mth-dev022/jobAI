import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import CreateCvHome from '../pages/Cv/CreateCvHome'
import GenerateCV from '../pages/Cv/createCV/GenerateCV'
import App from "../App";

const AppRoutes = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route index element={<App />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cvarea" element={<CreateCvHome />} />
                    <Route path="/editcv" element={<GenerateCV />} />
                </Routes>
            </BrowserRouter>      
    )
}

export default AppRoutes