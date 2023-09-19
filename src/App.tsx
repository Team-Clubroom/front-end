/* plugin imports */
import {BrowserRouter, Route, Routes} from "react-router-dom";
/* component imports */
import {Login} from "./components/Login/Login";
import {Signup} from "./components/Signup/Signup";
import {LandingPage} from "./pages/LandingPage/landing.page.tsx";
import {ApplicationPage} from "./pages/Route/application.page.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ApplicationPage/>}/>
                <Route path="/home" element={<LandingPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    );
}
