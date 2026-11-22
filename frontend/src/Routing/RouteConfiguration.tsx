import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import NotFound from "../Pages/NotFound";
import { CatalogPage, CoursePage } from "../Pages/Catalog";
import InfoPage from "../Pages/InfoPage";

const RouteConfiguration = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:courseSlug" element={<CoursePage />} />
            <Route path="/about" element={<InfoPage title="About Lurxena" />} />
            <Route path="/contact" element={<InfoPage title="Contact us" />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RouteConfiguration;
