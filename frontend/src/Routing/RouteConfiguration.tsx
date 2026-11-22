import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";

const RouteConfiguration = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<h1>Signup Page</h1>} />
            <Route path="*" element={<h1>404 Page</h1>} />
        </Routes>
    )
}

export default RouteConfiguration;